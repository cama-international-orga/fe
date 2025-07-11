import "./App.css";
import Header from "./components/Header";
import { useAppHook } from "./hooks/useAppHook";
import {
  MainPage,
  CategoryDetailPage,
  AdminLoginPage,
  ProductDetailPage,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const { navItems, isLoggedIn } = useAppHook();
  return (
    <BrowserRouter>
      <Header navItems={navItems} isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/categories/:categoryPath/:companyId"
          element={<CategoryDetailPage isLoggedIn={isLoggedIn} />}
        />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/admin" element={<AdminLoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
