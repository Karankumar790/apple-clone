import React from "react";

 function Card({ title, subtitle, price, imgUrl }) {
  const isCard5 = imgUrl === "/assets/card5.jpeg";
   return (
     <div className="relative bg-white rounded-2xl overflow-hidden  shadow-md w-full max-w-sm h-[480px] transition hover:shadow-lg hover:scale-105 duration-300 ease-in-out">
       <img
         src={imgUrl}
         alt={title}
         className="absolute inset-0 w-full h-full object-conatined"
       />
       <div className="relative z-10 p-6 h-full flex flex-col justify-between text-black">
         <div>
           <h2  className={`text-xl font-semibold ${
              isCard5 ? "text-white" : "text-black"
            }`}>{title}</h2>
           {subtitle && (
             <p className="text-sm mt-1">
               <span className="font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
                 Apple Intelligence
               </span>
               <sup className="text-red-300">^</sup>
             </p>
           )}
            <p className={`${isCard5 ? "text-white" : "text-black"}`}>
            {price}
          </p>
         </div>
       </div>
     </div>
   );
 }

export default Card;
