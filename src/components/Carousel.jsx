import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
  const [indexCurr, setIndex] = useState(0);

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${indexCurr * 100}%)` }}
      >
        {images.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item.img} />
            <div className="carousel-caption">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-controls">
        <button
          className="carousel-control"
          onClick={() =>
            setIndex((prevIndex) =>
              prevIndex === 0 ? images.length - 1 : prevIndex - 1
            )
          }
        >
          <ArrowBackIosIcon />
        </button>
        <button
          className="carousel-control"
          onClick={() =>
            setIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            )
          }
        >
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
