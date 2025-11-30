import Slider from "../../components/Home/Slider";
import HomeCategory from "../../components/Home/HomeCategory";
import CardProductsContainer from "../../components/Products/CardProductContainer";
import DiscountSection from "../../components/Home/DiscountSection";
import BrandFeatured from "../../components/Brand/BrandFeatured";
const HomePage = () => {
  return (
    <div className="font" style={{ minHeight: "900px" }}>
      <Slider />
      <HomeCategory />
      <CardProductsContainer
        title="الاكثر مبيعاً"
        btntitle="المزيد"
        path="/products"
      />
      <DiscountSection />
      <CardProductsContainer
        title="الاعلي تقييما"
        btntitle="المزيد"
        path="/products"
      />
      <BrandFeatured title="اشهر العلامات التجارية" btntitle="المزيد" />
    </div>
  );
};

export default HomePage;
