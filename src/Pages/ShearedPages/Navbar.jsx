import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#FC8A06 " : "",
            color: isActive ? "white" : "black",
            borderRadius: "9999px",
          })}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#FC8A06 " : "",
            color: isActive ? "white" : "black",
            borderRadius: "9999px",
          })}
        >
          Available Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/service"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#FC8A06 " : "",
            color: isActive ? "white" : "black",
            borderRadius: "9999px",
          })}
        >
          Add Food
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#FC8A06 " : "",
            color: isActive ? "white" : "black",
            borderRadius: "9999px",
          })}
        >
          Manage My Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#FC8A06 " : "",
            color: isActive ? "white" : "black",
            borderRadius: "9999px",
          })}
        >
          My Food Request
        </NavLink>
      </li>
    </>
  );
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
        <Link
          to="/"
          className="btn btn-ghost p-0 text-3xl font-bold text-[#03081F]"
        >
          FoodBridge
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">
          <button className="btn rounded-full bg-[#03081F] text-white text-md px-8 py-2 font-normal">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
