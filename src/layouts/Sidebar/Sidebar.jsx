import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { CiBoxList } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import useAuth from "../../Hooks/useAuth";
import { toast, ToastContainer } from "react-toastify";

const Sidebar = () => {
    const location = useLocation();
    // console.log(location);
    const {user, logoutUser} = useAuth();
    const navigate = useNavigate();
    // console.log(user)

    const handleLogout = () => {
        logoutUser();
        if(user === null) {
            toast.success('The user logged out');
        }
        navigate('/');
    };

    return (
        <nav className={`${location.pathname === '/' && 'hidden'} text-base mt-14`}>
            <ul className="">
                <li>
                    <NavLink to={'/add-students'} className={({isActive}) => (isActive ? 'bg-[#F33823] flex gap-2 items-center px-6 py-3 rounded-md text-white' : 'bg-white flex gap-2 items-center px-6 py-3 rounded-md')}>
                        <LuUsers className="text-lg" />
                        <span>Add Students</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/manage-students'} className={({isActive}) => (isActive ? 'bg-[#F33823] flex gap-2 items-center px-6 py-3 rounded-md text-white' : 'bg-white flex gap-2 items-center px-6 py-3 rounded-md')}>
                        <CiBoxList className="text-lg" />
                        <span>Manage Students</span>
                    </NavLink>
                </li>
                <li className="px-6 py-3 rounded-md">
                    <button onClick={handleLogout} className="flex gap-2 items-center">
                        <IoIosLogOut className="text-lg" />
                        <span>Logout</span>
                    </button>
                </li>
            </ul>

            <ToastContainer />
        </nav>
    );
};

export default Sidebar;