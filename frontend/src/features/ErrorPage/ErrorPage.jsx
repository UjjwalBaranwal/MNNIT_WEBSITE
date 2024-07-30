import "./ErrorPage.css"; // Import your CSS file
import ErrorSVG from "./ErrorSVG";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="  max-w-screen-md mx-auto my-20  flex flex-col justify-center text-center items-center">
      <ErrorSVG />
      <div className="flex flex-col">
        <h1 className="font-extrabold text-xl">
          Requested page is not found . Please contact the admin of this website
        </h1>
        <Link to={""}>&larr; Back to main page</Link>
      </div>
    </div>
  );
}

export default ErrorPage;
