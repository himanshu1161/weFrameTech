import { useState } from "react";
/**
 * Functional component for the header section of the webpage.
 * Manages the search term state and displays a search input field along with navigation links.
 *
 * @returns JSX element representing the header section
 */
export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <header className="bg-white py-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        {/* Search Input */}
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

        {/* Navigation Links */}
        <nav className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 ml-1 text-[16px]">
          <a href="#" className="text-[#045A5C] font-bold flex items-center">
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M0 10C0 4.47715 4.47715 0 10 0V6C10 11.5228 5.52285 16 0 16V10Z"
                fill="#28E3E9"
                fillOpacity="1"
              />
            </svg>
            Rezept einlösen
          </a>
          <a href="#" className="flex items-center font-[400]">
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M0 10C0 4.47715 4.47715 0 10 0V6C10 11.5228 5.52285 16 0 16V10Z"
                fill="#62C3C6"
                fillOpacity="0.3"
              />
            </svg>
            Live Bestand
          </a>
          <a href="#" className="flex items-center font-[400]">
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M0 10C0 4.47715 4.47715 0 10 0V6C10 11.5228 5.52285 16 0 16V10Z"
                fill="#62C3C6"
                fillOpacity="0.3"
              />
            </svg>
            Videosprechstunde
          </a>
          <a href="#" className="flex items-center font-[400]">
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M0 10C0 4.47715 4.47715 0 10 0V6C10 11.5228 5.52285 16 0 16V10Z"
                fill="#62C3C6"
                fillOpacity="0.3"
              />
            </svg>
            FAQs
          </a>
          <a href="#" className="flex items-center font-[400]">
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M0 10C0 4.47715 4.47715 0 10 0V6C10 11.5228 5.52285 16 0 16V10Z"
                fill="#62C3C6"
                fillOpacity="0.3"
              />
            </svg>
            Kontakt
          </a>
          <button className="text-[#62C3C6] mt-4 sm:mt-0">
            <img src="Cart.png" alt="Cart" />
          </button>

          <button
            className="bg-[#ECFEAA] text-[#004949] font-medium mt-4 sm:mt-0"
            style={{
              width: "110px",
              height: "33px",
              padding: "5px 18px 8px 18px",
              borderRadius: "24px 0px 24px 0px",
              opacity: 1,
            }}
          >
            Anmelden
          </button>
        </nav>
      </div>
    </header>
  );
}
