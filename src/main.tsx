import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Header from "./sections/Header.tsx";
import Footer from "./sections/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <App />
    {/* <Footer /> */}
  </StrictMode>
);
