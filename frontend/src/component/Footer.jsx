import { SiYoutubemusic } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <section className="flex items-center justify-center bg-cyan-950 text-white">
      <footer className="grid grid-cols-4 gap-4 m-10">
        <div className=" p-10">
          <h1 className="font-extrabold text-xl">Contact Us</h1>
          <p>Dean of Resources and Alumni Office</p>
          <p>MNNIT Allahbad - 211004</p>
        </div>
        <div className=" p-10">
          <p>For any queries please contact us at alumni@mnnita.ac.in</p>
          <p>Phone. No. +91-XXX-XXX-XXXX</p>
        </div>
        <div className=" p-10 flex flex-col gap-3">
          <h1 className="font-extrabold text-xl">Others</h1>
          {/* this is the hyper link */}
          <p>Office Order</p>
          <p>Alma World</p>
        </div>
        <div className="p-10   ">
          <h1 className="font-extrabold text-xl">Connect With Us</h1>
          <div className="p-4 flex text-3xl gap-4 ">
            <SiYoutubemusic color="#FF0000" />
            <FaLinkedin color="#0A66C2" />
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
