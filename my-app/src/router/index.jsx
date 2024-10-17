// untuk halaman router

import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/homepage";
import About from "../pages/about";
import RootLayout from "../layouts/layoutroot";

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
    ],
  },
]);
