// component/Loader.js

import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';
import LogoImageSrc from '../public/images/sk logo.jpg'; // Absolute path for Next.js public folder
import Image from 'next/image';

// Keyframes for spinning
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Keyframes for shutter effect
const shutterAnimationOpen = keyframes`
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
`;

const shutterAnimationClose = keyframes`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
`;

// Loader container
const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

// Shutter stripe styled component
const ShutterStripe = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 10%; /* Each stripe is 10% of the viewport width */
  height: 100%;
  background-color: black; /* Background color of the stripe */
  transform-origin: left;
  animation: ${props => props.isOpening ? shutterAnimationOpen : shutterAnimationClose} 1.5s ease-in-out forwards; /* Open or close based on state */
  animation-delay: ${props => props.delay}s;
`;

// Loader spinner
const LoaderSpinner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  z-index: 10000; /* Ensure it is in front of the shutter */
`;

// Spinner border
const SpinnerBorder = styled.div`
  position: absolute;
  border: 4px solid rgba(255, 255, 255, 0.0);
  border-top: 4px solid #C9F31D; /* Loader color */
  border-radius: 50%;
  width: 60%;
  height: 60%;
  animation: ${spin} 1s linear infinite;
`;

// Image container for round border
const ImageWrapper = styled.div`
  border-radius: 50%; /* Make the border round */
  width: 60px;
  height: 60px;
  overflow: hidden; /* Ensure the image fits within the circle */
`;

// Loader component
export default function Loader() {
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [showShutter, setShowShutter] = useState(false); // State for showing shutter effect
  const [isOpening, setIsOpening] = useState(false); // State for opening/closing shutter

  useEffect(() => {
    const loadingDuration = 3200; // Total loading time
    const shutterDelay = 1900; // Delay before showing shutter effect

    // Show the shutter effect just before loading finishes
    const timer = setTimeout(() => {
      setShowShutter(true); // Show shutter just before loading completes
      setIsOpening(true); // Start opening the shutter
    }, shutterDelay);

    // Simulate loading complete after the total duration
    const loadingTimer = setTimeout(() => {
      setIsOpening(false); // Start closing the shutter
      clearTimeout(timer); // Clear the shutter timer
    }, loadingDuration);

    // Set isLoading to false after the loading duration
    const finalTimer = setTimeout(() => {
      setIsLoading(false);
    }, loadingDuration + 1500); // Wait for the closing animation

    return () => {
      clearTimeout(timer);
      clearTimeout(loadingTimer);
      clearTimeout(finalTimer);
    }; // Cleanup timers on unmount
  }, []);

  return (
    <LoaderContainer>
      {/* Show shutter stripes only when loading is about to finish */}
      {showShutter && Array.from({ length: 10 }).map((_, index) => (
        <ShutterStripe
          key={index}
          delay={index * 0.1}
          style={{ left: `${index * 10}%` }}
          isOpening={isOpening} // Pass opening state
        />
      ))}
      <LoaderSpinner>
        <SpinnerBorder />
        <ImageWrapper>
          <Image src={LogoImageSrc} alt="Sk Artistic Logo" width={60} height={60} />
        </ImageWrapper>
      </LoaderSpinner>
    </LoaderContainer>
  );
}
