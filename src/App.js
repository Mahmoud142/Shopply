import "./App.css";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/Home/HomePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import AdminEditProductsPage from "./pages/Admin/AdminEditProductsPage";
// user pages
import UserAllOrdersPage from "./pages/User/UserAllOrdersPage";
import UserFavoriteProductsPage from "./pages/User/UserFavoriteProductsPage";
import UserAllAddresPage from "./pages/User/UserAllAddresPage";
import UserAddAddressPage from "./pages/User/UserAddAddressPage";
import UserEditAddressPage from "./pages/User/UserEditAddressPage";
import UserProfilePage from "./pages/User/UserProfilePage";
import ForgetPasswordPage from "./pages/Auth/ForgetPasswordPage";
import VerifyPasswordPage from "./pages/Auth/VerifyPasswordPage";
import VerifyEmailPage from "./pages/Auth/VerifyEmailPage";
import ResetPasswordPage from "./pages/Auth/ResetPasswordPage";
import AdminEditCouponPage from "./pages/Admin/AdminEditCouponPage";
import AdminAddCouponPage from "./pages/Admin/AdminAddCouponPage";
import ProtectedRoute from "./components/utility/ProtectedRoute";
import Footer from "./components/utility/Footer";
import ProductsByCategory from "./pages/Products/ProductsByCategory";
import ProductsByBrand from "./pages/Products/ProductsByBrand";
import ScrollToTop from "./components/utility/ScrollToTop";
function App() {
    return (
        <div className="font">
            <ToastContainer />
            <BrowserRouter>
                <NavBarLogin />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/allcategory" element={<AllCategoryPage />} />
                    <Route path="/allbrand" element={<AllBrandPage />} />
                    <Route path="/products" element={<ShopProductPage />} />
                    <Route
                        path="/products/:id"
                        element={<ProductDetailsPage />}
                    />
                    <Route path="/cart" element={<CartPage />} />
                    <Route
                        path="/user/forget-password"
                        element={<ForgetPasswordPage />}
                    />
                    <Route
                        path="/user/verify-code"
                        element={<VerifyPasswordPage />}
                    />
                    <Route
                        path="/user/verify-email"
                        element={<VerifyEmailPage />}
                    />
                    <Route
                        path="/user/reset-password"
                        element={<ResetPasswordPage />}
                    />
                    <Route
                        path="/products/category/:id"
                        element={<ProductsByCategory />}
                    />
                    <Route
                        path="/products/brand/:id"
                        element={<ProductsByBrand />}
                    />
                    <Route element={<ProtectedRoute allowedRole="admin" />}>
                        <Route
                            path="/admin/products-list"
                            element={<AdminAllProductsPage />}
                        />
                        <Route
                            path="/admin/allorders"
                            element={<AdminAllOrdersPage />}
                        />
                        <Route
                            path="/admin/add-product"
                            element={<AdminAddProductsPage />}
                        />
                        <Route
                            path="/admin/edit-product/:id"
                            element={<AdminEditProductsPage />}
                        />
                        <Route
                            path="/admin/add-brand"
                            element={<AdminAddBrandPage />}
                        />
                        <Route
                            path="/admin/add-category"
                            element={<AdminAddCategoryPage />}
                        />
                        <Route
                            path="/admin/add-subcategory"
                            element={<AdminAddSubCategoryPage />}
                        />
                        <Route
                            path="/admin/orders/:id"
                            element={<AdminOrderDetailsPage />}
                        />
                        <Route
                            path="/admin/add-coupon"
                            element={<AdminAddCouponPage />}
                        />
                        <Route
                            path="/admin/edit-coupon/:id"
                            element={<AdminEditCouponPage />}
                        />
                    </Route>
                    <Route element={<ProtectedRoute allowedRole="user" />}>
                        <Route
                            path="/user/allorders"
                            element={<UserAllOrdersPage />}
                        />
                        <Route
                            path="/order/paymentMethod"
                            element={<ChoosePayMethoudPage />}
                        />
                        <Route
                            path="/user/favoriteproducts"
                            element={<UserFavoriteProductsPage />}
                        />
                        <Route
                            path="/user/addresses"
                            element={<UserAllAddresPage />}
                        />
                        <Route
                            path="/user/add-address"
                            element={<UserAddAddressPage />}
                        />
                        <Route
                            path="/user/edit-address/:id"
                            element={<UserEditAddressPage />}
                        />
                        <Route
                            path="/user/profile"
                            element={<UserProfilePage />}
                        />
                    </Route>
                    {/* Catch-all route for non-existent pages (404 redirect) */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
