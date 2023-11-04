
import "./App.css";
import Hero from "./Hero";
import Nav from "./Nav";
import ProductList from "./Cards";
import TopRated from "./TopRated";
import Categories from "./Categories";
import CeramicWorkshopDetails from "./Workshop";
import Catalog from "./Catalog";
import { AuthProvider } from "./AuthContext";
import Modal from "./LoginModal";
import { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Nav />
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        <Routes>
          <Route exact path="/" element={<Home openModal={openModal} />} />
          <Route exact path="/catalog" element={<Catalog />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

