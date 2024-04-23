import React, { useEffect, useState } from "react";
import "./carousel.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchimages } from "../../store/slices/imagesSlice";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const { images } = useSelector((state) => state.images);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchimages());
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleClick = (id) => {
    console.log("clicked ", id);
  };
  return (
    <div className="carousel">
      {images.map((item, idx) => {
        return (
          <img
            onClick={() => handleClick(item.produitId)}
            src={item.image}
            alt="image"
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <span className="indicators">
        {images.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
