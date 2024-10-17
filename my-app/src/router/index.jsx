// untuk halaman router

import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/homepage";
import About from "../pages/about";
import RootLayout from "../layouts/layoutroot";
import Blogs from "../pages/blogs";
import SingleParams from "../pages/blogs/_id";
// buat api loader dibawah element dari tiap routernya
import { getApiWithId, getSingleApi } from "../api/api";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
        loader: getSingleApi,
      },
      {
        path: "/blogs/:id",
        element: <SingleParams />,
        loader: getApiWithId,
      },
    ],
  },
]);
