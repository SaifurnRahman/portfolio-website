import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import Home from "../pages/Home";
import Login from "../components/Login";
import Root from "../Layout/Root";
import ContactSection from "../pages/ContactSection";
import AboutSection from "../pages/AboutSection";

export const router = createBrowserRouter([
  {
    path: "/",
   Component: Root,
   children: [
    {
        index: true,
        path: '/',
        Component: Home
    },
    {
      path:'contactSection',
      Component: ContactSection
    },
    {
      path:'aboutSection',
      Component: AboutSection
    }
   ]
  },
]);