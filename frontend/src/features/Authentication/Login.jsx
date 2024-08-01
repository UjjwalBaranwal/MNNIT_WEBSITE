import image from "../../assets/mnnit.webp";
import logo from "../../assets/mnnit_.png";
import Button from "../../component/Button";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Login() {
  return (
    <div className="grid grid-cols-2">
      <div className="imageSection">
        <img src={image} />
      </div>
      <div className="formSection flex flex-col h-screen">
        <img src={logo} className="h-3/4" />
        <div>
          <h1>MNNIT ALMA WORLD</h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
