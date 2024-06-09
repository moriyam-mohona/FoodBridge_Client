import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-ring loading-lg bg-orange-500"></span>
      </div>
    );
  }

  if (user) {
    // console.log("Inside user");
    return <div>{children}</div>;
  }
  return <Navigate to="/login" state={location?.pathname || "/"} />;
};

export default PrivateRoute;
