import React from "react";
import { CiLocationOn } from "react-icons/ci";

function Content() {
  const products = [
    { name: "Mac", image: "/assets/store.png" },
    { name: "iPad", image: "/assets/store-card.png" },
    { name: "iPhone", image: "/assets/store-card1.png" },
    { name: "Apple Watch", image: "/assets/store-card2.png" },
    { name: "AirPods", image: "/assets/store-card3.png" },
    { name: "AirTag", image: "/assets/store-card4.png" },
    { name: "Apple TV 4K", image: "/assets/store-card5.png" },
    { name: "HomePod", image: "/assets/store-card6.png" },
    { name: "Accessories", image: "/assets/store-card7.png" },
  ];
  return (
    <div className="bg-[#f5f5f7] px-2 md:px-8 py-12">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h1 className="text-3xl sm:text-5xl font-semibold text-gray-700 leading-snug ">
            <span className="text-[#00796b] font-semibold">
              Education Store.{" "}
            </span>
            <br className="block md:hidden" />
            The most
            <br /> powerful tools for learning.
          </h1>

          <div className="mt-6 md:mt-0 flex flex-col space-y-4 text-sm text-gray-800">
            <div className="flex items-center space-x-2">
              <img
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-chat-earth-day-specialist-icon-202504_AV2?wid=70&hei=70&fmt=jpeg&qlt=90"
                alt="Specialist"
                className="w-6 h-6 rounded-full"
              />
              <span>
                <strong>Need shopping help?</strong>{" "}
                <a href="#" className="text-[#0071e3] hover:underline">
                  Ask a Specialist ↗
                </a>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <CiLocationOn className="text-xl" />
              <span>
                <strong>Visit an Apple Store</strong>{" "}
                <a href="#" className="text-[#0071e3] hover:underline">
                  Find one near you ↗
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-10 flex space-x-6 overflow-x-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[100px]"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <span className="mt-2 text-sm text-gray-700 text-center">
                {product.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
