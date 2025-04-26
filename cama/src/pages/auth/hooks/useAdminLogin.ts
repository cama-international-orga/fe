// useAdminLogin.ts
import { useState } from "react";
import { useAuth } from "../../../contexts";
import { isAxiosError } from "axios";
import { toast } from "sonner";
import { adminLogin } from "../../../apis/auth/auth";
import { useNavigate } from "react-router-dom";
export const useAdminLogin = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      // axios를 사용하여 API 호출
      const response = await adminLogin(id, password);
      // 로그인 성공 시 AuthContext의 login 함수 호출
      login({ accessToken: response.accessToken });
      toast.success("로그인 성공");
      navigate("/");
    } catch (err) {
      // axios 에러 처리
      if (isAxiosError(err)) {
        toast.error("관리자 비밀번호가 올바르지 않습니다.");
      } else {
        toast.error("로그인 중 오류가 발생했습니다.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    password,
    isLoading,
    handlePasswordChange,
    handleSubmit,
    id,
    handleIdChange,
  };
};
