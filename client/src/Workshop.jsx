import React from "react";

const CeramicWorkshopDetails = () => {
  return (
    <div className="bg-[#DBC9B1] py-4 mt-8 ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Workshop Image */}
        <div className=" lg:order-2">
          <img
            src="https://i.pinimg.com/564x/93/dc/d4/93dcd48f570bd5a9ed110e8a43c3561a.jpg"
            alt="Workshop Image"
            className="w-[540px] h-[500px] rounded-3xl m-10 object-cover"
          />
        </div>

        {/* Workshop Details */}
        <div className="lg:w-1/2 lg:order-1 p-5">
          <h2 className="text-4xl font-bold text-[#17403C] mb-4">
            Ceramic Workshop
          </h2>
          <p className="text-lg text-black mb-2">
            Join us for an exciting ceramic workshop where you can unleash your
            creativity and make beautiful ceramic art pieces.
          </p>
          <p className="text-lg text-black mb-2">Date: January 15, 2023</p>
          <p className="text-lg text-black mb-4">Time: 10:00 AM - 4:00 PM</p>
          <ul className="list-disc text-lg text-black mb-6">
            <li>Learn the art of pottery from experienced artists.</li>
            <li>Create your unique ceramic pieces.</li>
            <li>All materials and tools provided.</li>
            <li>Perfect for beginners and enthusiasts.</li>
          </ul>
          <p className="text-lg text-black font-bold mb-2">Price: $99.99</p>
          <div className="text-left">
            <button className="px-6 py-3 bg-[#17403C] text-white rounded-full text-lg font-medium hover:bg-[#2c726b] focus:bg-[#17403C]">
              Save a Seat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CeramicWorkshopDetails;
