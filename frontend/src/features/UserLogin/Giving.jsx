import { Link } from "react-router-dom";
import Button from "../../component/Button";
import { useState } from "react";
import Modal from "../../component/Modal";
function Giving() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-6xl font-bold">
        <span className="border-b-4 border-b-green-400">Givin</span>g Back To
        Communitee
      </h1>
      <Link
        to="/giving"
        className="hover:underline m-2  text-blue-600 hover:text-blue-500  text-end"
      >
        Click to see why to give back &larr;
      </Link>
      <div className="flex flex-col justify-center  ">
        <h1 className="text-4xl  m-4 p-4 text-center">
          <span className="text-green-700 italic text-[60px]">&quot; </span>
          Empower the Future : Contribute with Tools, Not Coins.
          <span className="text-green-700 italic text-[60px]">&quot;</span>
        </h1>
        <p className=" text-center p-4 m-4 text-2xl font-mono">
          Remember when we had to get creative with what we had? Now’s your
          chance to upgrade the next generation. By donating equipment, you’re
          not just giving back—you’re handing over the keys to innovation. Let’s
          make sure today’s students have the tools we always dreamed of, with a
          little help from those who’ve been there, done that!
        </p>
        <div className="flex justify-end items-end">
          <Button rounded danger onClick={() => setIsOpen(true)}>
            Donate !!
          </Button>
        </div>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <div className="flex flex-col gap-2">
            <form className="grid grid-cols-2 gap-y-4">
              <label htmlFor="itemName">Item Name</label>
              <input type="text" id="itemName" placeholder="name of the item" />
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                placeholder="quantity of the item"
              />
            </form>
            <h1 className="text-2xl mt-3">
              <span className="border-b-4 border-b-green-500">Shipp</span>ing
              Address :
            </h1>
            <p className="m-4">MNNIT CSE Department , Teliyarganj</p>
            <Button className={"w-fit"} primary rounded outline>
              Inform the admin
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Giving;
