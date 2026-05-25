import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-borderColor/60 pt-10 pb-6 mt-16">
      <Container>
        {/* Top footer section */}
        <Row className="gy-6 pb-8 border-b border-borderColor/40">
          
          {/* Brand Col */}
          <Col lg="4" md="12" className="flex flex-col items-start text-left">
            <Link to="/" className="flex items-center no-underline mb-3">
              <img src={logo} className="h-7 w-auto object-contain" alt="Shopply Logo" />
              <span className="ml-2.5 font-sans font-extrabold text-base tracking-tight text-primaryText">SHOPPLY</span>
            </Link>
            <p className="font-sans text-xs text-secondaryText leading-relaxed max-w-xs m-0">
              Crafting premium minimalist essentials for the modern lifestyle.
            </p>
          </Col>

          {/* Links Col 1 */}
          <Col lg="2" md="4" sm="6" className="flex flex-col items-start text-left">
            <h5 className="font-sans font-bold text-xs text-primaryText uppercase tracking-widest mb-3 m-0">
              Collections
            </h5>
            <ul className="list-unstyled flex flex-col gap-2 m-0 p-0">
              <li><Link to="/products" className="no-underline text-xs font-medium text-secondaryText hover:text-primaryText transition-colors">New Arrivals</Link></li>
              <li><Link to="/allcategory" className="no-underline text-xs font-medium text-secondaryText hover:text-primaryText transition-colors">Categories</Link></li>
            </ul>
          </Col>

          {/* Links Col 2 */}
          <Col lg="2" md="4" sm="6" className="flex flex-col items-start text-left">
            <h5 className="font-sans font-bold text-xs text-primaryText uppercase tracking-widest mb-3 m-0">
              Information
            </h5>
            <ul className="list-unstyled flex flex-col gap-2 m-0 p-0">
              <li><Link to="/" className="no-underline text-xs font-medium text-secondaryText hover:text-primaryText transition-colors">Terms & Privacy</Link></li>
              <li><Link to="/" className="no-underline text-xs font-medium text-secondaryText hover:text-primaryText transition-colors">Return Policy</Link></li>
            </ul>
          </Col>

          {/* Contact Col */}
          <Col lg="4" md="4" className="flex flex-col items-start text-left">
            <h5 className="font-sans font-bold text-xs text-primaryText uppercase tracking-widest mb-3 m-0">
              Connect
            </h5>
            <div className="flex flex-col gap-2">
              <a href="tel:+201063849217" className="no-underline flex items-center gap-2 text-xs font-semibold text-secondaryText hover:text-primaryAccent transition-colors">
                <svg className="w-3.5 h-3.5 text-secondaryText" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                +20 106 384 9217
              </a>
              <a href="mailto:support@shopply.com" className="no-underline flex items-center gap-2 text-xs font-semibold text-secondaryText hover:text-primaryAccent transition-colors">
                <svg className="w-3.5 h-3.5 text-secondaryText" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                support@shopply.com
              </a>
            </div>
          </Col>

        </Row>

        {/* Bottom copyright and socials */}
        <div className="pt-6 mt-2 flex flex-col items-center justify-center gap-2.5">
          
          {/* Custom Creator Tag */}
          <a 
            href="https://mahmoudabdellah.tech" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 no-underline group transition-all duration-300"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-secondaryText font-bold group-hover:text-primaryText transition-colors">Built by</span>
            <span 
              className="font-mono text-sm font-black tracking-widest transition-all duration-300 group-hover:scale-105"
              style={{ color: "#0A84FF" }}
            >
              MAHMOUD ABDELLAH
            </span>
          </a>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-secondaryText hover:text-primaryAccent transition-colors" aria-label="Twitter">
              <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-secondaryText hover:text-primaryAccent transition-colors" aria-label="Instagram">
              <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="font-sans text-[11px] font-medium text-secondaryText m-0 uppercase tracking-wider text-center">
            &copy; {currentYear} SHOPPLY. All rights reserved.
          </p>

        </div>

      </Container>
    </footer>
  );
};

export default Footer;
