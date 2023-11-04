import { Link } from "react-router-dom";
import GoogleIcon from './Google.png';
import React, { useState } from "react";
import axios from "axios";

function Registration() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
       
      });
      const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = "Invalid email address";
    }
  
    if (!formData.password || formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
      }
  
    return Object.keys(errors).length === 0;
  };
  

  const redirectToLanding = () => {
    window.location.href = "/Landingpage";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post("/", formData);
        console.log(response.data.message);
        redirectToLanding();
      } catch (error) {
        console.error("Error registering user:", error);
        setErrors(error.response.data.errors);
      }
    }
  };

    const sectionStyle = {
        backgroundImage: 'url("https://img.freepik.com/free-photo/stone-floor-texture_1194-8978.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1698796800&semt=ais")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        
    };
  return (
    <section style={sectionStyle} className="bg-gray-50 dark:bg-gray-900 h-screen w-screen">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">  
      </a> 
      <div class="w-full bg-[#F9EFE6] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 opacity-75">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-[#17403C] md:text-2xl dark:text-white">
                  Create Account 
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                      <label for="text" class="block mb-2 text-sm font-medium mr-96 text-[#17403C] dark:text-white">Username</label>
                      <input type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="sajida_" required="" value={formData.username}
                onChange={handleInputChange}></input>
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium mr-96 text-[#17403C] dark:text-white">Email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""  value={formData.email}
                onChange={handleInputChange}></input>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium mr-96 text-[#17403C] dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""   value={formData.password}
                onChange={handleInputChange}></input>
                 {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                  </div>
                  <div>
                      <label for="confirm-password" class="block mb-2 text-sm font-medium text-[#17403C] mr-96 w-32 dark:text-white">Confirm password</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={formData.confirmPassword}
                onChange={handleInputChange}></input>
                 {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1"> {errors.confirmPassword}</p>
              )}
                </div>
                  <div class="flex items-start">
                  </div>
                  <button type="submit" class="w-full text-white bg-[#17403C] hover:bg-primary-700 font-medium rounded-3xl w-40 text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  <p className="text-[#17403C] text-s mt-2 font-bold"> Or</p>
                  <button
                                type="button"
                                className="flex items-center justify-center w-full mt-4 text-[#17403C] bg-transparent border border-[#17403C] hover:bg-primary-700 font-medium rounded-3xl w-40 text-sm px-5 py-2.5 text-center dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-red-800"
                            >
                                <img src={GoogleIcon} alt="Google Icon" className="w-6 h-6 mr-2" /> Sign up with Google
                            </button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <Link to="/Login" class="font-medium text-primary-600 hover:underline dark:text-[#17403C] ">Login here</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>

  )
}

export default Registration