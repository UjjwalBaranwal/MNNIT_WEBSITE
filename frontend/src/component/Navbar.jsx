import { NavLink } from "react-router-dom";
import logo from "../assets/mnnit_.png";
function Navbar() {
  const style =
    "p-2 text-sm cursor-pointer  hover:bg-cyan-400 rounded-md uppercase hover:text-white font-semibold";
  return (
    <>
      <div className="flex">
        <img src={logo} alt="" />
      </div>

      <div className="flex justify-center items-center">
        <ul className="flex justify-evenly">
          <li className={style}>
            <NavLink to={""}> Home</NavLink>
          </li>
          <li className={style}>
            <NavLink to="community">Community & Interest</NavLink>
          </li>
          <li className={style}>
            <NavLink to="volunteer">Volunteer</NavLink>
          </li>
          <li className={style}>
            <NavLink to="event">Event</NavLink>
          </li>
          <li className={style}>
            <NavLink to="benefit">Benefit</NavLink>
          </li>
          <li className={style}>
            <NavLink to="giving">Giving</NavLink>
          </li>
          <li className={style}>
            <NavLink to="stories">Stories</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
