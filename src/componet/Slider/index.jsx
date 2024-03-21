
import React, { useState, useEffect } from "react";
import a1 from "../../assets/slider0.png";
import a2 from "../../assets/slider2.png";
import a3 from "../../assets/slider3.png";
import a4 from "../../assets/slider4.png";
import a5 from "../../assets/slider5.png";
 

import './index.css'
const images = [a1,a2,a3,a4,a5];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel">
      <img
        src={images[currentIndex]}
        width={1750}
        height={700}
        alt="carousel"
      />
    </div>
  );
};

export default Slider;

