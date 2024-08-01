import { NavLink } from "react-router-dom";
import logo from "../assets/mnnit_.png";
import Button from "./Button";
function Navbar() {
  const style =
    "p-2 text-sm cursor-pointer  rounded-md uppercase font-semibold grid-item hover:border-b-3 hover:border-b-cyan-700";

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
            <NavLink to="career"> Career</NavLink>
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
          <li className={style}>
            <NavLink to="teams">Teams</NavLink>
          </li>
        </ul>
        <Button secondary outline rounded>
          Log In
        </Button>
      </div>
    </>
  );
}

export default Navbar;
