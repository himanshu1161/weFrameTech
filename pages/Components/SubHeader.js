import React from "react";
import { useState } from "react";


/**
 * Functional component for rendering a subheader with search and filter options.
 * Uses state hooks for managing search term and toggle switch functionality.
 * @returns {JSX.Element} JSX element representing the subheader UI.
 */
const SubHeader = () => {
  const [isOn, setIsOn] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center py-4 px-4 sm:px-0">
      <h1 className="text-[#116A6C] flex gap-2 items-center text-3xl mb-4 sm:mb-0">
        <img src="leaf.png" alt="" width={15} className="" /> Blüten
      </h1>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
        <div className="relative w-full sm:w-auto mb-4 sm:mb-0">
          <input
            type="search"
            className="bg-[#EEF7F7] rounded-[30px] text-[#62C3C6] placeholder-[#62C3C6] w-full sm:w-[366px] p-1 pl-3 focus:outline-none"
            placeholder="Suchen"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {!searchTerm && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#62C3C6]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          )}
        </div>
        <button className="bg-[#E1F4F4] text-[#365758] font-[600] rounded-md px-4 py-2 flex items-center mb-4 sm:mb-0">
          Sortieren nach
          <span className="text-[#365758] pl-2 pt-[0.30rem]">
            <img src="Arrow_down.png" alt="" />
          </span>
        </button>

        <button className="bg-[#E1F4F4] text-[#365758] font-[600] rounded-md px-4 py-2 flex items-center mb-4 sm:mb-0">
          Verfügbarkeit
          <div className="ml-2 relative" onClick={toggleSwitch}>
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isOn}
              readOnly
            />
            <div
              className={`w-8 h-3 rounded-full mt-1 transition-colors duration-300 ${
                isOn ? "bg-[#62C3C64D]" : "bg-[#3657584D]"
              }`}
            >
              <div
                className={`absolute top-0.5 left-[2px] h-4 w-4 rounded-full bg-[#62C3C6] border border-[#62C3C6] transition-transform duration-300 ${
                  isOn ? "translate-x-4" : ""
                }`}
              ></div>
            </div>
          </div>
        </button>

        <button className="bg-[#E1F4F4] text-[#004949] rounded-md px-4 py-3 mb-4 sm:mb-0">
          <img src="ListView.png" alt="List View" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default SubHeader;
