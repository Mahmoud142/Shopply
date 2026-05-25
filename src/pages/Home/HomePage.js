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
        products={homeProduct}
        title="Best Sellers"
        btntitle="More"
        pathText="/products"
      />
      <DiscountSection />
      <CardProductsContainer
        products={homeProduct}
        title="Highest Rated"
        btntitle="More"
        pathText="/products"
      />
      <BrandFeatured title="Popular Brands" btntitle="More" />
    </div>
  );
};

export default HomePage;
