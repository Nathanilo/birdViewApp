/* eslint-disable no-unused-vars */
// import { FaAngleDown } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
function Input({label, placeholder, type, name, id, className,icon}) {
  return (
    <div className="">
      <label htmlFor="email" className="text-sm font-semibold text-[#475367]">
       {label}
      </label>
      <div className="relative">
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          className="w-full border border-gray-300 p-2 rounded-md mt-1 text-[14px] focus:outline-none focus:ring-2 focus:ring-primary-50 h-14"
        />
        <span className="block text-[#343330] absolute right-[10px] top-[25px]">
          {icon}
        </span>
      </div>
    </div>
  );
}

export default Input