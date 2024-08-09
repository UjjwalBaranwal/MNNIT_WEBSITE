import { NavLink } from "react-router-dom";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
} from "react-icons/hi2";

import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { LuSchool } from "react-icons/lu";

function MainNav() {
  const navStyle =
    "flex items-center gap-3 text-gray-600 text-base font-medium py-3 px-6 transition-all duration-300 hover:text-gray-800  hover:bg-gray-300 hover:rounded-sm active:text-gray-800 active:bg-gray-50 active:rounded-sm active:bg-gray-300 [&.active]:text-gray-800 [&.active]:bg-gray-50 [&.active]:rounded-sm";
  const iconStyle =
    "w-6 h-6 text-gray-400 transition-all duration-300 hover:text-brand-600 active:text-brand-600 [&.active]:text-brand-600";

  return (
    <nav>
      <ul className="flex flex-col gap-2">
        <li>
          <NavLink to="dashboard" className={navStyle}>
            <HiOutlineHome className={iconStyle} />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="event" className={navStyle}>
            <HiOutlineCalendarDays className={iconStyle} />
            <span>Event</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="jobPost" className={navStyle}>
            <IoPersonOutline className={iconStyle} />
            <span>Job / Opprtunity</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="settings" className={navStyle}>
            <HiOutlineCog6Tooth className={iconStyle} />
            <span>Settings</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="giving" className={navStyle}>
            <LuSchool className={iconStyle} />
            <span>Giving Back To Communitee </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/logout" className={navStyle}>
            <MdOutlineLogout className={iconStyle} />
            <span>Logout</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
