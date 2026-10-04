import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from "../components/Root";
import Home from "../pages/Home";
import Login from "../components/Login";

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
      path: "login",
      Component: Login
    }
   ]
  },
]);