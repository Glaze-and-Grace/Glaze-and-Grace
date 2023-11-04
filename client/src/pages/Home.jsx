import React from "react";
import Hero from "../Hero";
import ProductList from "../Cards";
import CeramicWorkshopDetails from "../Workshop";
import TopRated from "../TopRated";
import Modal from "../LoginModal";
import Categories from "../Categories";
import { useState } from "react";

const Home = ({ openModal }) => {
  return (
    <div>
      <Hero />
      <Categories />
      <ProductList openModal={openModal} />
      <CeramicWorkshopDetails />
      <TopRated openModal={openModal} />
    </div>
  );
};

export default Home;
