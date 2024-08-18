import { useState } from "react";

function InputField({ type, placeholder, labelName, initialField }) {
  const [value, setValue] = useState(initialField);
  const inputcl =
    "px-12 w-1/2 py-3 m-4 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500";
  return (
    <div className="flex justify-around items-center w-full gap-3">
      <label
        htmlFor={labelName}
        className="m-4  font-semibold text-xl tracking-wider w-1/2 text-center "
      >
        {labelName} :
      </label>
      <input
        className={inputcl}
        id={labelName} // Add id to link the label with the input
        placeholder={placeholder}
        type={type}
        value={value} // Set the value to the state
        onChange={(e) => setValue(e.target.value)} // Update the state on change
      />
    </div>
  );
}

export default InputField;
