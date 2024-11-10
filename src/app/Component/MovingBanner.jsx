"use client";  // Add this at the top to make it a Client Component

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const banners = [
  {
    id: 1,
    imageUrl: 'https://skartistic.com/wp-content/uploads/2024/05/slider-2-1.png',
    altText: 'Banner 1',
  },
  {
    id: 2,
    imageUrl: 'https://skartistic.com/wp-content/uploads/2024/05/slider-1-3.png',
    altText: 'Banner 2',
  },
];

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  transition: opacity 2s ease-in-out;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`;

const MovingBanner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
    }, 3000); // Change banner every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <BannerContainer>
      {banners.map((banner, index) => (
        <BannerImage
          key={banner.id}
          src={banner.imageUrl}
          alt={banner.altText}
          isVisible={index === currentBanner}
        />
      ))}
    </BannerContainer>
  );
};

export default MovingBanner;
