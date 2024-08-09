import { Link } from "react-router-dom";

function Giving() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-6xl font-bold">
        <span className="border-b-4 border-b-green-400">Givin</span>g Back To
        Communitee
      </h1>
      <Link to="/giving" className="hover:underline m-2">
        Click to see why to give back &rarr;
      </Link>
    </div>
  );
}

export default Giving;
