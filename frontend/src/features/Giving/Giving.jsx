import HeroSection from "./HeroSection";
import NavbarGiving from "./NavbarGiving";
import About from "./About";
import Impact from "./Impact";
import GivingBack_Resources from "./GivingBack_Resources";
import GivingBack_Time from "./GivingBack_Time";
import Footer from "./../../component/Footer";
import TestimonialSection from "./Testinomial";
import Faq from "./Faq";
function Giving() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <NavbarGiving />
        <HeroSection />
        <About />
        <Impact />
        <GivingBack_Resources />
        <GivingBack_Time />
        <TestimonialSection />
        <Faq />
        {/* <h1>This is Giving</h1> */}
      </div>
      <Footer />
    </>
  );
}

export default Giving;
