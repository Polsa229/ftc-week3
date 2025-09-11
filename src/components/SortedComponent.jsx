import React, { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";

const SortedComponent = ({
  options = ["Popular", "Price", "Newest"],
  selected,
  onChange,
  label = "Sort by",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative w-full max-w-[200px]">
      {/* Bouton principal */}
      <div
        className="w-full border border-secondary-20 rounded-full text-secondary-60 md:hover:bg-secondary md:hover:text-primary flex justify-center items-center gap-2 cursor-pointer transition p-2"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <span className="flex items-center">
          {label}: {selected}
        </span>
        <IoChevronDownSharp className="h-4 w-4" />
      </div>

      {/* Menu déroulant */}
      {isOpen && (
        <div
          className="absolute top-full left-0 w-full border border-gray-300 rounded-md shadow-lg z-50 bg-white transition-opacity duration-300"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {options.map((value, index) => (
            <div
              key={index}
              className={`flex items-center justify-center gap-2 px-4 text-secondary hover:bg-secondary-60 hover:rounded-lg hover:text-primary hover:font-bold cursor-pointer ${
                value === selected ? "font-bold text-primary" : ""
              }`}
              onClick={() => {
                onChange(value);
                setIsOpen(false);
              }}
            >
              {value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortedComponent;
