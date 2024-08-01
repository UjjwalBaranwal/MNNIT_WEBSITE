import { Link } from "react-router-dom";
import image from "./../../assets/hero.jpg";
function HeroSection() {
  const styleLinkbtn =
    "m-2 p-4 bg-cyan-400 rounded-md text-xl hover:bg-cyan-600 hover:text-white ";
  return (
    <section className="hero-section my-4">
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-5xl m-3 leading-relaxed">
            Why Giving Back Important for you ???
          </h1>
          <p className="text-xl m-3 ">
            Giving Back is a cherished tradition of MNNIT Allahbad and gives us
            an opportunity to come together as a community and make a meaningful
            impact on the lives of students, faculty and the community of
            institute. We encourage our alumni, donors and well-wishers to
            contribute to various causes and projects of the institute.
          </p>
          <div className="flex gap-2 m-3">
            <Link to="resources" className={styleLinkbtn}>
              {" "}
              Giving Back : Resources{" "}
            </Link>
            <Link to="giving-back-time" className={styleLinkbtn}>
              {" "}
              Giving Back : Time{" "}
            </Link>
          </div>
        </div>
        <div>
          <img src={image} alt="hero-image" className="w-full" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
