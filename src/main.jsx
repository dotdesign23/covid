import "./index.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import IndonesiaPage from "./pages/Indonesia";
import ProvinsiPage from "./pages/Provinsi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/indonesia",
    element: <IndonesiaPage />,
  },
  {
    path: "/provinsi",
    element: <ProvinsiPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);