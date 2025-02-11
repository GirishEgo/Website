import React, { useState, useEffect } from "react";
import "./AnimatedElements.css";
import floteImg4 from "../../assets/FlotingIcons/floteImg4.png";
import floteImg3 from "../../assets/FlotingIcons/floteImg3.png";
import floteImg2 from "../../assets/FlotingIcons/floteImg2.png";
import floteImg7 from "../../assets/FlotingIcons/floteImg7.png";
import floteImg6 from "../../assets/FlotingIcons/floteImg2.png";
import floteImg5 from "../../assets/FlotingIcons/floteImg5.png";


const AnimatedElements = () => {
  const [elements, setElements] = useState([]);

  // Initializing the elements with fixed positions
  useEffect(() => {
    const initialElements = [
      {
        id: 1,
        type: "ball",
        size: "small",
        animation: "float",
        top: "15vh",
        left: "4vw",
      },
      {
        id: 2,
        type: "ball",
        size: "medium",
        animation: "pulse",
        top: "30vh",
        left: "10vw",
      },
      {
        id: 3,
        type: "img",
        src: floteImg7,
        animation: "rotate",
        top: "45vh",
        left: "7vw",
      },
      {
        id: 4,
        type: "img",
        src: floteImg4,
        animation: "float",
        top: "67vh",
        left: "9vw",
      },
      {
        id: 5,
        type: "img",
        src: floteImg2,
        animation: "pulse",
        top: "80vh",
        left: "12vw",
      },
      {
        id: 6,
        type: "img",
        src: floteImg3,
        animation: "rotate",
        top: "20vh",
        left: "90vw",
      },
      {
        id: 7,
        type: "img",
        src: floteImg5,
        animation: "rotate",
        top: "30vh",
        left: "85vw",
      },
      {
        id: 8,
        type: "img",
        src: floteImg7,
        animation: "pulse",
        top: "50vh",
        left: "95vw",
      },
      {
        id: 9,
        type: "ball",
        size: "medium",
        animation: "pulse",
        top: "66vh",
        left: "85vw",
      },
      {
        id: 10,
        type: "ball",
        size: "large",
        animation: "rotate",
        top: "80vh",
        left: "88vw",
      },
    ];
    setElements(initialElements);
  }, []);

  return (
    <div className="animated-container">
      {elements.map((el) => {
        const style = {
          top: el.top,
          left: el.left,      
          transition: "transform 2s ease", // Smooth animation
        };

        if (el.type === "ball") {
          return (
            <div
              key={el.id}
              className={`ball ${el.size} ${el.animation}`}
              style={style}
            ></div>
          );
        }

        if (el.type === "img") {
          return (
            <img
              key={el.id}
              src={el.src}
              alt="Floating element"
             
          title= "Floating Design Element"
              className={`animated-img ${el.animation}`}
              style={style}
            />
          );
        }

        return null;
      })}
    </div>
  );
};

export default AnimatedElements;
