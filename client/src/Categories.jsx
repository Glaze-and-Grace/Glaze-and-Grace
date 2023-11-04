import React from "react";
import cat1 from "./image 8.png";
import cat2 from "./image 7.png";
import cat3 from "./image 6.png";
import cat4 from "./image 5.png";
import logo from "./vase.png";

const Categories = () => {
  return (
    <div className="mb-4 mt-2  ">
      <div className="text-center p-6">
        <h1 className="font-normal text-2xl ">Shop By Category</h1>
      </div>
      <div class="py-4 flex flex-wrap justify-center ">
        <div class="flex flex-row justify-center flex-wrap gap-5 items-center text-center ">
          <div class="bg-white rounded-lg p-6 shadow-md w-[180px] h-[250px] text-center">
            <img className="mb-2 w-[80px] mx-auto" src={logo} />
            <h2 class="text-xl font-medium mb-2">Tarjeta 1</h2>
            <p class="text-gray-600">Contenido de la tarjeta 1...</p>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-md w-[180px] h-[250px] text-center">
            <img className="mb-2 w-[80px] mx-auto" src={logo} />
            <h2 class="text-xl font-medium mb-2">Tarjeta 2</h2>
            <p class="text-gray-600">Contenido de la tarjeta 2...</p>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-md w-[180px] h-[250px] text-center">
            <img className="mb-2 w-[80px] mx-auto" src={logo} />
            <h2 class="text-xl font-medium mb-2">Tarjeta 3</h2>
            <p class="text-gray-600">Contenido de la tarjeta 3...</p>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-md w-[180px] h-[250px] text-center">
            <img className="mb-2 w-[80px] mx-auto" src={logo} />
            <h2 class="text-xl font-medium mb-2">Tarjeta 4</h2>
            <p class="text-gray-600">Contenido de la tarjeta 4...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
