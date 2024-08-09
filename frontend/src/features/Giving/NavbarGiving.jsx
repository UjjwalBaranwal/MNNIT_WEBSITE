import { Link } from "react-router-dom";
import image from "./../../assets/mnnit.jpg";

function NavbarGiving() {
  const linkStyle = "p-4 m-4";

  return (
    <div className="flex justify-between items-center p-4  ">
      <div>
        <img src={image} alt="MNNIT Logo" className="w-20 h-auto" />
      </div>

      <div className="flex">
        <Link to="/" className={linkStyle}>
          Home
        </Link>
        <Link to="#giving" className={linkStyle}>
          Giving
        </Link>
        <Link to="#impact" className={linkStyle}>
          Impact
        </Link>
        <Link to="#testimonial" className={linkStyle}>
          Testimonial
        </Link>
        <Link to="#faq" className={linkStyle}>
          FAQ
        </Link>
        <Link to="#donate" className={linkStyle}>
          Donate
        </Link>
      </div>
    </div>
  );
}

export default NavbarGiving;
