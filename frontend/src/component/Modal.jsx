import ReactDom from "react-dom";
import { RxCross2 } from "react-icons/rx";

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="fixed inset-0 bg-black bg-opacity-70 z-50" />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-12 z-50 rounded-md shadow-lg">
        <button onClick={onClose} className=" rounded absolute -top-2 -right-1">
          <RxCross2 className="text-3xl border-2 rounded-md  bg-cyan-100  " />
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
