import React from "react";


/**
 * Renders a product card component with detailed information.
 * 
 * @param {Object} props - The props object containing various details of the product.
 * @returns {JSX.Element} A React component representing a product card.
 */

const ProductCard = ({
  id,
  badgeText,
  badgeColor,
  productImage,
  productName,
  thc,
  cbd,
  cbdColor,
  productType,
  info,
  brand,
  genetic,
  priceSymbol,
  price,
  unit,
  isNew,
  textColor,
  flavor,
}) => {
  return (
    <div className="w-full sm:w-[310px] border-2 border-[#28E3E9] rounded-[30px_0px_30px_0px] h-auto sm:h-[554px] flex flex-col">
      {/* Top Section with Badge and Image */}
      <div className="bg-white p-4 flex flex-col rounded-[30px_0px_0px_0px]">
        {/* Top Left Badge */}
        <div className="flex justify-between mb-2">
          <div
            className={`text-[12px] mb-2 rounded-[30px] px-4`}
            style={{ backgroundColor: badgeColor, color: textColor }}
          >
            &#8226; {badgeText}
          </div>

          {/* Conditional rendering of the "Neu" badge */}
          {isNew && (
            <div
              className={`text-[12px] text-[#116A6C] mb-2 rounded-[30px] px-4`}
              style={{ backgroundColor: "rgba(98, 195, 198, 0.1)" }}
            >
              Neu
            </div>
          )}
        </div>

        {/* Product Image */}
        <div className="mb-4 flex justify-center">
          <img
            src={productImage}
            alt="Product"
            className="h-[150px] object-contain"
          />
        </div>
      </div>

      {/* Bottom Section with Product Info */}
      <div className="bg-light-rgb p-4 flex-1 rounded-[0px_0px_30px_0px]">
        <h2 className="text-[#365758] font-semibold bg-[#c4e7ec] text-center rounded w-full text-[16px]">
          {productName}
        </h2>

        <div className="flex flex-wrap justify-start gap-2 my-2">
          <span className="bg-[#FCFCFA] px-[20px] py-[4px] rounded-[4px] text-[16px] text-[#116A6C]">
            {thc}
          </span>
          <span
            className="bg-[#62C3C6] px-[20px] py-[4px] text-sm rounded-[4px] text-[16px] text-white"
            style={{ backgroundColor: cbdColor }}
          >
            {cbd}
          </span>
          <span className="mt-1">
            <img src="circle.png" alt="icon" />
          </span>
        </div>

        <h3 className="text-lg font-semibold text-[#116A6C] mt-4">
          {productType} <br /> {info}
        </h3>

        <div className="text-sm flex flex-col sm:flex-row justify-between mt-8 text-[#116A6C]">
          <span>{brand}</span>
          <span>{flavor}</span>
        </div>
        <div className="text-sm flex flex-col sm:flex-row justify-between mt-1 text-[#116A6C]">
          <span>Genetik</span>
          <span>{genetic}</span>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
          <p className="text-[#62C3C6] text-2xl font-extrabold">
            {priceSymbol}
          </p>
          <span className="text-2xl font-extrabold text-[#116A6C]">
            {price}
          </span>

          <button
            className="bg-[#ECFEAA] text-[#004949] text-sm w-full sm:w-auto mt-2 sm:mt-0"
            style={{
              padding: "5px 18px 8px 18px",
              borderRadius: "24px 0px 24px 0px",
              opacity: 1,
            }}
          >
            in den Warenkorb
          </button>
        </div>
        <span className="text-[12px] text-[#365758] pb-2">{unit}</span>
      </div>
    </div>
  );
};

export default ProductCard;
