import { Navigate, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import RootLayout from "./layouts/RootLayout";
import ErrorMessage from "./pages/ErrorMessage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorMessage />,
        children: [
          {
            index: true,
            element: <Navigate to="/dashboard" />,
          },
          { path: "dashboard", element: <Dashboard /> },
        ],
      },
    ],
  },
]);
