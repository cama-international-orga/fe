// AdminLoginPage.tsx
import {
  adminLoginContainer,
  loginForm,
  passwordInput,
  loginButton,
  errorMessage,
} from "./index.style.css";
import { useAdminLogin } from "./hooks/useAdminLogin";

function AdminLoginPage() {
  const { password, error, isLoading, handlePasswordChange, handleSubmit } =
    useAdminLogin();

  return (
    <div className={adminLoginContainer}>
      <h1>관리자 로그인</h1>
      <form className={loginForm} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password">관리자 비밀번호</label>
          <input
            id="password"
            type="password"
            className={passwordInput}
            value={password}
            onChange={handlePasswordChange}
            placeholder="관리자 비밀번호를 입력하세요"
            required
          />
        </div>
        {error && <p className={errorMessage}>{error}</p>}
        <button type="submit" className={loginButton} disabled={isLoading}>
          {isLoading ? "로그인 중..." : "로그인"}
        </button>
      </form>
    </div>
  );
}

export default AdminLoginPage;
