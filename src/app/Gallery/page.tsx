"use client";

import React, { useState, CSSProperties } from 'react';
import Image from 'next/image';
import Modal from './Modal';

const artData = [
  { src: 'https://skartistic.com/wp-content/uploads/2024/05/3.jpeg', title: 'Animal' },
  { src: 'https://skartistic.com/wp-content/uploads/2024/05/4.jpeg', title: 'Tiger 3' },
  { src: 'https://skartistic.com/wp-content/uploads/2024/05/1.jpeg', title: 'No Time to Die' },
  { src: 'https://skartistic.com/wp-content/uploads/2024/05/6.jpeg', title: 'Oppenheimer' },
  { src: 'https://skartistic.com/wp-content/uploads/2024/05/5.jpeg', title: 'Jurassic World' },
  { src: 'https://skartistic.com/wp-content/uploads/2024/05/5.jpeg', title: 'Man vs Bee' },
  { src: 'https://skartistic.com/wp-content/uploads/2024/05/6545a947cb696c81bb4937305a4c6309-2.jpg', title: 'Halloween Kills' },
  { src: 'https://skartistic.com/wp-content/uploads/2024/05/81fd29d59208361ec6e7ca845c150419-1.jpg', title: 'Stranger Things' },
  { src: 'https://skartistic.com/wp-content/uploads/2024/05/7a65628c7ed173432a3b46761cdedfb8-3.jpg', title: 'Edge of Tomorrow' },
  { src: 'https://skartistic.com/wp-content/uploads/2024/05/874992a825be77a7bdfcb8b84765ee68-2.jpg', title: 'Texas Chainsaw Massacre' },
  { src: 'https://skartistic.com/wp-content/uploads/2024/05/4cd4f36d7b6e26250d9a6fb0d3f96234-1.jpg', title: 'K.G.F Chapter 2' },
  { src: 'https://skartistic.com/wp-content/uploads/2024/05/b984b4a5bef5e20752b0772215f01bb5.jpg', title: 'Ronaldo' },
  { src: 'https://skartistic.com/wp-content/uploads/2024/05/2.jpeg', title: 'Joker' },
  { src: 'https://skartistic.com/wp-content/uploads/2024/05/e9ca95109b6f2683bf6f0e7ce699a548.jpg', title: 'Money Heist' },
  { src: 'https://skartistic.com/wp-content/uploads/2024/05/8.jpeg', title: 'Pathaan' },
];

const styles: { [key: string]: CSSProperties } = {
  background: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#1a1a1a',
    border: 'solid',
    borderWidth: '0.5px',
    borderColor: '#C9F31D',
    paddingLeft: '30px',
    paddingRight: '30px',
    maxWidth: '1370px',
    margin: '0 auto',
    marginBottom: '30px',
  },
  main: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '15px',
    maxWidth: '1400px',
    padding: '20px',
    marginLeft: '-30px',
  },
  banner: {
    width: '100%',
    height: '580px',
    position: 'relative',
    overflow: 'hidden',
    marginBottom: '0px',
  },
  heading: {
    textAlign: 'center',
    fontSize: '30px', // Default font size for larger screens
    margin: '20px 0',
    color: 'white',
  },
  vectorArts: {
    color: '#C9F31D',
  },
  imageContainer: {
    position: 'relative',
    width: '250px',
    height: '250px',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'opacity 0.3s ease',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(201, 243, 29, 0.2)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  image: {
    transition: 'transform 0.3s ease',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  // Mobile view container style
  mobileMain: {
    display: 'flex',
    gap: '10px',
    marginLeft: '-10px',
  },
  mobileImageContainer: {
    width: '170px', // Set fixed width for mobile image containers
    height: '170px', // Set fixed height for mobile image containers
    marginRight: '-20px',
    marginLeft: '15px',
  },

  // For mobile devices, remove margin-top above the banner
  mobileBanner: {
    marginTop: '-200px',
    marginBottom: '-210px',
  },

  // Mobile-specific heading size adjustment
  mobileHeading: {
    fontSize: '20px', // Smaller font size for mobile devices
    marginBottom: '10px',
    marginTop: '20px',
  },
};

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % artData.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + artData.length) % artData.length);
  };

  return (
    <main>
      {/* Image Banner at the top */}
      <div
        style={{
          ...styles.banner,
          ...(window.innerWidth <= 768 ? styles.mobileBanner : {}),
        }}
      >
        <Image
          src="https://skartistic.com/wp-content/uploads/2024/05/gallery-sk-1.png"
          alt="Gallery Banner"
          layout="fill"
          objectFit="contain"
        />
      </div>

      {/* Heading */}
      <h2
        style={{
          ...styles.heading,
          ...(window.innerWidth <= 768 ? styles.mobileHeading : {}),
        }}
      >
        Have a look at my wonderful <span style={styles.vectorArts}>Vector Arts</span>
      </h2>

      {/* Background section to control background width */}
      <div style={styles.background}>
        <div style={styles.main}>
          {artData.map((art, index) => (
            <div
              key={index}
              style={{
                ...styles.imageContainer,
                ...(window.innerWidth <= 768 ? styles.mobileImageContainer : {}),
              }}
              onClick={() => openModal(index)}
              onMouseEnter={(e) => {
                const overlay = e.currentTarget.querySelector('.overlay') as HTMLDivElement;
                if (overlay) overlay.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                const overlay = e.currentTarget.querySelector('.overlay') as HTMLDivElement;
                if (overlay) overlay.style.opacity = '0';
              }}
            >
              <Image
                src={art.src}
                alt={art.title}
                layout="fill"
                objectFit="cover"
                style={styles.image}
              />
              <div className="overlay" style={styles.overlay}></div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        imageUrls={artData.map((art) => art.src)}
        currentIndex={currentIndex}
        onClose={closeModal}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </main>
  );
}
