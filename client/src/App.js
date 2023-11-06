
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
import Registration from './Registration'
import Cart from "./Cart"
import Details from "./Details"
import Payment from "./Payment"
import Footer from "./Footer"
import Aboutusintro from "./Aboutusintro";
import Contactform from "./Contactform";
import Signin from "./Components/Registration/Signin";
import FAQ from "./pages/FAQ";
import ProfilePage from "./pages/Profileage";
import EditItem from "./pages/Edit";
import WishListPage from "./pages/Wishinglistpage";
import OldPurchasesSection from "./pages/OldPurchasesSection";
import CatCatalog from "./CatCatalog";
import YourComponent from "./admin/Sidebar";

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
          <Route exact path="/admin" element={<YourComponent />} />
          <Route exact path="/catalog" element={<Catalog />} />
          <Route exact path="/registration" element={<Registration />}  />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/payment" element={<Payment />} />
          {/* <Route exact path="/details/:id" element={<Details />} /> */}
          <Route path="/details/:id" element={<Details />} />
          <Route exact path="/aboutusintro" element={<Aboutusintro/>} />
          <Route exact path="/Contactform" element={<Contactform />} />
          <Route exact path="/signin" element={<Signin />} />
          {/* <Route exact path="/FAQ" element={<FAQ />} /> */}
          <Route exact path="/Profile" element={< ProfilePage/>} />
          <Route exact path="/Edit" element={< EditItem/>} />
          <Route exact path="/WishListPage" element={< WishListPage/>} />
          <Route exact path="/OldPurchasesSection" element={< OldPurchasesSection/>} />
          <Route exact path="/Cart" element={< Cart/>} />
          <Route path="/catalog/:id" element={<CatCatalog />} />


        </Routes>
      </BrowserRouter>
      < Footer />
    </AuthProvider>
  );
}

export default App;

