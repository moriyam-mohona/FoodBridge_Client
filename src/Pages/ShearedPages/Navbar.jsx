import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import logo from "../../../public/assets/logo.png";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#FC8A06" : "",
            color: isActive ? "white" : "black",
            borderRadius: "9999px",
          })}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/availableFood"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#FC8A06" : "",
            color: isActive ? "white" : "black",
            borderRadius: "9999px",
          })}
        >
          Available Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addFood"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#FC8A06" : "",
            color: isActive ? "white" : "black",
            borderRadius: "9999px",
          })}
        >
          Add Food
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/manageFood"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#FC8A06" : "",
            color: isActive ? "white" : "black",
            borderRadius: "9999px",
          })}
        >
          Manage My Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myFoodRequest"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#FC8A06" : "",
            color: isActive ? "white" : "black",
            borderRadius: "9999px",
          })}
        >
          My Food Request
        </NavLink>
      </li>
    </>
  );
  const navigate = useNavigate();
  const { logout, user } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {
        if (user) {
          navigate(location?.state || "/login");
        }
      })
      .catch((error) => console.error(error.message));
  };
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <div className="flex gap-3 items-center">
          <img src={logo} alt="" className="h-20 w-16" />

          <Link
            to="/"
            className="btn btn-ghost p-0 text-3xl font-bold text-[#03081F]"
          >
            FoodBridge
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-5">
            <ul tabIndex={0} className="">
              <li>
                <button
                  className=" btn glass bg-[#FC8A06] rounded-full text-md  text-white"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </li>
            </ul>
            <div
              tabIndex={0}
              role="button"
              className=" tooltip btn-ghost btn-circle avatar flex "
              data-tip={user.displayName}
            >
              <img
                alt=""
                className="w-10 rounded-full "
                src={
                  user?.photoURL ||
                  "https://i.ibb.co/mXVJ4Qq/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIz-LTAx-L3-Jt-Nj-A5-LXNvb-Glka-WNvbi13-LTAw-Mi1w-Ln-Bu.webp"
                }
              />
            </div>
          </div>
        ) : (
          <Link to="/login">
            <button className=" btn glass bg-[#FC8A06] rounded-full text-md  text-white">
              Log In
            </button>{" "}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
