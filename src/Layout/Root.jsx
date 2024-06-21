import { Outlet } from "react-router-dom";
import Navbar from "../Pages/ShearedPages/Navbar";
import Footer from "../Pages/ShearedPages/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div>
      <div className="sm:p-2 md:p-4 lg:p-8 overflow-x-hidden">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Toaster />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
