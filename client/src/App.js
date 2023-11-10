
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
       
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        <Routes>
        <Route exact path="/" element={<div>
            <Nav />
            <Home openModal={openModal} />
            <Footer />
            </div>}/>
          <Route exact path="/admin" element={<YourComponent />} />
          <Route exact path="/catalog" element={<div>
            <Nav />
            <Catalog />
            <Footer />
            </div>} />
          <Route exact path="/registration" element={<div>
            <Nav />
            <Registration />
            <Footer />
            </div>}  />
          <Route exact path="/cart" element={<div>
            <Nav />
            <Cart />
            <Footer />
            </div>} />
          <Route exact path="/payment" element={<div>
            <Nav />
            <Payment />
            <Footer />
            </div>} />
          {/* <Route exact path="/details/:id" element={<Details />} /> */}
          <Route path="/details/:id" element={<div>
            <Nav />
            <Details />
            <Footer />
            </div>} />
          <Route exact path="/aboutusintro" element={<div>
            <Nav />
            <Aboutusintro />
            <Footer />
            </div>} />
          <Route exact path="/Contactform" element={<div>
            <Nav />
            <Contactform/>
            <Footer />
            </div>} />
          <Route exact path="/signin" element={<div>
            <Nav />
            <Signin />
            <Footer />
            </div>} />
          {/* <Route exact path="/FAQ" element={<FAQ />} /> */}
          <Route exact path="/Profile" element={<div>
            <Nav />
            <ProfilePage/>
            <Footer />
            </div>} />
          <Route exact path="/Edit" element={<div>
            <Nav />
            <EditItem />
            <Footer />
            </div>} />
          <Route exact path="/WishListPage" element={<div>
            <Nav />
            <WishListPage />
            <Footer />
            </div>} />
          <Route exact path="/OldPurchasesSection" element={<div>
            <Nav />
            <OldPurchasesSection />
            <Footer />
            </div>} />
          <Route exact path="/Cart" element={<div>
            <Nav />
            <Cart />
            <Footer />
            </div>} />
          <Route path="/catalog/:id" element={<div>
            <Nav />
            <CatCatalog/>
            <Footer />
            </div>} />

        
        </Routes>
       
      </BrowserRouter>
      {/* < Footer /> */}
    </AuthProvider>
  );
}

export default App;

