// import { Root } from "postcss";
import { createBrowserRouter } from "react-router-dom";
// import ErrorPage from "../Pages/SharedPages/ErrorPage";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import Login from "../Pages/SecurityPages/Login";
import Register from "../Pages/SecurityPages/Register";
import ErrorPage from "../Pages/ShearedPages/ErrorPage";

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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
