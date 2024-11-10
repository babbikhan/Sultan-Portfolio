// src/app/Gallery/Modal.tsx
import React, { useState, useEffect, CSSProperties } from 'react';
import Image from 'next/image';

interface ModalProps {
  isOpen: boolean;
  imageUrls: string[]; // Array of image URLs
  currentIndex: number; // Current image index
  onClose: () => void;
  onNext: () => void; // Function to go to the next image
  onPrev: () => void; // Function to go to the previous image
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  imageUrls,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  const [isHoveredClose, setIsHoveredClose] = useState(false);
  const [isHoveredPrev, setIsHoveredPrev] = useState(false);
  const [isHoveredNext, setIsHoveredNext] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          style={{
            ...styles.prevButton,
            backgroundColor: isHoveredPrev ? '#C9F31D' : '#000000', // Change color on hover
          }}
          onMouseEnter={() => setIsHoveredPrev(true)}
          onMouseLeave={() => setIsHoveredPrev(false)}
          onClick={onPrev}
        >
          ←
        </button>
        <Image
          src={imageUrls[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="contain"
        />
        <button
          style={{
            ...styles.nextButton,
            backgroundColor: isHoveredNext ? '#C9F31D' : '#000000', // Change color on hover
          }}
          onMouseEnter={() => setIsHoveredNext(true)}
          onMouseLeave={() => setIsHoveredNext(false)}
          onClick={onNext}
        >
          →
        </button>
        <button
          style={{
            ...styles.closeButton,
            backgroundColor: isHoveredClose ? '#333333' : '#000000', // Change to black
          }}
          onMouseEnter={() => setIsHoveredClose(true)}
          onMouseLeave={() => setIsHoveredClose(false)}
          onClick={onClose}
        >
          <span style={{ color: '#C9F31D' }}>✖</span> {/* Changed color of X to #C9F31D */}
        </button>
      </div>
    </div>
  );
};

// Styles for the modal
const styles: { [key: string]: CSSProperties } = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modal: {
    position: 'relative',
    width: '80%',
    height: '80%',
    maxWidth: '800px',
    maxHeight: '800px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.0)',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#000000', // Set background to black
    border: 'none',
    borderRadius: '50%', // Ensure it is perfectly round
    color: '#fff',
    fontSize: '1.5rem',
    cursor: 'pointer',
    width: '40px', // Set a specific width
    height: '40px', // Set the same height for a perfect circle
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s',
  },
  prevButton: {
    position: 'absolute',
    left: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#C9F31D',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
    zIndex: 1001,
  },
  nextButton: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#C9F31D',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
    zIndex: 1001,
  },
};

export default Modal;
