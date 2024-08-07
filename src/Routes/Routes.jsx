import { createBrowserRouter } from "react-router-dom";
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
import UpdateMyFood from "../Pages/ManageFood/UpdateMyFood";
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
          fetch(
            `https://food-bridge-server.vercel.app/FeaturedFoods/${params.id}`
          ),
      },
      {
        path: "/availableFood",
        element: <AvailableFood></AvailableFood>,
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
      {
        path: "/updateFood/:id",
        element: (
          <PrivateRoute>
            <UpdateMyFood></UpdateMyFood>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
