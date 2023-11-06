import React, { useState } from "react";
import logo from "../vase.png";
import UserDashboard from "./Users";
import ProductDashboard from "./Products";

const YourComponent = () => {
  const [isSideNavHidden, setIsSideNavHidden] = useState(false);

  const handleMenuClick = () => {
    setIsSideNavHidden(!isSideNavHidden);
  };

  return (
    <div>
      <nav className="bg-white border-b border-gray-300 pt-4 pb-2">
        <div className="flex justify-between items-center px-9">
          <button id="menuBtn" onClick={handleMenuClick}>
            <i className="fas fa-bars text-cyan-500 text-lg"></i>
          </button>
          <div class="flex flex-col justify-center items-center">
            <a href="#" title="" class="flex">
              <img class="w-auto h-8 lg:h-10" src={logo} alt="" />
            </a>
            <div>Glaze and Graze</div>
          </div>
          <div className="space-x-4">
            <button>
              <i className="fas fa-bell text-cyan-500 text-lg"></i>
            </button>
            <button>
              <i className="fas fa-user text-cyan-500 text-lg"></i>
            </button>
          </div>
        </div>
      </nav>

      <div
        id="sideNav"
        className={
          isSideNavHidden
            ? "hidden"
            : "lg:block hidden bg-white w-64 h-screen fixed rounded-none border-none"
        }
      >
        <div className="p-4 space-y-4 shadow-md h-screen">
          <a
            href="#"
            aria-label="dashboard"
            className="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-[#2c726b] to-[#54a39b]"
          >
            <i className="fas fa-home text-white"></i>
            <span className="-mr-1 font-medium">Dashboard</span>
          </a>
          <a
            href="#"
            className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
          >
            <i className="fas fa-wallet"></i>
            <span>Products</span>
          </a>
          <a
            href="#"
            className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
          >
            <i className="fas fa-exchange-alt"></i>
            <span>Users</span>
          </a>
          {/* <a
            href="#"
            className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
          >
            <i className="fas fa-user"></i>
            <span>Profile</span>
          </a> */}
          <a
            href="#"
            className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group"
          >
            <i className="fas fa-sign-out-alt"></i>
            <span>Logout</span>
          </a>
        </div>
      </div>

      <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-2">
        <div className="lg:flex gap-4 items-stretch">
          <div className="bg-white md:p-2 p-6 rounded-lg border border-gray-200 mb-4 lg:mb-0 shadow-md lg:w-[35%]">
            <div className="flex justify-center items-center space-x-5 h-full">
              <div>
                <p>Saldo actual</p>
                <h2 className="text-4xl font-bold text-gray-600">50.365</h2>
                <p>25.365 $</p>
              </div>
              <img
                src="https://www.emprenderconactitud.com/img/Wallet.png"
                alt="wallet"
                className="h-24 md:h-20 w-38"
              />
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg xs:mb-4 max-w-full shadow-md lg:w-[65%]">
            <div className="flex flex-wrap justify-between h-full">
              <div className="flex-1 bg-gradient-to-r from-[#54a39b] to-[#2c726b] rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                {/* <i className="fas fa-hand-holding-usd text-white text-4xl"></i> */}
                <p className="text-white">5000</p>
                <p className="text-white">Users</p>
              </div>
              <div className="flex-1 bg-gradient-to-r from-[#54a39b] to-[#2c726b] rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                {/* <i className="fas fa-exchange-alt text-white text-4xl"></i> */}
                <p className="text-white">10560</p>
                <p className="text-white">Products</p>
              </div>
              <div className="flex-1 bg-gradient-to-r from-[#54a39b] to-[#2c726b] rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                {/* <i className="fas fa-qrcode text-white text-4xl"></i> */}
                <p className="text-white">1500</p>
                <p className="text-white">Active</p>
              </div>
            </div>
          </div>
        </div>
        <ProductDashboard />
        <UserDashboard />
      </div>
    </div>
  );
};

export default YourComponent;