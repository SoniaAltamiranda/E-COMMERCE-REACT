import React from "react";
import { Link } from "react-router-dom";

const FeatureCards = ({ cards }) => {
  return (
    <section className="text-gray-400 bg-[] body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-col text-center mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-[#8C7064]">
            PRODUCTS
          </h1>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {cards?.map((card, index) => (
            <div key={index} className="p-4 md:w-1/4 cursor-pointer">
              <Link to={`/categories/${card}`}>
                <div className="flex rounded-lg h-full bg-[] bg-opacity-75 p-8 flex-col border rounded-md border-gray-300">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#A98474] text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <h2 className="text-[#A98474] text-lg title-font font-medium capitalize">
                      {card || "example"}
                    </h2>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <hr className="my-8 border-gray-300" />
        
      </div>
    </section>
  );
};

export default FeatureCards;


