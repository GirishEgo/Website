import React, { useState, useEffect } from "react";
import "./carousel.css"; // Import the CSS file
// import sliderImages4 from "../../assets/Images/slider banner/imgs (4).png";

const Carousel = () => {
  const images = [
    "https://t3.ftcdn.net/jpg/09/35/11/38/360_F_935113876_ZuJdvJbR8Vgn1lgNgvYk5kMCstzl4IZD.jpg",
    "https://vijaytransformers.com/images/main-slider/1.jpg",
    "https://www.electricalpanelmanufacturers.com/images/banner-two.jpg",
    // sliderImages4,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  // const handlePrev = () => {
  //   setCurrentIndex(
  //     (prevIndex) => (prevIndex - 1 + images.length) % images.length
  //   );
  // };

  return (
    <div className="carousel">
      <div className="image-container">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
      </div>
      {/* Buttons */}
      {/* <button onClick={handlePrev} className="carousel-button prev-button">
        Previous
      </button>
      <button onClick={handleNext} className="carousel-button next-button">
        Next
      </button> */}

      {/* <AnimatedElements /> */}
    </div>
  );
};

export default Carousel;
