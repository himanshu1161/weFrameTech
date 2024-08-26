import React, { useState, useEffect } from "react";
import ProductCard from "./Cards";
/**
 * Component that displays a group of product cards with pagination functionality.
 * Retrieves product data from "/productData.json" and paginates the cards.
 * Uses useState and useEffect hooks to manage state and fetch data.
 * Renders current cards based on the currentPage state and allows navigation between pages.
 */
const GroupCards = () => {
  const [productData, setProductData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch("/productData.json");
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, []);

  // Get current cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = productData.slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Total number of pages
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(productData.length / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className="flex flex-wrap gap-4 ml-8 sm:ml-0">
        {currentCards.map((product) => (
          <div key={product.id}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <nav className="mt-4 flex justify-end items-center gap-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-2 text-[20px] ${
            currentPage === 1 ? "text-gray-400" : "text-[#62C3C6]"
          }`}
        >
          ←
        </button>
        <ul className="flex list-none font-sora gap-2">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`mx-1 ${currentPage === number ? "font-bold" : ""}`}
            >
              <button
                onClick={() => paginate(number)}
                className="text-[#045A5C] text-[18px]"
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === pageNumbers.length}
          className={`px-2 text-[20px] ${
            currentPage === pageNumbers.length
              ? "text-gray-400"
              : "text-[#62C3C6]"
          }`}
        >
          →
        </button>
      </nav>
    </div>
  );
};

export default GroupCards;
