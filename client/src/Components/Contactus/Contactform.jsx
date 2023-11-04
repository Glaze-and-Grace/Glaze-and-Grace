import React from 'react'
import Footer from '../Footer'

function Contactform() {
  return (
    <div>


<section class="text-gray-600 body-font relative bg-[#DBC9B1]">

    <div class="container gap-0 px-5 py-24 mx-auto flex  sm:flex-nowrap flex-wrap bg-[#F9EFE6]">
        <div
            class="lg:w-1/2 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-2 p-10 flex items-end justify-start relative mx-20">
            <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0"
                marginwidth="0" scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d845.3468111660588!2d36.08464106415648!3d32.058773362353215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b65cd4d8f17e1%3A0x30e86b8a97e4ac7d!2sOrange%20Digital%20Village%20Zarqa!5e0!3m2!1sen!2sjo!4v1699115906355!5m2!1sen!2sjo"
                ></iframe>
            <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div class="lg:w-1/2 px-6">
                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                    <p class="mt-1">Zarqa, Jordan, Orange Coding Academy Zarqa  Building Number 80</p>
                </div>
                <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                    <a class="text-red-500 leading-relaxed">Melad.k.abulail@gmail.com</a>
                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                    <p class="leading-relaxed">+(962)776877452</p>
                </div>
            </div>
        </div>


        <div class="lg:w-2/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0  p-5 mx-20">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Contact us</h2>
            <p class="leading-relaxed mb-5 text-gray-600">Tell us if you have a suggestion or complaint ! 
            </p>
            <div class="relative mb-4">
                <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " placeholder='Enter your Name'></input>
            </div>
            <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter your Email'></input>
            </div>
            <div class="relative mb-4">
                <label for="Subject" class="leading-7 text-sm text-gray-600">Subject</label>
                <input type="text" id="Subject" name="Subject" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Subject'></input>
            </div>
            <div class="relative mb-4">
                <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" placeholder='Tell us what do you think'></textarea>
            </div>
            <button class="text-white bg-[#17403C] border-0 py-2 px-6 focus:outline-none hover:bg-[#C3CAC3] rounded text-lg">Submit</button>
         
        </div>
    </div>
</section>



<Footer/>

    </div>
  )
}

export default Contactform