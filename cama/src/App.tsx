import "./App.css";
import Header from "./components/Header";
import { useAppHook } from "./hooks/useAppHook";
import {
  MainPage,
  CategoryDetailPage,
  AdminLoginPage,
  ProductDetailPage,
  SearchPage,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryCompanyPage from "./pages/category-company";
import { useEffect } from "react";


function App() {
  const { navItems, isLoggedIn } = useAppHook();

  useEffect(() => {
    const setVH = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };
    setVH();
    window.addEventListener("resize", setVH);
    return () => window.removeEventListener("resize", setVH);
  }, []);
  return (
    <BrowserRouter>
      <Header navItems={navItems} isLoggedIn={isLoggedIn} />
      {/*<Sidebar/>*/}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/categories/:categoryPath/detail/:categoryDetailId/company/:companyId"
          element={<CategoryDetailPage isLoggedIn={isLoggedIn} />}
        />
        <Route
            path="/categories/:categoryPath/detail/:categoryDetailId/company"
            element={<CategoryCompanyPage isLoggedIn={isLoggedIn} />}
        />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/admin" element={<AdminLoginPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
