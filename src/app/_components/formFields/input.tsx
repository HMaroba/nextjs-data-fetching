import React from "react";

interface InputProps {
  labelName: string;
  placeholder: string;
  type: string;
}
const Input: React.FC<InputProps> = ({ labelName, placeholder, type }) => {
  return (
    <div>
      <div>
        <label>
          {labelName}
          <span className="ml-1 text-red-600">*</span>
        </label>
        <input
          className="w-full mb-3 border-2 p-1 rounded-md text-black focus:border-1 focus:border-blue-500"
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
