import About from "./About";
import News from "./News";

function Aboutus() {
  return (
    <div className="mx-10 my-5 p-10 w-fit h-fit grid grid-cols-5 gap-10">
      <About />
      <News />
    </div>
  );
}

export default Aboutus;
