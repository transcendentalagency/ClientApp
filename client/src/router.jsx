import { Navigate, createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import RootLayout from "./layouts/RootLayout";
import ErrorMessage from "./pages/ErrorMessage";
import LoginPage from "./pages/LoginPage";
import { Error } from "./pages/Error";

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
            element: <Navigate to="/login" />,
          },
          {
            path: "login",
            element: <LoginPage />,
          },
          {
            path: "client",
            children: [
              {
                index: true,
              },
              {
                path: `:id/dashboard`,
                element: <DashboardLayout />,
              },
            ],
          },
          {
            path: "*",
            element: <Error />,
          },
        ],
      },
    ],
  },
]);
