import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Error from "../components/Error";
import Home from "../pages/home/Home";
import Apps from "../pages/Apps";
import MyProfile from "../pages/MyProfile";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        loader: () => fetch("/appsData.json"),
        element: <Home></Home>,
      },
      {
        path: "/apps",
        loader: () => fetch("/appsData.json"),
        element: <Apps></Apps>,
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
