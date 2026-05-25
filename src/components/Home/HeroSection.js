import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import heroShowcase from "../../images/hero_showcase.png";
import laptops from "../../images/modern_laptops.png";
import deskSetup from "../../images/modern_desk.png";
import mobile from "../../images/modern_mobile.png";

const slides = [
  {
    id: 1,
    tag: "Collection 2026",
    title: "Elevate Your\nEveryday Carry",
    subtitle: "Discover meticulously crafted essentials fusing ultimate comfort, sustainable materials, and breathtaking minimalist aesthetic.",
    price: "499 EGP",
    img: heroShowcase,
  },
  {
    id: 2,
    tag: "New Arrival",
    title: "Next-Gen\nPerformance",
    subtitle: "Experience unprecedented power and seamless multitasking with our latest lineup of ultra-premium laptops.",
    price: "34,900 EGP",
    img: laptops,
  },
  {
    id: 3,
    tag: "Studio Gear",
    title: "Ultimate\nWorkspace",
    subtitle: "Transform your daily workflow with state-of-the-art desk accessories designed for the modern professional.",
    price: "1,299 EGP",
    img: deskSetup,
  },
  {
    id: 4,
    tag: "Mobile Tech",
    title: "Connectivity\nRedefined",
    subtitle: "Stay connected in style with our flagship smartphones featuring industry-leading cameras and vibrant OLED displays.",
    price: "24,500 EGP",
    img: mobile,
  }
];

const HeroSection = () => {
  return (
    <Container className="pt-8 pb-5">
      <div className="relative overflow-hidden rounded-premium bg-white border border-borderColor/60 shadow-premium p-8 sm:p-10 lg:p-12">
        {/* Soft background decorative glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-primaryAccent/5 rounded-full filter blur-3xl -translate-y-1/3 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brandBg rounded-full filter blur-3xl translate-y-1/3 -translate-x-1/3"></div>

        <Carousel fade controls={false} indicators={true} interval={2500} pause="hover" className="hero-slider z-10">
          {slides.map((slide) => (
            <Carousel.Item key={slide.id}>
              <Row className="align-items-center position-relative g-5 py-3" style={{ zIndex: 2 }}>
                
                {/* Left Column: Typographic Value Proposition */}
                <Col lg="6" className="text-left flex flex-col items-start select-none">
                  
                  {/* Tag Badge */}
                  <div className="flex items-center gap-1.5 px-3.5 py-1 bg-brandBg border border-borderColor/80 rounded-full text-primaryAccent font-bold text-xs uppercase tracking-widest mb-5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.113-.377.64-.377.753 0l2.184 6.727a.386.386 0 00.354.26h7.078c.397 0 .562.508.242.744l-5.726 4.161a.387.387 0 00-.14.431l2.185 6.726c.112.378-.32.693-.642.447l-5.726-4.162a.388.388 0 00-.432 0l-5.726 4.162c-.32.246-.754-.07-.642-.447l2.185-6.726a.387.387 0 00-.14-.431l-5.727-4.161c-.32-.236-.155-.744.242-.744h7.078a.386.386 0 00.354-.26L11.48 3.5z"></path>
                    </svg>
                    {slide.tag}
                  </div>

                  {/* Bold Headline */}
                  <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-primaryText tracking-tight leading-tight m-0 whitespace-pre-line">
                    {slide.title}
                  </h1>

                  {/* Premium Subtitle */}
                  <p className="font-sans text-sm sm:text-base text-secondaryText leading-relaxed mt-4 max-w-md m-0">
                    {slide.subtitle}
                  </p>

                  {/* Price tag teaser */}
                  <div className="flex items-center gap-2.5 mt-5 pb-2">
                    <span className="text-xs font-bold text-secondaryText uppercase tracking-wider">Starting From</span>
                    <span className="text-2xl font-black text-primaryText tracking-tight">{slide.price}</span>
                  </div>

                  {/* Two Action CTAs */}
                  <div className="flex items-center gap-3.5 mt-6 w-full sm:w-auto">
                    <a 
                      href="/products" 
                      className="no-underline text-center group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primaryText text-white text-sm font-extrabold rounded-xl hover:bg-primaryAccent transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    >
                      Shop Collection
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <a 
                      href="/allcategory" 
                      className="no-underline text-center flex-1 sm:flex-initial inline-flex items-center justify-center px-7 py-3.5 bg-white border border-borderColor hover:border-primaryText text-primaryText text-sm font-bold rounded-xl transition-all duration-300 hover:shadow-sm"
                    >
                      Categories
                    </a>
                  </div>

                </Col>

                {/* Right Column: Visual Product Showcase */}
                <Col lg="6" className="relative flex items-center justify-center mt-5 lg:mt-0">
                  
                  {/* Visual platform */}
                  <div className="relative w-full max-w-[420px] aspect-square rounded-2xl overflow-hidden bg-brandBg/60 border border-borderColor/40 p-4 flex items-center justify-center group">
                    <img
                      className="w-full h-full object-contain rounded-xl transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-105 drop-shadow-[0_15px_30px_rgba(0,0,0,0.05)]"
                      src={slide.img}
                      alt={slide.title}
                    />
                  </div>

                  {/* Floating Glass Widget 1: Ratings */}
                  <div className="absolute top-6 left-2 sm:left-6 z-10 px-4 py-2.5 bg-white/95 backdrop-blur-md border border-white shadow-premium rounded-2xl flex items-center gap-2 animate-bounce-slow">
                    <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
                      <svg className="w-4.5 h-4.5 fill-amber-400 text-amber-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-extrabold text-primaryText m-0 leading-none">99% Customer Rating</span>
                      <span className="text-[9px] font-bold text-secondaryText mt-0.5 leading-none">Based on 1.2k+ reviews</span>
                    </div>
                  </div>

                  {/* Floating Glass Widget 2: Free Shipping */}
                  <div className="absolute bottom-6 right-2 sm:right-6 z-10 px-4 py-2.5 bg-white/95 backdrop-blur-md border border-white shadow-premium rounded-2xl flex items-center gap-2 animate-bounce-slow" style={{ animationDelay: '1s' }}>
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                      <svg className="w-4.5 h-4.5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-extrabold text-primaryText m-0 leading-none">Free Worldwide Shipping</span>
                      <span className="text-[9px] font-bold text-secondaryText mt-0.5 leading-none">Delivered to your doorstep</span>
                    </div>
                  </div>

                </Col>

              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

export default HeroSection;
