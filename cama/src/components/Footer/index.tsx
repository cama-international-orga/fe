// components/Footer.tsx
import {
  footer,
  footerContainer,
  footerContent,
  footerLogo,
  contactSection,
  categorySection,
  categoryGrid,
  categoryItem,
  catalogDownload,
} from "./index.style.css";
import { useAppHook } from "../../hooks/useAppHook";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const { navItems } = useAppHook();
  const navigate = useNavigate();
  return (
    <footer className={footer}>
      <div className={footerContainer}>
        <div className={footerLogo}>
          <h2>CAMA INTERNATIONAL</h2>
          <div className={catalogDownload}>
            <p>
              제품 구입 관련 문의는 온라인/오프라인 제품 리스트에이터에 메일링
              문의해 주세요.
            </p>
            <button>카탈로그 다운로드</button>
          </div>
        </div>

        <div className={footerContent}>
          <div className={contactSection}>
            <h3>CONTACT</h3>
            <ul>
              <li>
                <span>Address</span> 서울특별시 서초구 방배중앙로 11, 1F 101호
              </li>
              <li>
                <span>Phone</span> 02-3446-0737
              </li>
              <li>
                <span>Fax</span> 02-3446-1866
              </li>
              <li>
                <span>Email</span> camacam@hanmail.net
              </li>
            </ul>
          </div>

          <div className={categorySection}>
            <h3>CATEGORIES</h3>
            <div className={categoryGrid}>
              {navItems.map((category) => (
                <div
                  className={categoryItem}
                  key={category.categoryId}
                  onClick={() => {
                    navigate(`/categories/${category.categoryPath}/0?page=0`);
                  }}
                >
                  <h4>
                    {category.categoryName}
                    <span> + </span>
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
