import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarLogin from "./components/utility/NavBarLogin";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import AllCategoryPage from "./pages/Category/AllCategoryPage";
import AllBrandPage from "./pages/Brand/AllBrandPage";
import ShopProductPage from "./pages/Products/ShopProductPage";
import Footer from "./components/utility/Footer";
import ProductDetailsPage from "./pages/Products/ProductDetailsPage";
import CartPage from "./pages/Cart/CartPage";
import ChoosePayMethoudPage from "./pages/Checkout/ChoosePayMethoudPage";
import AdminAllProductsPage from "./pages/Admin/AdminAllProductsPage";
import AdminAllOrdersPage from "./pages/Admin/AdminAllOrdersPage";
import AdminAddProductsPage from "./pages/Admin/AdminAddProductsPage";
import AdminAddBrandPage from "./pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./pages/Admin/AdminAddSubCategoryPage";
import AdminOrderDetailsPage from "./pages/Admin/AdminOrderDetailsPage";
function App() {
  return (
    <div className="font">
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allbrand" element={<AllBrandPage />} />
          <Route path="/products" element={<ShopProductPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order/paymethoud" element={<ChoosePayMethoudPage />} />
          <Route path="/admin/allproducts" element={<AdminAllProductsPage />} />
          <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
          <Route path="/admin/addproduct" element={<AdminAddProductsPage />} />
          <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
          <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage />}/>
          <Route path="/admin/orders/:id" element={<AdminOrderDetailsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
