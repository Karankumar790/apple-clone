import React from "react";
import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

function header() {
  return (
    <>
      <div className="bg-gray-100 p-4 flex flex-col pl-82 ">
        <div className=" flex  gap-4">
          <span className="font-medium">Edication Store Home</span>
          <span className="text-gray-500">|</span>
          <button className="hover:underline">Exit</button>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex space-x-12 ">
          <FaApple className="text-2xl" />
          <a href="#" className="hover:underline font-medium">
            Store
          </a>
          <a href="#" className="hover:underline text-sm font-medium">
            Mac
          </a>
          <a href="#" className="hover:underline text-sm font-medium">
            iPad
          </a>
          <a href="#" className="hover:underline text-sm font-medium">
            iPhone
          </a>
          <a href="#" className="hover:underline text-sm font-medium">
            Watch
          </a>
          <a href="#" className="hover:underline text-sm font-medium">
            AirPods
          </a>
          <a href="#" className="hover:underline text-sm font-medium">
            TV & Home
          </a>
          <a href="#" className="hover:underline text-sm font-medium">
            Entertainment
          </a>
          <a href="#" className="hover:underline text-sm font-medium">
            Accessories
          </a>
          <a href="#" className="hover:underline text-sm font-medium">
            Support
          </a>
          <CiSearch className="text-2xl" />
        </div>
      </div>
      <div className="bg-[#FFFFFF] text-white text-center py-2">
        <p className=" text-[#1D1D1F] text-md font-semibold">
          University students and educators — look for education savings on
          Apple products.
          <a
            href="#"
            className=" text-blue-600 underline hover:no-underline ml-1"
          >
            Learn more &gt;
          </a>
        </p>
      </div>
    </>
  );
}

export default header;
