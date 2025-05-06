import React from "react";
import EducationCard from "./Card";

function cardContent() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="w-[85%] mx-auto px-4 py-3">
          <p className="text-xl sm:text-3xl font-medium text-gray-500">
            <span className="text-black font-semibold">
              Education Savings.{" "}
            </span>
            Get special pricing on Mac, iPad and more.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center px-4 pb-10">
          <EducationCard
            title="MacBook Air"
            subtitle="Apple Intelligence"
            price="From ₹89900.00‡ with education savings"
            imgUrl="/assets/card1.jpeg"
          />
          <EducationCard
            title="iPad Air"
            subtitle="Apple Intelligence"
            price="From ₹54900.00‡ with education savings"
            imgUrl="/assets/card2.jpeg"
          />
          <EducationCard
            title="iPad"
            price="From ₹32900.00‡ with education savings"
            imgUrl="/assets/card3.jpeg"
          />
          <EducationCard
            title="Mac Studio"
            subtitle="Apple Intelligence"
            price="From ₹194900.00‡ with education savings"
            imgUrl="/assets/card4.jpeg"
          />
          <EducationCard
            title="MacBook Pro"
            subtitle="Apple Intelligence"
            price="From ₹159900.00‡ with education savings"
            imgUrl="/assets/card5.jpeg"
          />
          <EducationCard
            title="Mac Studio"
            subtitle="Apple Intelligence"
            price="From ₹194900.00‡ with education savings"
            imgUrl="/assets/card6.jpeg"
          />
          <EducationCard
            title="Mac Mini"
            subtitle="Apple Intelligence"
            price="From ₹49900.00‡ with education savings"
            imgUrl="/assets/card7.jpeg"
          />
        </div>
      </div>
    </>
  );
}

export default cardContent;
