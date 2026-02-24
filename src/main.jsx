import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CatContextProvider } from "./contexts/CatsContext.jsx";
import { ProsContextProvider } from "./contexts/ProsContext.jsx";
import { SearchContextProvider } from "./contexts/SearchContext.jsx";
import { AchContextProvider } from "./contexts/AchContext.jsx";
import { FeatContextProvider } from "./contexts/FeatContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProsContextProvider>
      <FeatContextProvider>
        <CatContextProvider>
          <SearchContextProvider>
            <AchContextProvider>
              <App />
            </AchContextProvider>
          </SearchContextProvider>
        </CatContextProvider>
      </FeatContextProvider>
    </ProsContextProvider>
  </StrictMode>,
);
