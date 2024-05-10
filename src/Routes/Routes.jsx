// import { Root } from "postcss";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ShearedPages/ErrorPage";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
