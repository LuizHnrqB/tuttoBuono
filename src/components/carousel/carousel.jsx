import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

export function CustomCarousel({ paos }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
  const isDesktop = window.innerWidth >= 768;
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  console.log(paos);
  return (
    <div className="carouselWrapper">
      {isDesktop && (
        <Slider {...settings1}>
          {paos.map((pao, index) => (
            <div
              key={index}
              className={`entryWrapper ${
                hoveredIndex === index ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="fundoIMG"
                style={{
                  backgroundImage: `url(/assets/paes/${pao.Foto}.png)`,
                  backgroundSize: "cover",
                }}
              >
                <div className="">
                  {/* {hoveredIndex === index && ( */}
                  <div className="textoWrapper">
                    <div className="textoIMG">
                      <p className="nomePao">{pao.Nome}</p>
                      <p className="preco">{pao.Preco}</p>

                      {pao.Recheio && (
                        <div className="recheios">
                          <p>
                            Recheios:
                            {paos[index].Recheio.map((recheio, index) => (
                              <span key={index}>{recheio.recheio}, </span>
                            ))}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* )} */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
      {!isDesktop && (
        <Slider {...settings2}>
          {paos.map((pao, index) => (
            <div>
              <div
                className="fundoIMG"
                style={{
                  backgroundImage: `url(assets/paes/${pao.Foto}.png)`,
                  backgroundSize: "cover",
                }}
              >
                <div className="">
                  <div className="textoWrapper">
                    <div className="textoIMG">
                      <p className="nomePao">{pao.Nome}</p>
                      <p className="preco">{pao.Preco}</p>

                      {pao.Recheio && (
                        <div className="recheios">
                          <p>
                            Recheios:
                            {paos[index].Recheio.map((recheio, index) => (
                              <span key={index}>{recheio.recheio}, </span>
                            ))}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}
