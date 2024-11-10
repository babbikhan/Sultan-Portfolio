"use client";

import React from 'react';
import Slider from 'react-slick';

const testimonials = [
  {
    name: 'Hamza',
    feedback: 'Best platform for discovering and nurturing artistic talent',
    profilePic: 'https://skartistic.com/wp-content/uploads/2024/06/male-1.png',
  },
  {
    name: 'Shazaib',
    feedback: 'MashAllah Congrats dude more success to come ❤️',
    profilePic: 'https://skartistic.com/wp-content/uploads/2024/06/male-1.png',
  },
  {
    name: 'Ali',
    feedback: 'A fantastic experience working with this team!',
    profilePic: 'https://skartistic.com/wp-content/uploads/2024/06/male-1.png',
  },
  {
    name: 'Zara',
    feedback: 'Their support is unmatched. Highly recommend!',
    profilePic: 'https://skartistic.com/wp-content/uploads/2024/06/male-1.png',
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-slider-container">
      <div className="testimonial-content-left">
        <h2>I've 29+ Clients <span style={{ color: '#c3ff24' }}>Feedback</span></h2>
        <p>These are some of my clients' feedback with positive love and inspirations. </p>
        <p>I appreciate all these people for trusting Sk Artistic as part of their design journey.</p>
      </div>

      <div className="testimonial-carousel-right">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <div className="testimonial-content">
                <img src={testimonial.profilePic} alt={`${testimonial.name}'s profile`} className="profile-pic" />
                <p>"{testimonial.feedback}"</p>
                <h3>{testimonial.name}</h3>
                Client
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx>{`
        .testimonial-slider-container {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px 0;
          background-color: #1e1e1e;
          background-attachment: fixed;
          background-position: center;
          max-width: 1520px;
          margin: 0 auto;
          color: #fff;
        }

        .testimonial-content-left {
          flex: 1;
          max-width: 30%;
          text-align: left;
          padding: 0 -10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        h2 {
          font-size: 2.5rem;
        }

        .testimonial-carousel-right {
          flex: 1;
          max-width: 60%;
        }

        .testimonial-content {
          background: #111;
          border-radius: 10px;
          padding: 55px;
          color: #fff;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          text-align: center;
          margin: 8px;
          border: 0.5px solid #c3ff24;
        }

        .profile-pic {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin: 0 auto 20px;
        }

        p {
          margin-top: 13px;
          font-size: 1.3rem;
        }

        h3 {
          margin-top: 10px;
          color: #c3ff24;
        }

        span {
          display: block;
          margin-top: 0px;
          font-size: 2.1rem;
        }

        .slick-dots {
          bottom: -40px;
          color: white;
        }

        .slick-dots li button:before {
          color: white;
          font-size: 18px;
        }

        @media (max-width: 768px) {
          .testimonial-slider-container {
            flex-direction: column;
          }

          .testimonial-content-left,
          .testimonial-carousel-right {
            max-width: 85%; 
            text-align: center;
            padding: 10px;
          }

          .testimonial-carousel-right {
            margin-top: 10px; 
          }

          h2 {
            font-size: 2rem;
          }

          .testimonial-content {
            padding: 30px; 
          }

          .profile-pic {
            width: 70px; 
            height: 70px;
          }

          p {
            font-size: 1.1rem; 
          }

          h3 {
            font-size: 1.4rem; 
          }
        }

        @media (max-width: 430px) {
          h2 {
            font-size: 1.9rem;
          }

          .testimonial-content {
            padding: 40px;
          }

          .profile-pic {
            width: 60px;
            height: 60px;
          }

          p {
            font-size: 1.1rem;
          }

          h3 {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider;
