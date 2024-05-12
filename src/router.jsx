import { Navigate, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import RootLayout from "./layouts/RootLayout";
import ErrorMessage from "./pages/ErrorMessage";
import { Client } from "./pages/Client";

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
            element: <Navigate to="client" />,
          },
          {
            path: "client",

            children: [
              { index: true, element: <Client /> },
              { path: "dashboard?", element: <Dashboard /> },
            ],
          },
        ],
      },
    ],
  },
]);
