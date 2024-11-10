"use client"; // Ensures this is a client component in Next.js

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const BeforeAfterSlider = () => {
  const sliderRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(0); // Start at 0%
  const [direction, setDirection] = useState(1); // 1 for moving right, -1 for left

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderPosition((prevPosition) => {
        let newPosition = prevPosition + direction;
        // Change direction when reaching 100% or 0%
        if (newPosition >= 100) {
          setDirection(-1); // Move left
          return 100; // Clamp to 100%
        } else if (newPosition <= 0) {
          setDirection(1); // Move right
          return 0; // Clamp to 0%
        }
        return newPosition; // Return new position
      });
    }, 30); // Adjust speed by changing the interval time (in milliseconds)

    return () => clearInterval(interval); // Clean up on component unmount
  }, [direction]);

  return (
    <div className="slider-container">
      <div className="image-slider" ref={sliderRef}>
        <div className="image-container before">
          <Image src="https://imgs.search.brave.com/sjlebeqGqmMuA9oz8Fq1l-V0IdtKeOl60R24Mc8yDOc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM3/MDkyOTM3Ny9waG90/by9jbG9zZS11cC1v/Zi1jb21wdXRlci1w/cm9ncmFtbWVyLWNv/ZGluZy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9dmxvQkhr/d0I4azVfWUszTXRf/NUJvbG50VG1qUnFP/Z2tBSzUzMXlzM2hr/bz0" alt="Before" fill objectFit="cover" />
        </div>
        <div className="image-container after">
          <Image src="https://imgs.search.brave.com/eTXWZt3VyGt2UIt2tUevieyNaws_G_K_K4ZjiVqbr6o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/NjcwMjY5NC9waG90/by9kZXNpZ25lcnMt/ZHJhd2luZy13ZWJz/aXRlLXV4LWFwcC1k/ZXZlbG9wbWVudC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/bk15QnhadUExOUxm/b3dfZWlVcFoxVUFn/aWJCNFZKZ1I2dF83/X2UtdHlNYz0" alt="After" fill objectFit="cover" />
        </div>
        <div
          className="slider-divider"
          style={{ left: `${sliderPosition}%` }}
        >
          <span className="divider-handle"></span>
        </div>
      </div>

      <div className="text-area">
        <h2 className="heading">
         Difference Of <span className="vector-text">Ui/Ux and Coding</span>
        </h2>
        <p>
        UI/UX design focuses on creating user-friendly and visually appealing interfaces, ensuring an intuitive experience. It combines aesthetics with functionality, guiding users through a seamless interaction process.
          <br />
          <br />
        Coding brings these designs to life, turning visual concepts into interactive, dynamic websites or applications. Together, UI/UX and coding create an engaging, user-centered digital environment.
        </p>
      </div>

      <style jsx>{`
        .slider-container {
          display: flex;
          align-items: center;
          margin-left: -10px; /* Increased left margin to move the section right */
          background-color: #444; /* Background color */
          background-attachment: fixed; /* Lock background to prevent scrolling effect */
          background-position: center; /* Center background */
          max-width: 1520px; /* Restrict background width on large screens */
          margin: 0 auto; /* Center section within viewport */
          padding: 25px;
          width: calc(100% - -10px); /* Adjusted width calculation */
          flex-direction: row; /* Default row layout for larger screens */
        }

        .image-slider {
          position: relative;
          width: 100%;
          max-width: 500px;
          height: 400px;
          background-color: #FFFFFF; 
          overflow: hidden;
          margin-right: 20px; /* Space between slider and text area */
          border-radius: 2%;
        }

        .image-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .image-container.before {
          z-index: 1;
        }

        .image-container.after {
          z-index: 2;
          clip-path: inset(0 ${100 - sliderPosition}% 0 0); /* Only show the right portion of the after image */
        }

        .slider-divider {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background-color: #fff;
          z-index: 3;
          cursor: col-resize;
        }

        .divider-handle {
          position: absolute;
          top: 50%;
          left: -8px;
          transform: translateY(-50%);
          width: 24px;
          height: 24px;
          background-color: #C9F31D;
          border-radius: 50%;
          border: 2px solid #fff;
          cursor: pointer;
        }

        .text-area {
          max-width: 850px; /* Set a max width for the text area */
          margin-left: 20px; /* Space between slider and text area */
          font-size: 1.2rem;
          color: #FFFFFF;
        }

        .text-area h2 {
          margin: 15px  0; /* Increased margin above the heading to move it up */
          font-size: 2.3rem; /* Increase the font size (adjust as necessary) */
          font-weight: bold;
        }

        .vector-text {
          color: #C9F31D; /* Change this to the desired color for the "Vector Illustration" */
          font-weight: bold; /* Optional: make the text bold */
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .slider-container {
            flex-direction: column; /* Stack the heading and slider vertically */
            padding: 20px;
          }

          .image-slider {
            max-width: 95%;
            height: 300px;
          }

          .text-area {
            max-width: 100%;
            margin-left: 0;
            font-size: 1rem;
            text-align: center;
          }

          .text-area h2 {
            font-size: 1.8rem;
            text-align: center;
            margin-bottom: 20px; /* Add space between heading and slider */
          }

          .slider-divider {
            width: 3px;
          }

          .divider-handle {
            width: 20px;
            height: 20px;
          }
        }

        /* Larger Screens: Move heading above the paragraph */
        @media (min-width: 769px) {
          .text-area {
            display: flex;
            flex-direction: column;
          }

          .text-area h2 {
            order: -1; /* Moves the heading above the paragraph */
            margin-bottom: 15px; /* Space between heading and paragraph */
          }
        }

        /* Extra small screen adjustments */
        @media (max-width: 430px) {
          .image-slider {
            height: 270px;
          }

          .text-area h2 {
            font-size: 1.4rem;
            line-height:30px;
          }

          .slider-container {
            padding: 15px;
          }

          .divider-handle {
            width: 18px;
            height: 18px;
          }

          .text-area {
            font-size: 0.9rem;
            line-height:25px;
          }
        }
      `}</style>
    </div>
  );
};

export default BeforeAfterSlider;
