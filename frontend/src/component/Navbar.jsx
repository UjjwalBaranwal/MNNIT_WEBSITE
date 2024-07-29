import logo from "../assets/mnnit_.png";
import Button from "./Button";
function Navbar() {
  const style='p-2 text-sm cursor-pointer  rounded-md uppercase font-semibold grid-item hover:border-b-3 hover:border-b-cyan-700'

  return (
    <>
      <div className="flex">
        <img src={logo} alt="" />
      </div>

      <div className="flex justify-center items-center">
        <ul className="flex justify-evenly">
          <li className={style}>Home</li>
          <li className={style}>Community & Interest</li>
          <li className={style}>Volunteer</li>
          <li className={style}>Event</li>
          <li className={style}>Benefit</li>
          <li className={style}>Giving</li>
          <li className={style}>Stories</li>
          <li className={style}>Career</li>
        </ul>
        <Button secondary outline rounded>Log In</Button>
      </div>
    </>
  );
}

export default Navbar;
