import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import Modal from "./LoginModal";
import { useAuth } from "./AuthContext";
import ProductCard from "./ProductCard";

const ProductList = ({ openModal }) => {
  const [products, setProducts] = useState([]);

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

  return (
    <div className="">
      <div className="text-center p-10">
        <h1 className="font-normal text-2xl mb-4">New In</h1>
        <h1 className="text-lg">Explore our new collection</h1>
      </div>

      <Swiper
        breakpoints={{
          550: {
            slidesPerView: 2,
          },
          825: {
            slidesPerView: 3,
          },
          1120: {
            slidesPerView: 4,
          },
          1600: {
            slidesPerView: 5,
          },
        }}
        slidesOffsetBefore={50}
        slidesOffsetAfter={50}
        freeMode={true}
        navigation={true}
        loop={true}
        effect="fade"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              id={product.id}
              title={product.title}
              category={product.category}
              price={product.price}
              image={product.image}
              old_price={product.old_price}
              openModal={openModal}
            />{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductList;
