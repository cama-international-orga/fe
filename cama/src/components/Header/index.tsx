// components/index.tsx

import React from "react";
// import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import {
  header,
  container,
  logoContainer,
  logo,
  navList,
  nav,
  navItem,
} from "./index.style.css.ts";
import HeaderLogo from "../../assets/png/Logo.png";

interface NavItem {
  name: string;
  path: string;
}

export const Header: React.FC = () => {
  const navItems: NavItem[] = [
    // { name: "신제품", path: "/new"},
    { name: "LEVER HANDLE", path: "/new" },
    { name: "MORTISE LOCK", path: "/new" },
    { name: "HINGES", path: "/" },
    { name: "MISCELLANEOUS HARDWARE", path: "/new" },
    { name: "SLIDING & FOLDING", path: "/admin/reports" },
    { name: "AUTOMATIC OPERATOR", path: "/new" },
  ];

  return (
    <>
      <header className={header}>
        <div className={container}>
          <div className={logoContainer}>
            {/*<Link to="">*/}
            <img src={HeaderLogo} alt="로고" className={logo} />
            {/*</Link>*/}
          </div>
          <nav className={nav}>
            <ul className={navList}>
              {navItems.map((item) => (
                <li key={item.name}>
                  {/*{item.external ? (*/}
                  {/*    <button*/}
                  {/*        onClick={() => handleExternalLink(item.path)}*/}
                  {/*        className={navItem}*/}
                  {/*    >*/}
                  {/*        /!*<item.icon className={styles.icon} size={18} />*!/*/}
                  {/*        {item.name}*/}
                  {/*    </button>*/}
                  {/*) : (*/}
                  <div className={navItem}>
                    {/*<item.icon className={styles.icon} size={18} />*/}
                    {item.name}
                  </div>
                  `{/*)}*/}
                </li>
              ))}
              <div className={navItem}>
                <FaSearch size={30} color="white" />
              </div>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
