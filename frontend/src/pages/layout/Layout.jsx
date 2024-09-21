import { Outlet } from "react-router-dom";
import "./Layout.css";
import Sidebar from "../../../components/sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="layoutContainer">
        <div className="layoutSidebar">
            <Sidebar/>
        </div>
      <div className="layoutContent">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
