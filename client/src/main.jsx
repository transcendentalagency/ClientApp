import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ErrorBoundary } from "./pages/ErrorBoundary";
import LoginPage from "./pages/LoginPage";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<LoginPage />}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
