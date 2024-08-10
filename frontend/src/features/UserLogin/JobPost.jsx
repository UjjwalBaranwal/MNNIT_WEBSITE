import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import JobForm from "./JobForm";
function JobPost() {
  const [expanded, setExpanded] = useState(false);
  function handleClick() {
    setExpanded(() => !expanded);
  }
  return (
    <div>
      <section className="p-4">
        <h1 className="text-2xl font-bold">
          <span className="border-b-2 border-cyan-500">Prev Posted </span>Job
        </h1>
        <div className="my-4 flex flex-col justify-center items-center">
          {/* kuch nahi hai to show that u havent posted any job yt */}
          <p className="text-gray-500">You have not post any job yet!</p>
        </div>
      </section>

      <div
        className={`flex justify-between items-center  ${!expanded?"border-b-2 border-gray-400":"border-t-2 border-gray-400 border-b-0"} p-4 cursor-pointer `}
        onClick={handleClick}
      >
        <div className="text-2xl font-bold">
 Post New Job
           Now
        </div>
        {expanded ? (
          <RiArrowDropUpLine size={32} />
        ) : (
          <RiArrowDropDownLine size={32} />
        )} 
      </div>
      <div className={`${!expanded ? "hidden" : "border-b-2 border-gray-400 rounded-lg "}`}>
        <JobForm />
      </div>
    </div>
  );
}

export default JobPost;
