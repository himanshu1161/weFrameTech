import React from "react";
import Filter from "./Filter";
import GroupCards from "./GroupCards";

/**
 * Renders the MainComp component with a flex container that arranges Filter and GroupCards components
 * in a column on small screens and in a row with space between on larger screens.
 * @returns {JSX.Element} React component representing the MainComp.
 */
const MainComp = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-[20px] sm:gap-[85px] py-4 w-full">
      <Filter />
      <GroupCards />
    </div>
  );
};

export default MainComp;
