import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ErrorBoundary } from "./pages/ErrorBoundary";
import Dashboard from "./pages/Dashboard";
import { Auth0Provider } from "@auth0/auth0-react";
import { domain, clientId } from "./auth_config.json";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<Dashboard />}>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}>
        <RouterProvider router={router} />
      </Auth0Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
