import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ErrorBoundary } from "./pages/ErrorBoundary";
import Dashboard from "./pages/Dashboard";
// import Auth0ProviderWithHistory from "./auth/Auth0Provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Auth0ProviderWithHistory> */}
    <ErrorBoundary fallback={<Dashboard />}>
      <RouterProvider router={router} />
    </ErrorBoundary>
    {/* </Auth0ProviderWithHistory> */}
  </React.StrictMode>
);
