import { FaExternalLinkAlt } from "react-icons/fa";
import Button from "../../component/Button";

function Card({years, title, qualification, responsibilities}) {

const responsibilityList = responsibilities.map((item, index) => (
    <li key={index}>
      {item}
    </li>
  ));
  return (
   <div className="space-y-2 p-7 m-5   rounded-md hover:shadow-lg hover:ring-2 hover:ring-cyan-700 hover:shadow-cyan-900 cursor-pointer border border-gray-400">
    <div className="flex justify-between">
    <h1 className="text-2xl font-extrabold leading-9">{title}</h1>
    {/* <Button secondary rounded outline><FaExternalLinkAlt/></Button> */}
    </div>
     <h2 className="text-xl font-semibold">Experience Required: <span className="text-lg font-light">{years} yrs</span></h2>
     <h2 className="text-xl font-semibold">Minimum Education Qualification:</h2>
     <p className="text-lg text-wrap">{qualification}</p>
     <h3 className="text-xl font-semibold">Key Responsibilities:</h3>
     <ul className="list-disc text-lg text-start ml-3 text-wrap w-[80%]">
        
        {responsibilityList}
        
     </ul>
    
   </div>
  )
}  

export default Card