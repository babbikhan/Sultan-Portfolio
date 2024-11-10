// pages/index.js

"use client";  

import { useState, useEffect } from 'react';
import Router from 'next/router'; // Import Router for route change events
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import HeroSection from './component/HeroSection';
import TestimonialSlider from './component/TestimonialSlider';
import BeforeAfterSlider from './component/BeforeAfterSlider'; 
import Newsletter from './Component/Newsletter'; 
import Loader from './component/Loader'; // Import the Loader

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Show loader on page load
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleComplete);
    Router.events.on('routeChangeError', handleComplete);

    // Simulate a loading delay when the component mounts
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the loading duration as needed

    // Clean up event listeners and timer
    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleComplete);
      Router.events.off('routeChangeError', handleComplete);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {loading && <Loader />} {/* Show loader when loading */}
      <HeroSection />
      <BeforeAfterSlider />
      <TestimonialSlider />
      <Newsletter />  
    </div>
  );
}
