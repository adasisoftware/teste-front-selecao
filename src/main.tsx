import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";

import { PublicRoutes } from "./routes/PublicRoutes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  </StrictMode>
);
