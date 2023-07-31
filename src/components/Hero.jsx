import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// carousel
const Hero = () => {
  return (
    <section className="text-gray-400 body-font mt-5">
      <div className="container mx-auto flex px-5 py-5 items-center justify-center flex-col">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          showThumbs={false}
        >
          <div>
            <img
              className="lg:w-1/5 md:w-1/4 w-1/2 mb-8 object-cover object-center rounded"
              alt="hero"
              src="/src/img/img2.jpg"
            />
            <div className="text-center lg:w-2/3 w-full"></div>
          </div>
          <div>
            <img
              className="lg:w-1/5 md:w-1/4 w-1/2 mb-8 object-cover object-center rounded"
              alt="hero"
              src="/src/img/img1.jpg"
            />
            <div className="text-center lg:w-2/3 w-full"></div>
          </div>
          <div>
            <img
              className="lg:w-1/5 md:w-1/4 w-1/2 mb-8 object-cover object-center rounded"
              alt="hero"
              src="/src/img/IMG1.png"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;
