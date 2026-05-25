import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import NavbarSearchHook from "../../hook/search/navbar-search-hook";
import GetAllUserCartHook from "../../hook/cart/get-all-user-cart-hook";

const NavBarLogin = () => {
    const [onChangeSearchWord] = NavbarSearchHook();
    let word = "";
    if (localStorage.getItem("searchWord") != null) {
      word = localStorage.getItem("searchWord");
    }

    const getStoredUser = () => {
      const raw = localStorage.getItem("user");
      return raw ? JSON.parse(raw) : "";
    };

    const [user, setUser] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
      const syncUser = () => setUser(getStoredUser());

      syncUser();

      const handleStorage = (e) => {
        if (!e || e.key === "user" || e.key === "token") syncUser();
      };

      window.addEventListener("storage", handleStorage);
      window.addEventListener("focus", syncUser);

      const intervalId = setInterval(syncUser, 1000);

      return () => {
        window.removeEventListener("storage", handleStorage);
        window.removeEventListener("focus", syncUser);
        clearInterval(intervalId);
      };
    }, []);

    const logOut = () => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setUser("");
      setDropdownOpen(false);
    };

    const [itemsNum] = GetAllUserCartHook();

    return (
      <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-borderColor/40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            
            {/* Logo Section */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="flex items-center no-underline">
                <img src={logo} className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105" alt="Shopply Logo" />
                <span className="ml-2.5 font-sans font-bold text-xl tracking-tight text-primaryText">SHOPPLY</span>
              </Link>
            </div>

            {/* Modern Search Field - Directly in the center! */}
            <div className="flex-1 max-w-md mx-4 relative hidden sm:block">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-secondaryText">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <input
                value={word}
                onChange={onChangeSearchWord}
                type="search"
                placeholder="Search premium products..."
                className="w-full pl-10 pr-4 py-2.5 bg-brandBg/60 focus:bg-white text-sm font-semibold text-primaryText placeholder-secondaryText/60 border border-borderColor/60 rounded-full focus:ring-4 focus:ring-primaryAccent/10 focus:border-primaryAccent outline-none transition-all duration-300"
                aria-label="Search"
              />
            </div>

            {/* Right Side Buttons (Dropdown/Hi User, Orders, Wishlist, Cart) */}
            <div className="hidden md:flex items-center gap-1.5">
              
              {/* Item 1: Dropdown / Profile */}
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2 px-3 py-2 hover:bg-black/5 rounded-xl transition-all duration-200 text-sm font-semibold text-primaryText border-none bg-transparent cursor-pointer"
                  >
                    <svg className="w-5 h-5 text-secondaryText" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                    </svg>
                    <span>Hi, {user.name}</span>
                    <svg className={`w-4 h-4 text-secondaryText transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>

                  {/* Dropdown Options */}
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2.5 w-56 bg-white border border-borderColor/50 rounded-2xl shadow-premium-hover py-2 z-50 transform origin-top-right transition-all duration-300">
                      <div className="px-4 py-2 border-b border-borderColor/40 mb-1">
                        <p className="text-xs text-secondaryText font-medium m-0">Logged in as</p>
                        <p className="text-sm font-bold text-primaryText truncate m-0">{user.email || user.name}</p>
                      </div>

                      {user.role === "admin" ? (
                        <Link
                          to="/admin/products-list"
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold text-secondaryText hover:text-primaryText hover:bg-brandBg transition-colors no-underline"
                        >
                          <svg className="w-4 h-4 text-primaryAccent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                          </svg>
                          Dashboard
                        </Link>
                      ) : (
                        <Link
                          to="/user/profile"
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold text-secondaryText hover:text-primaryText hover:bg-brandBg transition-colors no-underline"
                        >
                          <svg className="w-4 h-4 text-secondaryText" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                          </svg>
                          Personal Profile
                        </Link>
                      )}
                      
                      <div className="border-t border-borderColor/40 my-1"></div>
                      <Link
                        to="/"
                        onClick={logOut}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50 transition-colors no-underline"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                        </svg>
                        Logout
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-2 px-3 py-2 hover:bg-black/5 rounded-xl transition-all duration-200 text-sm font-semibold text-primaryText no-underline"
                >
                  <svg className="w-5 h-5 text-secondaryText" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                  </svg>
                  <span>Sign In</span>
                </Link>
              )}

              {/* Item 2: Orders */}
              <Link
                to={user ? (user.role === "admin" ? "/admin/allorders" : "/user/allorders") : "/login"}
                className="flex items-center gap-2 px-3 py-2 hover:bg-black/5 rounded-xl transition-all duration-200 text-sm font-semibold text-primaryText no-underline"
              >
                <svg className="w-5 h-5 text-secondaryText" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <span>Orders</span>
              </Link>

              {/* Item 3: Wishlist */}
              <Link
                to={user ? "/user/favoriteproducts" : "/login"}
                className="flex items-center gap-2 px-3 py-2 hover:bg-black/5 rounded-xl transition-all duration-200 text-sm font-semibold text-primaryText no-underline"
              >
                <svg className="w-5 h-5 text-secondaryText" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                </svg>
                <span>Wishlist</span>
              </Link>

              {/* Item 4: Cart */}
              <Link 
                to="/cart"
                className="relative flex items-center gap-2 px-3 py-2 hover:bg-black/5 rounded-xl transition-all duration-200 text-sm font-semibold text-primaryText no-underline"
                aria-label="Shopping Cart"
              >
                <svg className="w-5 h-5 text-secondaryText" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                </svg>
                <span>Cart</span>
                {itemsNum > 0 && (
                  <span className="absolute top-0.5 right-0.5 min-w-4.5 h-4.5 px-1 flex items-center justify-center text-[9px] font-bold text-white bg-primaryAccent rounded-full ring-2 ring-white animate-fade-in">
                    {itemsNum}
                  </span>
                )}
              </Link>

            </div>

            {/* Mobile Toggle only */}
            <div className="flex md:hidden items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-secondaryText hover:text-primaryText hover:bg-black/5 rounded-full transition-all duration-200 border-none bg-transparent cursor-pointer"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-borderColor/40 bg-white/95 backdrop-blur-md px-4 py-4 space-y-3 shadow-lg">
            <div className="relative w-full sm:hidden">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondaryText">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <input
                value={word}
                onChange={onChangeSearchWord}
                type="search"
                placeholder="Search..."
                className="w-full pl-9 pr-4 py-2.5 bg-brandBg/60 text-sm font-semibold text-primaryText border border-borderColor/60 rounded-full focus:ring-4 focus:ring-primaryAccent/10 focus:border-primaryAccent outline-none"
              />
            </div>
            
            <div className="flex flex-col gap-1">
              <Link 
                to="/allcategory" 
                className="flex items-center gap-2.5 px-4 py-3 text-base font-semibold text-secondaryText hover:text-primaryText rounded-xl hover:bg-brandBg transition-all no-underline"
              >
                Categories
              </Link>
              <Link 
                to="/products" 
                className="flex items-center gap-2.5 px-4 py-3 text-base font-semibold text-secondaryText hover:text-primaryText rounded-xl hover:bg-brandBg transition-all no-underline"
              >
                Shop
              </Link>
              <Link 
                to={user ? (user.role === "admin" ? "/admin/allorders" : "/user/allorders") : "/login"} 
                className="flex items-center gap-2.5 px-4 py-3 text-base font-semibold text-secondaryText hover:text-primaryText rounded-xl hover:bg-brandBg transition-all no-underline"
              >
                Orders
              </Link>
              <Link 
                to={user ? "/user/favoriteproducts" : "/login"} 
                className="flex items-center gap-2.5 px-4 py-3 text-base font-semibold text-secondaryText hover:text-primaryText rounded-xl hover:bg-brandBg transition-all no-underline"
              >
                Wishlist
              </Link>
              <Link 
                to="/cart" 
                className="flex items-center gap-2.5 px-4 py-3 text-base font-semibold text-secondaryText hover:text-primaryText rounded-xl hover:bg-brandBg transition-all no-underline"
              >
                Cart
              </Link>
            </div>
          </div>
        )}
      </nav>
    );
};

export default NavBarLogin;
