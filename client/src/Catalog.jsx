import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import ProductCard from "./ProductCard";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 15; // Set the number of products per page
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  var endPoint = "";

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Filter products based on search input
  const filteredBySearch = searchInput
    ? filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    : filteredProducts;

  // Sort products based on the selected sort option
  const sortedProducts = [...filteredBySearch];
  if (sortOption === "priceLowToHigh") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "priceHighToLow") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === "topRated") {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  } else if (sortOption === "newArrivals") {
    // Implement your sorting logic for new arrivals
  }

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const pageCount = Math.ceil(sortedProducts.length / productsPerPage);
  const displayedProducts = sortedProducts.slice(
    pageNumber * productsPerPage,
    (pageNumber + 1) * productsPerPage
  );

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <img
        src="https://i.pinimg.com/564x/97/b5/fa/97b5fadfed0bb3b84b7f278597558669.jpg"
        className="w-full h-48 object-cover"
      />
      <div className=" lg:mx-32 ">
        {/* <div className="flex flex-col ">
          <div className="flex flex-col justify-start items-start text-left">
            <div className="mx-auto text-lg">Drinkwares</div>
            <div className="mx-auto text-lg">Tablewares</div>
            <div className="mx-auto text-lg">Cookingwares</div>
            <div className="mx-auto text-lg">Decoration</div>
            <Sidebar />
          </div>
        </div> */}

        {/* Add search bar */}
        <div className=" mt-8 shadow-md mx-14">
          <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search something.."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
        </div>

        <div className="flex mt-10 mx-20 justify-between">
          <div className="mb-0">
            {/* Category Filter Buttons */}
            <div className="flex space-x-4">
              <button
                className={`border px-4 py-2 rounded-lg ${
                  selectedCategory === "All"
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedCategory("All")}
              >
                All
              </button>
              <button
                className={`border px-4 py-2 rounded-lg ${
                  selectedCategory === "Tablewares"
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedCategory("Tablewares")}
              >
                Tablewares
              </button>
              <button
                className={`border px-4 py-2 rounded-lg ${
                  selectedCategory === "Drinkwares"
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedCategory("Drinkwares")}
              >
                Drinkwares
              </button>
              <button
                className={`border px-4 py-2 rounded-lg ${
                  selectedCategory === "Cookware"
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedCategory("Cookware")}
              >
                Cookware
              </button>
              <button
                className={`border px-4 py-2 rounded-lg ${
                  selectedCategory === "Decorative"
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedCategory("Decorative")}
              >
                Decorative
              </button>
            </div>
          </div>
          <div className="mb-0">
            {/* Sorting Dropdown */}
            <label className="block text-sm font-medium text-gray-700">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="mt-1 block w-full p-2 border rounded-md"
              >
                <option value="default">Default</option>
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="priceHighToLow">Price: High to Low</option>
                <option value="topRated">Top Rated</option>
                <option value="newArrivals">New Arrivals</option>
              </select>
            </label>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center flex-wrap mx-10 mt-14">
          <div className="flex flex-wrap gap-3 justify-around">
            {displayedProducts.map((product) => (
              <ProductCard
                id={product.id}
                title={product.title}
                category={product.category}
                price={product.price}
                image={product.image}
                old_price={product.old_price}
              />
            ))}
          </div>
          <ReactPaginate
            className="flex flex-row gap-6 m-10"
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />{" "}
        </div>
      </div>{" "}
    </div>
  );
};

export default Catalog;
