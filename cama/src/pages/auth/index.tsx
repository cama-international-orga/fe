// AdminLoginPage.tsx
import {
  adminLoginContainer,
  loginForm,
  loginInput,
  loginButton,
} from "./index.style.css";
import { useAdminLogin } from "./hooks/useAdminLogin";

function AdminLoginPage() {
  const {
    id,
    password,
    isLoading,
    handleIdChange,
    handlePasswordChange,
    handleSubmit,
  } = useAdminLogin();

  return (
    <div className={adminLoginContainer}>
      <h1>관리자 로그인</h1>
      <form className={loginForm} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password">관리자 ID</label>
          <input
            id="id"
            type="text"
            className={loginInput}
            value={id}
            onChange={handleIdChange}
            placeholder="관리자 ID를 입력하세요"
            required
          />
          <input
            id="password"
            type="password"
            className={loginInput}
            value={password}
            onChange={handlePasswordChange}
            placeholder="관리자 비밀번호를 입력하세요"
            required
          />
        </div>
        <button type="submit" className={loginButton} disabled={isLoading}>
          {isLoading ? "로그인 중..." : "로그인"}
        </button>
      </form>
    </div>
  );
}

export default AdminLoginPage;
