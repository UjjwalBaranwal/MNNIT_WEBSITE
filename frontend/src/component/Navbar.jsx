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
          <li className={style}>Home</li>
          <li className={style}>Community & Interest</li>
          <li className={style}>Volunteer</li>
          <li className={style}>Event</li>
          <li className={style}>Benefit</li>
          <li className={style}>Giving</li>
          <li className={style}>Stories</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
