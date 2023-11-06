import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WishListPage from './Wishinglistpage';
import OldPurchasesSection from './OldPurchasesSection';
import EditItem from './Edit';
import axios from 'axios';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserDataFromApi()
      .then((data) => setUserData(data))
      .catch((error) => console.error(error));
  }, []);

  const fetchUserDataFromApi = async () => {
    try {
      const response = await axios.get('http://localhost:8080/userInfo');
      if (response.status === 200) {
        console.log(response);
        return response.data[0];
      }
    } catch (error) {
        console.log(error);
      throw error;
    }
  };

  const handleLogout = () => {
    alert('Logged out');
  };

  return (
    <div className="bg-[#DBC9B1]">
      {/* Navbar with buttons */}
      <div className="flex items-center justify-center p-4 bg-[#F9EFE6] max-w-screen-xl mx-auto">
        <Link to="/Edit">
          <button className="px-4 py-2 mr-4 font-semibold text-white bg-[#17403C] hover-bg-[#DBC9B1] rounded-full">
            Edit
          </button>
        </Link>
        <Link to="/WishListPage">
          <button className="px-4 py-2 mr-4 font-semibold text-white bg-[#17403C] hover-bg-[#DBC9B1] rounded-full">
            Wishlist
          </button>
        </Link>
        <Link to="/OldPurchasesSection">
          <button className="px-4 py-2 mr-4 font-semibold text-white bg-[#17403C] hover-bg-[#DBC9B1] rounded-full">
            Order History
          </button>
        </Link>
        <button className="px-4 py-2 font-semibold text-white bg-[#17403C] hover-bg-[#DBC9B1] rounded-full" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* User information */}
      <div className="flex flex-col items-center p-4 rounded-lg bg-[#F9EFE6] max-w-screen-xl mx-auto mt-4">
        {userData ? (
          <div className="w-64 h-64 overflow-hidden rounded-full">
            <img src={userData.image} alt="User Avatar" className="object-cover w-full h-full" />
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
        <h2 className="mt-4 text-lg font-semibold">{userData ? userData.title : ''}</h2>
        <p className="text-gray-600">Category: {userData ? userData.category : ''}</p>
      </div>

      {/* Padding between Edit and Profile */}
      
    </div>
  );
};

export default ProfilePage;