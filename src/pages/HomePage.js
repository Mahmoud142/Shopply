import Slider from "../components/Home/Slider";
import HomeCategory from "../components/Home/HomeCategory";
import CardProductsContainer from "../components/Products/CardProductContainer";
import DiscountSection from "../components/Home/DiscountSection";
import BrandFeatured from "../components/Brand/BrandFeatured";
import Footer from "../components/utility/Footer";
const HomePage = () => {
  return (
    <div className="font" style={{ minHeight: "900px" }}>
      <Slider />
      <HomeCategory />
      <CardProductsContainer title="الاكثر مبيعاً" btntitle="المزيد" path="/most-sold" />
      <DiscountSection />
      <CardProductsContainer title="الاعلي تقييما" btntitle="المزيد" path="/highest-rated" />
      <BrandFeatured />
      <Footer />
    </div>
  );
};

export default HomePage;
