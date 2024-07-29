import { IoChatbubblesOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

import Button from "../../component/Button";
import { BsGift } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";

function Box({ title, description, index, buttondes }) {
  console.log(index);
  return (
    <div className="flex flex-col justify-between items-center text-center space-y-2 p-6 h-[250px] w-full border-b-2 border-b-black shadow-md shadow-cyan-600 hover:shadow-md hover:shadow-cyan-800 hover:-translate-y-2 transition-all">
      <IconContext.Provider
        value={{
          size: "40px",
          color: "cyan-900",
          className: "global-class-name",
        }}
      >
        <div className="mb-2 text-cyan-800">
          {index == 0 ? (
            <IoCalendarOutline />
          ) : index == 1 ? (
            <BsGift />
          ) : (
            <IoChatbubblesOutline />
          )}
        </div>
      </IconContext.Provider>
      <div className="text-base font-semibold text-cyan-800 ">{title}</div>
      <div className="text-wrap text-[0.85rem]">{description}</div>
      <Button primary outline className="uppercase text-xs font-semibold">
        {buttondes}{" "}
      </Button>
    </div>
  );
}

export default Box;
