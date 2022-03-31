import React from "react";
import HeroSlider from "react-slick";

//component
import { NextArrow, PrevArrow } from "./Arrows.component";  

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {
    const settingsLg = {//for large screen
        arrows: true,
        autoplay: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "300px",
        infinite: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />

    };
    const settings = {//for small and medium screens
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const images = [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      "https://images.unsplash.com/photo-1630157051334-e302a5fe8947?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1630149462161-2fe69fa964ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",
      "https://images.unsplash.com/photo-1630163277567-76a561174c31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80",
      "https://images.unsplash.com/photo-1630149244807-d1de727f89e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"

  ]

  return (
      <>
      <div className="lg:hidden">
      <HeroSlider {...settings}>
      {
          images.map((image) => (
              <div className="w-full h-64 md:h-80 py-3">
              <img src={image} alt ="testing" className="w-full h-full rounded-md" />
              </div>
          ))
      }
      </HeroSlider>
      </div>

      <div className="hidden lg:block">
      <HeroSlider {...settingsLg}>
      {
          images.map((image) => (
              <div className="w-full h-96 px-2 py-3">
              <img src={image} alt ="testing" className="w-full h-full rounded-md" />
              </div>
          ))
      }
      </HeroSlider>
      </div>






      
      </>
  );
};

export default HeroCarousal;
