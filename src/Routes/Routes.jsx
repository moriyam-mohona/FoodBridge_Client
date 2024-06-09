// import { Root } from "postcss";
import { createBrowserRouter } from "react-router-dom";
// import ErrorPage from "../Pages/SharedPages/ErrorPage";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import Login from "../Pages/SecurityPages/Login";
import Register from "../Pages/SecurityPages/Register";
import ErrorPage from "../Pages/ShearedPages/ErrorPage";
import PrivateRoute from "../Routes/PrivateRoutes";
import FeaturedFoddDetails from "../Pages/Home/Feature/FeaturedFoddDetails";
import AvailableFood from "../Pages/AvailableFood/AvailableFood/AvailableFood";
import AddFood from "../Pages/AddFood/AddFood";
import MyFoodRequest from "../Pages/MyFoodRequest/MyFoodRequest";
import ManageFood from "../Pages/ManageFood/ManageFood";

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
      {
        path: "/foodDetails/:id",
        element: (
          <PrivateRoute>
            <FeaturedFoddDetails></FeaturedFoddDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/FeaturedFoods/${params.id}`),
      },
      {
        path: "/availableFood",
        element: (
          <PrivateRoute>
            <AvailableFood></AvailableFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/myFoodRequest",
        element: (
          <PrivateRoute>
            <MyFoodRequest></MyFoodRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "/manageFood",
        element: (
          <PrivateRoute>
            <ManageFood></ManageFood>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
