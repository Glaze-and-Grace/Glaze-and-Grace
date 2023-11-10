import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WishListPage from './Wishinglistpage';
import OldPurchasesSection from './OldPurchasesSection';
import EditItem from './Edit';
import axios from 'axios';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserDataFromApi('http://localhost:8080/userInfo')
      .then((data) => setUserData(data))
      .catch((error) => console.error(error));
  }, []);

  const fetchUserDataFromApi = async () => {
    try {
      const response = await axios.get('http://localhost:8080/userInfo');
    //   if (response.status == 200) {
        console.log(response.data);
        return response.data;
    //   }
    } catch (error) {
        console.log(error);
      throw error;
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    // document.cookie = `token=logout; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=http://localhost:3000`;
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
        {/* {userData ? ( */}
        {/* //   <div className="w-64 h-64 overflow-hidden rounded-full"> */}
            {/* <img src= "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.transparentpng.com%2Fcats%2Fuser-2132.html&psig=AOvVaw2kB09gmbP_lIftBE8F0RKA&ust=1699476662010000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMCzr47isoIDFQAAAAAdAAAAABAY" /> */}
          {/* </div> */}
        {/* ) : ( */}
          {/* <p>Loading user data...</p> */}
        {/* )} */}
        <h2 className="mt-4 text-lg font-semibold">user name : {userData ? userData.username : ''}</h2>
        <p className="text-gray-600">email : {userData ? userData.email : ''}</p>
      </div>

      {/* Padding between Edit and Profile */}
      
    </div>
  );
};

export default ProfilePage;