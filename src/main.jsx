import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CatContextProvider } from "./contexts/CatsContext.jsx";
import { ProsContextProvider } from "./contexts/ProsContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProsContextProvider>
      <CatContextProvider>
        <App />
      </CatContextProvider>
    </ProsContextProvider>
  </StrictMode>,
);
