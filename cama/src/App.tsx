import "./App.css";
import Header from "./components/Header";
import { MainPage, ProductsPage, AdminLoginPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./contexts";

function App() {
  const { isLoggedIn } = useAuth();
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/products"
          element={<ProductsPage isLoggedIn={isLoggedIn} />}
        />
        <Route path="/admin" element={<AdminLoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
