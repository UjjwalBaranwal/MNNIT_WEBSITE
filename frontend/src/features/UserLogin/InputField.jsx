import { useState } from "react";

function InputField({ type, placeholder, labelName, initialField }) {
  const [value, setValue] = useState(initialField);

  return (
    <div className="m-3 flex gap-3">
      <label
        htmlFor={labelName}
        className="m-4  font-semibold text-xl tracking-wider  "
      >
        {labelName} :
      </label>
      <input
        className=" p-[0.8rem_1.2rem] border border-solid rounded-lg"
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
