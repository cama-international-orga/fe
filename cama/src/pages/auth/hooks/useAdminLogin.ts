// useAdminLogin.ts
import { useState } from "react";
import { useAuth } from "../../../contexts";
import { publicInstance } from "../../../apis/axios";
import { isAxiosError } from "axios";
import { toast } from "sonner";
export const useAdminLogin = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // axios를 사용하여 API 호출
      const response = await publicInstance.post("/auth/login", { password });

      // 로그인 성공 시 AuthContext의 login 함수 호출
      login({ accessToken: response.data.accessToken });
      toast.success("로그인 성공");
    } catch (err) {
      // axios 에러 처리
      if (isAxiosError(err)) {
        setError(
          err.response?.data?.message || "관리자 비밀번호가 올바르지 않습니다."
        );
        toast.error("관리자 비밀번호가 올바르지 않습니다.");
      } else {
        setError("로그인 중 오류가 발생했습니다.");
        toast.error("로그인 중 오류가 발생했습니다.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    password,
    error,
    isLoading,
    handlePasswordChange,
    handleSubmit,
  };
};
