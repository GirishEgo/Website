import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "./carousel.css"; // Import the CSS file

const Carousel = () => {
  const images = [
    "https://t3.ftcdn.net/jpg/09/35/11/38/360_F_935113876_ZuJdvJbR8Vgn1lgNgvYk5kMCstzl4IZD.jpg",
    "https://www.electricalpanelmanufacturers.com/images/banner-two.jpg",
    "https://vijaytransformers.com/images/main-slider/1.jpg",
  ];

  const texts = [
    "EXTENSIVE RANGE OF ANTI-CONDENSATION PANEL HEATERS & THERMOSTATS",
    "SPACE HEATING & CONTROL SOLUTIONS FOR PANEL BOARDS & SWITCHGEARS",
    "CLIMATE CONTROL SOLUTIONS FOR ENCLOSURES, MARSHALLING BOXES & CABINETS",
  ];

  const positions = ["top-left", "top-right", "bottom-center"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      <div className="image-container">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
        <div className={`text-overlay ${positions[currentIndex]}`}>
          {texts[currentIndex]}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
