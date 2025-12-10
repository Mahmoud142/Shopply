import Slider from "../../components/Home/Slider";
import HomeCategory from "../../components/Home/HomeCategory";
import CardProductsContainer from "../../components/Products/CardProductContainer";
import DiscountSection from "../../components/Home/DiscountSection";
import BrandFeatured from "../../components/Brand/BrandFeatured";
import ViewHomeProductsHook from "../../hook/product/view-home-products-hook";
const HomePage = () => {
  
  const [homeProduct] = ViewHomeProductsHook();

  return (
    <div className="font" style={{ minHeight: "900px" }}>
      <Slider />
      <HomeCategory />
      <CardProductsContainer
        title="الاكثر مبيعاً"
        btntitle="المزيد"
        path="/products"
        products={homeProduct}
      />
      <DiscountSection />
      <CardProductsContainer
        title="الاعلي تقييما"
        btntitle="المزيد"
        path="/products"
        products={homeProduct}
      />
      <BrandFeatured title="اشهر العلامات التجارية" btntitle="المزيد" />
    </div>
  );
};

export default HomePage;
