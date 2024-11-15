import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import { RequireAuth } from "./routes/Layout/layout";
import { AuthContextProvider } from "./context/AuthContext";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/",
    element: <RequireAuth />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "*",
        element: <App/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
);