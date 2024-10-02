import { NavLink } from "react-router-dom";
import { CiBoxList } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = () => {
    return (
        <nav className="text-base mt-14">
            <ul className="">
                <li>
                    <NavLink to={'/add-students'} className={({isActive}) => (isActive ? 'bg-[#F33823] flex gap-2 items-center px-6 py-3 rounded-md text-white' : 'bg-white flex gap-2 items-center px-6 py-3 rounded-md')}>
                        <LuUsers className="text-lg" />
                        <span>Add Students</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/'} className={({isActive}) => (isActive ? 'bg-[#F33823] flex gap-2 items-center px-6 py-3 rounded-md text-white' : 'bg-white flex gap-2 items-center px-6 py-3 rounded-md')}>
                        <CiBoxList className="text-lg" />
                        <span>Manage Students</span>
                    </NavLink>
                </li>
                <li className="px-6 py-3 rounded-md">
                    <button className="flex gap-2 items-center">
                        <IoIosLogOut className="text-lg" />
                        <span>Logout</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;