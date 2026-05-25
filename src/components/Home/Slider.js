import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";

import sliderimg from "../../images/slider1.png";
import slider4 from "../../images/slider4.png";
import prod3 from "../../images/prod3.png";
import prod4 from "../../images/prod4.png";

const Silder = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const slides = [
    {
      img: slider4,
      badge: "Summer Essentials",
      title: "Elevate Your Lifestyle",
      desc: "Discover our curated collection of premium accessories designed for the modern minimal explorer.",
      bgClass: "slider-background",
      cta: "Explore Summer Collection"
    },
    {
      img: sliderimg,
      badge: "Exclusive Launch",
      title: "Pure Comfort, Sleek Design",
      desc: "Crafted with sustainably sourced materials to ensure ultimate premium durability and everyday style.",
      bgClass: "slider-background2",
      cta: "Shop New Arrivals"
    },
    {
      img: prod3,
      badge: "Best Sellers",
      title: "Timeless Masterpieces",
      desc: "Engineered to perfection. Experience the seamless fusion of state-of-the-art tech and elegant design.",
      bgClass: "slider-background3",
      cta: "Discover Masterpieces"
    },
    {
      img: prod4,
      badge: "Modern Living",
      title: "Refine Your Spaces",
      desc: "Introduce minimalist tranquility into your work and home environments with handpicked essentials.",
      bgClass: "slider-background4",
      cta: "Browse Modern Home"
    }
  ];

  return (
    <Container className="pt-5 pb-4">
      <Carousel 
        activeIndex={index} 
        onSelect={handleSelect} 
        indicators={true} 
        controls={false}
        interval={4500}
        className="rounded-premium overflow-hidden border border-borderColor/40 shadow-premium"
      >
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx} className={`${slide.bgClass} py-5 px-4 sm:px-5 lg:px-12`}>
            <div className="row min-h-[380px] md:min-h-[420px] flex items-center justify-between gap-8 py-4">
              
              {/* Text Side */}
              <div className="col-12 col-md-6 flex flex-col items-start text-left order-2 md:order-1 select-none">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-white/70 backdrop-blur-md rounded-full border border-white/60 text-primaryAccent font-bold text-xs uppercase tracking-widest mb-4 shadow-sm">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                  {slide.badge}
                </div>
                <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-primaryText tracking-tight leading-tight m-0">
                  {slide.title}
                </h1>
                <p className="font-sans text-sm sm:text-base text-secondaryText leading-relaxed mt-4 max-w-md m-0">
                  {slide.desc}
                </p>
                <a 
                  href="/products" 
                  className="no-underline group mt-6 inline-flex items-center gap-2 px-6 py-3 bg-primaryText text-white text-sm font-semibold rounded-xl hover:bg-primaryAccent transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  {slide.cta}
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>

              {/* Image Side */}
              <div className="col-12 col-md-5 flex items-center justify-center order-1 md:order-2">
                <div className="relative flex items-center justify-center p-3">
                  {/* Decorative background soft glow */}
                  <div className="absolute w-48 h-48 rounded-full bg-white/40 filter blur-3xl -z-10 animate-pulse"></div>
                  
                  <img
                    className="max-h-[260px] md:max-h-[320px] w-auto object-contain transition-all duration-500 hover:scale-103 drop-shadow-[0_10px_20px_rgba(0,0,0,0.06)]"
                    src={slide.img}
                    alt={slide.title}
                  />
                </div>
              </div>

            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Silder;
