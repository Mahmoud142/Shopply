import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import techGadgets from "../../images/tech_gadgets.png";

const DiscountSection = () => {
  return (
    <Container className="py-6 font">
      <div className="relative overflow-hidden rounded-premium bg-primaryText p-8 md:p-12 lg:p-16">
        {/* Decorative gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primaryAccent/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/4"></div>

        <Row className="d-flex align-items-center position-relative" style={{ zIndex: 1 }}>
          <Col md="7" className="text-left">
            <span className="inline-flex items-center px-3 py-1 text-[11px] font-bold text-primaryAccent uppercase tracking-widest bg-white/10 rounded-full border border-white/10 mb-4">
              Premium Tech Hub
            </span>
            <h2 className="font-sans text-3xl md:text-4xl font-black text-white tracking-tight leading-tight m-0">
              Next-Gen Mobile<br />& Computing Tech
            </h2>
            <p className="text-white/50 text-sm md:text-base mt-3 mb-6 max-w-sm font-semibold m-0 leading-relaxed">
              Upgrade your setup with up to 35% off on next-generation laptops, premium smartphones, and cutting-edge mobile essentials.
            </p>
            <a
              href="/products"
              className="no-underline inline-flex items-center gap-2 px-6 py-3 bg-white text-primaryText text-sm font-black rounded-xl hover:bg-primaryAccent hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Explore Collection
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </Col>
          <Col md="5" className="text-center mt-6 mt-md-0">
            <div className="relative inline-block overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <img
                className="max-w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-transform duration-700 hover:scale-105"
                src={techGadgets}
                alt="Premium Tech Gadgets"
                style={{ maxHeight: "300px", objectFit: "cover" }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default DiscountSection;
