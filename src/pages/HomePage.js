import React from "react";
import NavBarLogin from "../components/utility/NavBarLogin";
import Slider from "../components/Home/Slider";
import HomeCategory from "../components/Home/HomeCategory";
import CardProductsContainer from "../components/Products/CardProductContainer";
import DiscountSection from "../components/Home/DiscountSection";
import BrandFeatured from "../components/Brand/BrandFeatured";
import Footer from "../components/utility/Footer";
const HomePage = () => {
  return (
    <div className="font" style={{ minHeight: "900px" }}>
      <NavBarLogin />
      <Slider />
      <HomeCategory />
      <CardProductsContainer title="الاكثر مبيعاً" btntitle="المزيد" />
      <DiscountSection />
      <CardProductsContainer title="الاعلي تقييما" btntitle="المزيد" />
      <BrandFeatured />
      <Footer />
    </div>
  );
};

export default HomePage;
