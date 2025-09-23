import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Error from "../components/Error";
import Apps from "../pages/Apps";
import MyProfile from "../pages/MyProfile";
import AppDetails from "../pages/AppDetails";

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
        element: <AppDetails></AppDetails>,
      },
      {
        path: "/myProfile",
        element: <MyProfile></MyProfile>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
