import axios, {
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosInstance,
} from "axios";
import { TAuthResponse, TAnotherToken } from "./auth/type";
import { toast } from "sonner";

// 한 요청에 대해 무한 재시도를 방지하기 위한 장치
interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  //_retry: 토큰 갱신 재시도를 추적하는 플래그
  _retry?: boolean;
}

// public 인스턴스
export const publicInstance: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/public`,
});

// private 인스턴스
export const privateInstance: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/admin`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
  withCredentials: true,
});

//어드민 관련 수정시 request시 항상 확인
//따라서 토큰이 필요한 uri 와 아닌 uri 를 구분할 필요가 있습니다.
privateInstance.interceptors.request.use(
  (config: CustomAxiosRequestConfig): CustomAxiosRequestConfig => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);

//어드민 관련 수정시 response시 항상 확인
privateInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  async (error: AxiosError): Promise<AxiosResponse> => {
    const originalRequest = error.config as CustomAxiosRequestConfig;

    // 재시도 여부 확인
    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    const accessToken = localStorage.getItem("accessToken");

    try {
      // 토큰 갱신 시도
      const response: AxiosResponse<TAuthResponse, TAnotherToken> =
        await privateInstance.post("/auth/reissue", {
          accessToken: accessToken,
        });

      // 실패 처리
      if (response.status !== 200) {
        return Promise.reject(error);
      }

      const newAccessToken = response.data.accessToken;

      localStorage.setItem("accessToken", newAccessToken);

      if (originalRequest.headers) {
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
      }

      return privateInstance(originalRequest);
    } catch (refreshError) {
      localStorage.removeItem("accessToken");
      toast.error("🚨 세션이 만료되었습니다. 다시 로그인해 주세요.");
      window.location.href = "/admin";
      return Promise.reject(refreshError);
    }
  }
);
