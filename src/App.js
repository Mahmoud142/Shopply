import "./App.css";
import HomePage from "./pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarLogin from "./components/utility/NavBarLogin";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import AllCategoryPage from "./pages/Category/AllCategoryPage";
import AllBrandPage from "./pages/Brand/AllBrandPage";
import ShopProductPage from "./pages/Products/ShopProductPage";
import ProductDetailsPage from "./pages/Products/ProductDetailsPage";
import CartPage from "./pages/Cart/CartPage";
import ChoosePayMethoudPage from "./pages/Checkout/ChoosePayMethoudPage";
// admin pages
import AdminAllProductsPage from "./pages/Admin/AdminAllProductsPage";
import AdminAllOrdersPage from "./pages/Admin/AdminAllOrdersPage";
import AdminAddProductsPage from "./pages/Admin/AdminAddProductsPage";
import AdminAddBrandPage from "./pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./pages/Admin/AdminAddSubCategoryPage";
import AdminOrderDetailsPage from "./pages/Admin/AdminOrderDetailsPage";
// user pages
import UserAllOrdersPage from "./pages/User/UserAllOrdersPage";
import UserFavoriteProductsPage from "./pages/User/UserFavoriteProductsPage";
import UserAllAddresPage from "./pages/User/UserAllAddresPage";
import UserAddAddressPage from "./pages/User/UserAddAddressPage";
import UserEditAddressPage from "./pages/User/UserEditAddressPage";
import UserProfilePage from "./pages/User/UserProfilePage";

import Footer from "./components/utility/Footer";

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
          <Route path="/user/allorders" element={<UserAllOrdersPage />} />
          <Route path="/user/favoriteproducts" element={<UserFavoriteProductsPage />} />
          <Route path="/user/addresses" element={<UserAllAddresPage />} />
          <Route path="/user/add-address" element={<UserAddAddressPage />} />
          <Route path="/user/edit-address" element={<UserEditAddressPage />} />  
          <Route path="/user/profile" element={<UserProfilePage />} />  
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
