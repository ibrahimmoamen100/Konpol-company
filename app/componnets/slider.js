import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bg3 from "../../public/image/slider 2.jpeg";
import {
  default as bg1,
  default as bg2,
  default as bg4,
} from "../../public/image/slider 4.jpeg";

import Image from "next/image";
import React, { useState } from "react";
import Draggable from "react-draggable";

const carouselData = [
  {
    id: 1,
    image: "path/to/image1.jpg",
    title: "Building 1",
  },
  {
    id: 2,
    image: "path/to/image2.jpg",
    title: "Building 2",
  },
  {
    id: 3,
    image: "path/to/image3.jpg",
    title: "Building 3",
  },
  // Add more carousel items here
];

const slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDrag = (e, ui) => {
    if (ui.x > 50 && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else if (ui.x < -50 && activeIndex < carouselData.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handleDragStop = () => {
    setActiveIndex(activeIndex);
  };

  return (
    <div>
      <h1>Building Structure Company</h1>
      <div className="carousel">
        {carouselData.map((item, index) => (
          <Draggable
            key={item.id}
            axis="x"
            onDrag={handleDrag}
            onStop={handleDragStop}
            position={index === activeIndex ? { x: 0, y: 0 } : null}
          >
            <div
              className={`carousel-slide ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default slider;
