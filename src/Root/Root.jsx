import { Outlet } from "react-router-dom";
import Navbar from "../layouts/Navbar/Navbar";
import Sidebar from "../layouts/Sidebar/Sidebar";

const Root = () => {
    return (
        <div>
            <Navbar />
                <div className="flex gap-6 px-6 py-6">
                    <Sidebar />
                    <Outlet />
                </div>
        </div>
    );
};

export default Root;