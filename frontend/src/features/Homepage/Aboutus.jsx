import About from "./About";
import News from "./News";

function Aboutus() {
  return (
    <div className="mx-10 my-5 p-5 w-fit  grid grid-cols-[1fr_0.5fr] gap-10">
      <About />
      <News />
    </div>
  );
}

export default Aboutus;
