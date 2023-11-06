import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import CartIcon from './Vector.png';
import HeartIcon from './Frame.png'
// import RatingSystem from './RatingSystem';
import Comments from './Comments';

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/dashboard/product/${id}`);
        console.log(id);
        console.log(response.data.product);
        setProduct(response.data.product[0]); 
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [id]);
  const handleAddToWishlist = async () => {
    // if (!isAuthenticated) {
    //   openModal();
    // } else {
        try {
            console.log("sdsdsdsdsdsdsdsdsd");
            const response = await axios.post(`http://localhost:8080/addwishlist/${30}`);
              console.log(response);
              console.log(id);
            //   return response.data[0];
          } catch (error) {
              console.log(error);
            // throw error;
          }
    // }
  };

  if (!product) {
    return <div>Loading...</div>;
  }
//   const handleRatingChange = (newRating) => {
//     console.log(`User rated the product: ${newRating}`);
//   };
//   const history = useHistory();
//   const [cartItems, setCartItems] = useState([]);
//   const [wishlistItems, setWishlistItems] = useState([]);

//   const handleAddToCart = () => {
//     const updatedCart = [...cartItems, selectedProduct];
//     setCartItems(updatedCart);
//     history.push('/cart'); 
//   };

//   const handleAddToWishlist = () => {
//     const updatedWishlist = [...wishlistItems, selectedProduct];
//     setWishlistItems(updatedWishlist);
//     history.push('/wishlist'); 
//   };


  
return (
    <section class="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
        <div class="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div class="flex flex-wrap -mx-4">
                <div class="w-full px-4 md:w-1/2 ">
                    <div class="sticky top-0 z-50 overflow-hidden ">
                        <div class="relative mb-6 lg:mb-10 lg:h-2/4 ">
                        <img
                src={require(`../src/assets/uploads/${product.images[0]}`)} 
                alt={product.name} 
                className="object-cover w-full lg:h-full"
              />
                        </div>
                        <div class="flex-wrap hidden md:flex ">
                            <div class="w-1/2 p-2 sm:w-1/4">
                          
                                <a href="#"
                                    class="block border border-blue-300 dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                     <img
                src={require(`../src/assets/uploads/${product.images[0]}`)} 
                class="object-cover w-full lg:h-20"
              />
                                </a>
                            </div>
                            <div class="w-1/2 p-2 sm:w-1/4">
                                <a href="#"
                                    class="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                     <img
                src={require(`../src/assets/uploads/${product.images[1]}`)} 
                class="object-cover w-full lg:h-20"
              />
                                </a>
                            </div>
                            <div class="w-1/2 p-2 sm:w-1/4">
                                <a href="#"
                                    class="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                     <img
                src={require(`../src/assets/uploads/${product.images[2]}`)} 
                class="object-cover w-full lg:h-20"
              />
                                </a>
                            </div>
                            <div class="w-1/2 p-2 sm:w-1/4">
                                <a href="#"
                                    class="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                     <img
                src={require(`../src/assets/uploads/${product.images[3]}`)} 
                class="object-cover w-full lg:h-20"
              />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full px-4 md:w-1/2 ">
                    <div class="lg:pl-20">
                        <div class="mb-8 ">
                            <span class="text-lg font-bold t text-[#DBC9B1] dark:text-[#DBC9B1]">New Arrival</span>
                            <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold text-[#17403C] md:text-4xl">
                  {product.name}
                </h2>
                <div className="mb-8">
        {/* <RatingSystem initialRating={3} onRatingChange={handleRatingChange} /> */}
        <p className="text-xs text-[#17403C]">(2 customer reviews)</p>
      </div>
                            <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">{product.details}</p>
            
                <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                  <span>{product.price} </span>
                  {product.price && (
                    <span className="text-base font-normal text-red-400 line-through dark:text-gray-400">
                      {250} $ 
                    </span>
                  )}
                </p>
             
                <p className="text-green-600 dark:text-green-300">{product.counts} in stock</p>
              </div>
                      
                        <div className="w-32 mb-8">
      <label htmlFor="" className="w-full text-xl font-semibold text-[#17403C] ">
        Quantity
      </label>
      <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
        <button
          onClick={decreaseQuantity}
          className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400"
        >
          <span className="m-auto text-2xl font-thin">-</span>
        </button>
        <input
          type="number"
          value={quantity}
          className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
          placeholder="1"
          readOnly
        />
        <button
          onClick={increaseQuantity}
          className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400"
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
    <div className="flex flex-wrap items-center -mx-4">
      <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
        <button
          className="flex items-center justify-center w-full p-4 text-white border border-[#17403C] rounded-md hover:bg-[#C3CAC3] hover:border-[#C3CAC3] bg-[#17403C]"
        //   onClick={handleAddToCart}
        >
          <img src={CartIcon} alt="Cart Icon" className="w-6 h-6 mr-2" />
          Add to Cart
        </button>
      </div>
      <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
        <button
          className="flex items-center justify-center w-full p-4 text-white border border-[#C3CAC3] rounded-md hover:bg-[#C3CAC3] hover:border-[#C3CAC3] bg-[#17403C]"
          onClick={handleAddToWishlist}
        >
          <img src={HeartIcon} alt="Heart Icon" className="w-6 h-6 mr-2" />
          Add to wishlist
        </button>
      </div>
    </div>
                    </div>
                </div>
            </div>
        </div>
        < Comments/>
    </section>
    

  
  )
}

export default Details