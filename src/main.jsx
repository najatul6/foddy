import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Routes from "./Router/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={Routes} />
    </HelmetProvider>
  </StrictMode>
);
