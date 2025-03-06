import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ErrorBoundary } from "./pages/ErrorBoundary";
import App from "./App";
import DashboardLayout from "./layouts/DashboardLayout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<DashboardLayout />}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
