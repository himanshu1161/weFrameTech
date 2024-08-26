import React, { useState } from "react";
import MultiRangeSlider from "./MultiRangeSlider";

/**
 * Functional component representing a filter section.
 * Manages state for filter values and visibility toggles.
 * Utilizes MultiRangeSlider component for price, THC, and CBD range sliders.
 * Allows filtering by manufacturer, genetic type, irradiation status, and terpenes.
 * Provides option to reset all filters.
 */
const Filter = () => {
  const [minValue, setMinValue] = useState(5);
  const [maxValue, setMaxValue] = useState(10);
  const [thcMinValue, setThcMinValue] = useState(11);
  const [thcMaxValue, setThcMaxValue] = useState(18);
  const [cbdMinValue, setCbdMinValue] = useState(1);
  const [cbdMaxValue, setCbdMaxValue] = useState(5);

  const [isOpen, setIsOpen] = useState(true);
  const [isSecondOpen, setIsSecondOpen] = useState(true);
  const [isFilterVisible, setIsFilterVisible] = useState(true); // State for mobile visibility

  const toggleOptions = () => setIsOpen(!isOpen);
  const toggleSecond = () => setIsSecondOpen(!isSecondOpen);
  const toggleFilterVisibility = () => setIsFilterVisible(!isFilterVisible); // Toggle filter visibility

  return (
    <div className="bg-white w-full sm:w-64">
      {/* Mobile Filter Toggle Button */}
      <div className="sm:hidden">
        <button
          onClick={toggleFilterVisibility}
          className="w-full text-center py-2 bg-thin-blue text-[#045A5C] font-semibold"
        >
          Filter
          <img
            src={isFilterVisible ? "/Arrow_down.png" : "/ArrowUp.png"}
            alt=""
            className="inline ml-2 mb-1"
          />
        </button>
      </div>

      {/* Filter Section */}
      {isFilterVisible && (
        <>
          <div className="bg-thin-blue text-center text-2xl text-[#045A5C] font-[600] hidden sm:block">
            Filter
          </div>

          <h3 className="font-semibold text-lg text-center mt-8 text-[#365758]">
            Preis
          </h3>
          <MultiRangeSlider
            minValue={minValue}
            maxValue={maxValue}
            setMinValue={setMinValue}
            setMaxValue={setMaxValue}
            min={1}
            max={20}
            sign={"€"}
          />
          <hr className="border-light-blue mt-5" />

          <div className="mb-4 mt-8 text-[#365758]">
            <div className="flex items-center justify-center">
              <h3 className="font-semibold text-lg text-[#365758] text-center flex-grow">
                Hersteller
              </h3>
              <button onClick={toggleOptions} className="ml-auto">
                {isOpen ? (
                  <img src="/ArrowUp.png" alt="" /> // Arrow up
                ) : (
                  <img src="/Arrow_down.png" alt="" /> // Arrow down
                )}
              </button>
            </div>
            {isOpen && (
              <div className="mt-2 space-y-2">
                {[
                  "ADREXpharma",
                  "Aurora",
                  "Avaay",
                  "Bedrocan",
                  "Cannamedical",
                ].map((brand) => (
                  <div key={brand} className="flex items-center">
                    <input
                      id={brand}
                      type="checkbox"
                      className="mr-2 appearance-none border-[#62C3C6] border-2 w-4 h-4 rounded-[5.33px]  checked:bg-thin-blue checked:border-none relative"
                    />
                    <label htmlFor={brand} className="text-sm">
                      {brand}
                    </label>
                  </div>
                ))}
                <button
                  className="bg-[white] text-[#004949] text-sm border-[#ECFEAA] border hover:bg-[#ECFEAA] ml-[6rem] sm:ml-0"
                  style={{
                    width: "223px",
                    height: "33px",
                    padding: "5px 18px 8px 18px",
                    borderRadius: "24px 0px 24px 0px",
                    opacity: 1,
                  }}
                >
                  mehr anzeigen
                </button>
              </div>
            )}
          </div>
          <hr className="border-light-blue mt-5" />

          <div className="mb-4 mt-8">
            <h3 className="font-semibold text-lg text-[#365758] text-center">
              THC Gehalt
            </h3>
            <MultiRangeSlider
              minValue={thcMinValue}
              maxValue={thcMaxValue}
              setMinValue={setThcMinValue}
              setMaxValue={setThcMaxValue}
              min={1}
              max={40}
              sign={"%"}
            />
          </div>
          <hr className="border-light-blue mt-5" />

          <div className="mb-4 mt-8">
            <h3 className="font-semibold text-lg text-[#365758] text-center">
              CBD Gehalt
            </h3>
            <MultiRangeSlider
              minValue={cbdMinValue}
              maxValue={cbdMaxValue}
              setMinValue={setCbdMinValue}
              setMaxValue={setCbdMaxValue}
              min={1}
              max={25}
              sign={"%"}
            />
          </div>

          <hr className="border-light-blue mt-5" />

          <div className="mb-4 mt-8">
            <h3 className="font-semibold text-lg text-[#365758] text-center">
              Genetik
            </h3>
            <div className="flex flex-wrap gap-1 justify-center mt-2">
              {["Indica", "Sativa", "Hybrid"].map((type) => (
                <button
                  key={type}
                  className="border text-[16px] px-[10px] py-1 rounded-[4px] hover:bg-[#62C3C6] bg-light-rgb hover:text-white text-[#045A5C]"
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          <hr className="border-light-blue mt-5" />

          <div className="mb-4 mt-8">
            <h3 className="font-semibold text-lg text-[#365758] text-center">
              Bestrahlung
            </h3>
            <div className="flex flex-wrap gap-1 justify-center mt-2">
              {["bestrahlt", "nicht bestrahlt"].map((option) => (
                <button
                  key={option}
                  className="border text-[16px] px-[10px] py-1 rounded-[4px] hover:bg-[#62C3C6] bg-light-rgb hover:text-white text-[#045A5C]"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <hr className="border-light-blue mt-5" />

          <div className="mb-4 mt-8 text-[#365758]">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg text-center">Terpene</h3>
              <button onClick={toggleSecond}>
                {isSecondOpen ? (
                  <img src="/ArrowUp.png" alt="" />
                ) : (
                  <img src="/Arrow_down.png" alt="" />
                )}
              </button>
            </div>
            {isSecondOpen && (
              <div className="mt-2 space-y-2">
                {/* Add Terpene filters here if needed */}
              </div>
            )}
          </div>

          <hr className="border-light-blue mt-5" />
          <div className="mt-8 flex justify-center">
            <button className="flex items-center text-[16px] text-black text-center">
              <img src="/cross.png" alt="cross icon" className="mr-2" />
              <span>alle Filter zurücksetzen</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Filter;
