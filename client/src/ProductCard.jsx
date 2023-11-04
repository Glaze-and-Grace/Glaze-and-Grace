import React, { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const ProductCard = ({
  id,
  title,
  image,
  price,
  old_price,
  category,
  openModal,
}) => {
  const { isAuthenticated } = useAuth();

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      openModal();
    } else {
      // Perform the "Add to Cart" action here
    }
  };

  const handleAddToWishlist = () => {
    if (!isAuthenticated) {
      openModal();
    } else {
      // Perform the "Add to Cart" action here
    }
  };
  return (
    <div class="w-72  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl mb-6">
      <a href="#">
        <div className="relative">
          <img className="h-72 w-72" src={image} alt="Card Image" />
          <div className=" absolute top-3 right-3 ">
            <button onClick={handleAddToWishlist}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="gray"
                class="w-6 h-6 fill-on-hover"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>{" "}
            </button>

            {/* You can replace the placeholder with your heart icon */}
            {/* <span className="text-red-500 text-2xl">❤️</span> */}
          </div>
        </div>
        <div class="px-4 py-3 w-72">
          <span class="text-gray-400 mr-3 uppercase text-xs">{category}</span>
          <p class="text-lg font-medium text-black truncate block capitalize">
            {title}
          </p>
          <div class="flex items-center">
            <p class="text-lg font-medium text-black cursor-auto my-3">
              {price}
            </p>
            <del>
              <p class="text-sm text-gray-600 cursor-auto ml-2">{old_price}</p>
            </del>
            <div class="ml-auto">
              <button onClick={handleAddToCart}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-bag-plus fill-on-hover"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                  />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </a>
      {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
    </div>
  );
};

export default ProductCard;
