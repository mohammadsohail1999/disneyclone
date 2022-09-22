import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Slider = () => {
  return (
    <section className="relative mt-7 shadow-2xl max-w-screen-2xl mx-auto">
      <Carousel
        infiniteLoop
        showThumbs={false}
        autoPlay
        interval={5000}
        showIndicators={false}
      >
        <div>
          <img loading="lazy" src="/images/slider-1.jpg" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-2.jpg" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-3.jpg" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-4.jpeg" />
        </div>
      </Carousel>
    </section>
  );
};

export default Slider;
