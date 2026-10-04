import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import Home from "../pages/Home";
import Login from "../components/Login";
import Root from "../Layout/Root";

export const router = createBrowserRouter([
  {
    path: "/",
   Component: Root,
   children: [
    {
        index: true,
        path: '/',
        Component: Home
    }
   ]
  },
]);