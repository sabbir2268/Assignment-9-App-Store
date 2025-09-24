import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../components/Error";
import Apps from "../pages/Apps";
import MyProfile from "../pages/MyProfile";
import AppDetails from "../pages/AppDetails";
import AuthLayout from "./../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        loader: () => fetch("/appsData.json"),
        element: <Apps></Apps>,
      },
      {
        path: "/apps/:id",
        element: <AppDetails />,
        loader: async ({ params }) => {
          const res = await fetch("/appsData.json");
          const apps = await res.json();
          const app = apps.find((a) => a.id.toString() === params.id);
          return app || null;
        },
      },
      {
        path: "/myProfile",
        element: <MyProfile></MyProfile>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
