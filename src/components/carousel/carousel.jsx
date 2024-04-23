import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

export function CustomCarousel() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color: "red" }}
        onClick={onClick}
      ></div>
    );
  }

  const isDesktop = window.innerWidth >= 1440;
  const isDesktopSmall = window.innerWidth <= 1439 && window.innerWidth >= 769;
  const mobile = window.innerWidth <= 769;

  const imageNumbers = Array.from({ length: 11 }, (_, i) => i + 1);

  const settings1 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
  };
  const settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
  };
  const settings3 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
  };

  return (
    <div className="carouselWrapper">
      {isDesktop && (
        <Slider {...settings1}>
          {imageNumbers.map((number) => (
            <div key={number}>
              <div
                className="fundoIMG"
                style={{
                  backgroundImage: `url(/assets/paes/${number}.png)`,
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          ))}
        </Slider>
      )}
      {isDesktopSmall && (
        <Slider {...settings2}>
          {imageNumbers.map((number) => (
            <div key={number}>
              <div
                className="fundoIMG"
                style={{
                  backgroundImage: `url(/assets/paes/${number}.png)`,
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          ))}
        </Slider>
      )}
      {mobile && (
        <Slider {...settings3}>
          {imageNumbers.map((number) => (
            <div key={number}>
              <div
                className="fundoIMG"
                style={{
                  backgroundImage: `url(/assets/paes/${number}.png)`,
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}
