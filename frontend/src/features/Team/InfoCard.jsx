import React from "react";
// import profile from "../../assets/mayank_sir.jpg";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import profile  from '../../assets/profile.png'

function InfoCard({name, post, duration, email, phoneno,location}) {
  return (
    <div className="grid grid-cols-5 gap-2 p-4 border-2  border-gray-400 rounded-sm text-xl">
      <img src={profile} alt="" className="h-3/4 col-span-2 rounded-sm" />
      <div className=" w-full col-span-3 p-2">
        <h2 className="text-3xl w-full border-b-2 py-2 border-dashed border-cyan-900 ">
          {name}
        </h2>
        <div className="flex justify-between items-center">
          <p>{post}</p>
          <span className="text-gray-400">{duration}</span>
        </div>
        <p>{location}</p>
        <div className="flex space-x-5 items-center ">
          <MdEmail />
          <p className="text-sky-600 hover:text-sky-500 cursor-pointer">{email}</p>
        </div>

        <div className="flex space-x-5 items-center">
          <IoIosCall />
         <p> {phoneno} </p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
