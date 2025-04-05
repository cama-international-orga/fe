import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider, ModalProvider } from "./contexts";
import { CookiesProvider } from "react-cookie";
import { Toaster } from "sonner";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ModalProvider>
      <CookiesProvider>
        <AuthProvider>
          <App />
          <Toaster />
        </AuthProvider>
      </CookiesProvider>
    </ModalProvider>
  </StrictMode>
);
