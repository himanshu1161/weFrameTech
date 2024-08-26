import { useState } from "react";

/**
 * RangeSlider component for selecting a range of values.
 * 
 * @param {number} minValue - The minimum value of the range.
 * @param {number} maxValue - The maximum value of the range.
 * @param {function} setMinValue - Function to set the minimum value.
 * @param {function} setMaxValue - Function to set the maximum value.
 * @param {number} min - The minimum possible value.
 * @param {number} max - The maximum possible value.
 * @param {string} sign - The unit or sign associated with the values.
 * @returns {JSX.Element} RangeSlider component with interactive range selection.
 */
const RangeSlider = ({
  minValue,
  maxValue,
  setMinValue,
  setMaxValue,
  min,
  max,
  sign,
}) => {
  const handleMinChange = (event) => {
    const value = Math.min(Number(event.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (event) => {
    const value = Math.max(Number(event.target.value), minValue + 1);
    setMaxValue(value);
  };

  return (
    <div className="relative w-full max-w-md mx-auto mt-4">
      <div className="relative h-1 bg-light-rgb rounded-[10px]">
        <div
          className="absolute h-1 bg-[#62C3C6] rounded-[10px]"
          style={{
            left: `${(minValue / max) * 100}%`,
            right: `${100 - (maxValue / max) * 100}%`,
          }}
        ></div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={minValue}
        onChange={handleMinChange}
        className="absolute w-full h-2 -top-4 appearance-none bg-transparent pointer-events-none"
        style={{ zIndex: minValue > max - 10 ? "5" : "3" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxValue}
        onChange={handleMaxChange}
        className="absolute w-full h-2 -top-4 appearance-none bg-transparent pointer-events-none"
        style={{ zIndex: minValue > max - 10 ? "3" : "5" }}
      />
      <div className="flex justify-between text-xs mt-3">
        <span className="bg-gray-100 rounded-[20px] py-[2px] px-[10px] w-[116px] text-gray-700">
          {minValue} {sign}
        </span>
        <span className="text-[18px] mx-1">-</span>
        <span className="bg-gray-100 rounded-[20px] py-[2px] px-[10px] w-[116px] text-gray-700">
          {maxValue} {sign}
        </span>
      </div>
    </div>
  );
};

export default RangeSlider;
