<div align="center">

# 🛍️ Shopply

**A premium React e-commerce storefront with a modern, minimalist design**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

<br />

[![🌐 Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Shopply-0ABF53?style=for-the-badge)](https://shopplywebapp.vercel.app/)
[![Backend API](https://img.shields.io/badge/Backend_API-ECommerce--api-blue?style=for-the-badge&logo=github)](https://github.com/Mahmoud142/ECommerce-api)

<br />

A fully-featured e-commerce frontend delivering a polished shopping experience — from browsing and searching products with advanced filters, to cart management, coupon application, Stripe-integrated checkout, and a complete admin dashboard for inventory and order management.

> 🔗 **Live App:** [shopplywebapp.vercel.app](https://shopplywebapp.vercel.app/) · **Backend Source:** [Mahmoud142/ECommerce-api](https://github.com/Mahmoud142/ECommerce-api)

[Features](#-features) •
[Tech Stack](#️-tech-stack) •
[Architecture](#-architecture) •
[Getting Started](#-getting-started) •
[Screenshots](#-page-structure)

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 🏠 **Premium Landing Page** | Auto-rotating hero carousel with floating glassmorphic widgets, category grid, brand showcase, and discount highlights |
| 🔍 **Advanced Product Search** | Real-time search with sort, filter by category/brand/price range, and paginated results |
| 🛒 **Full Shopping Cart** | Add/remove items, update quantities, apply coupon codes, and view live price breakdowns |
| 💳 **Dual Checkout** | Choose between Stripe credit card payments or Cash on Delivery, with saved shipping addresses |
| 🔐 **Complete Auth Flow** | Register, login, email verification, forgot/reset password — all with toast notifications and route guards |
| ❤️ **Wishlist** | One-click add/remove favorites with instant heart toggle animation |
| ⭐ **Ratings & Reviews** | View and submit product reviews with star ratings; auto-calculated averages |
| 👤 **User Dashboard** | Profile management, order history, saved addresses (add/edit/delete), and password changes |
| 🛠️ **Admin Dashboard** | Full CRUD for products (with multi-image upload), categories, subcategories, brands, coupons, and order management with pay/deliver status updates |
| 📱 **Fully Responsive** | Mobile-first design with a collapsible navigation drawer, adaptive grid layouts, and touch-friendly interactions |
| 🎨 **Premium Design System** | Custom Tailwind theme with curated color palette, premium border-radius, glassmorphic shadows, and Inter typography |
| ⚡ **Smooth Animations** | Framer Motion entrance animations, CSS micro-interactions, hover transforms, and subtle bounce effects |

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | React 19, React Router v7 (SPA routing) |
| **State Management** | Redux Toolkit + React-Redux (13 reducers, 12 action files) |
| **Styling** | Tailwind CSS 3 + Bootstrap 5 (hybrid), custom design tokens |
| **Animations** | Framer Motion (page/card entrances), CSS transitions & keyframes |
| **HTTP Client** | Axios with centralized base URL config + Vercel rewrites (CORS proxy) |
| **UI Components** | React Bootstrap (Grid, Carousel, Modals), Lucide React (icons) |
| **Forms & UX** | react-toastify (notifications), react-select (dropdowns), react-paginate, react-rating-stars |
| **Media** | react-image-gallery (product detail zoom), react-images-uploading (admin uploads) |
| **Deployment** | Vercel (production), vercel.json API proxy rewrites |

---

## 🏗️ Architecture

```
Shopply/
├── public/                          # Static assets & index.html
├── src/
│   ├── Api/
│   │   └── baseURL.js               # Axios instance with centralized config
│   ├── components/
│   │   ├── Admin/                    # 14 admin components (CRUD panels, sidebar, order management)
│   │   ├── Cart/                     # CartItem, CartCheckout
│   │   ├── Checkout/                 # ChoosePayMethod (Cash/Card + address selector)
│   │   ├── Brand/                    # Brand grid display
│   │   ├── Category/                 # Category grid display
│   │   ├── Home/                     # HeroSection (carousel), HomeCategory, DiscountSection, Slider
│   │   ├── Products/                 # ProductCard, ProductGallery, ProductText, CardContainer
│   │   ├── Rate/                     # Star rating input component
│   │   ├── User/                     # Profile, orders, addresses, wishlist (10 components)
│   │   └── utility/                  # NavBarLogin, Footer, Pagination, ProtectedRoute, SideFilter
│   ├── hook/                         # Custom hooks organized by domain
│   │   ├── auth/                     # Login, register, forgot/reset/verify password hooks
│   │   ├── brand/                    # Brand CRUD hooks
│   │   ├── cart/                     # Add-to-cart, get-cart, update/delete item hooks
│   │   ├── category/                 # Category CRUD hooks
│   │   ├── checkout/                 # Cash & card payment hooks
│   │   ├── coupon/                   # Coupon CRUD hooks
│   │   ├── product/                  # Product CRUD, search, card interaction hooks
│   │   ├── review/                   # Review CRUD hooks
│   │   ├── search/                   # Navbar search hook
│   │   ├── subcategory/              # Subcategory hooks
│   │   └── user/                     # Profile, addresses, orders hooks
│   ├── hooks/                        # Generic data-fetching hooks (GET, POST, PUT, DELETE)
│   ├── images/                       # Static images (hero, logos, product placeholders)
│   ├── pages/                        # Page-level components (9 directories)
│   │   ├── Admin/                    # 10 admin pages
│   │   ├── Auth/                     # Login, Register, ForgotPassword, VerifyEmail, ResetPassword
│   │   ├── Brand/                    # AllBrandPage
│   │   ├── Cart/                     # CartPage
│   │   ├── Category/                 # AllCategoryPage
│   │   ├── Checkout/                 # ChoosePayMethodPage
│   │   ├── Home/                     # HomePage
│   │   ├── Products/                 # ShopProductPage, ProductDetailsPage, ProductsByCategory/Brand
│   │   └── User/                     # Profile, orders, addresses, wishlist pages
│   ├── redux/
│   │   ├── actions/                  # 12 action creators (async thunks)
│   │   ├── reducers/                 # 13 reducers + rootReducer
│   │   ├── store.js                  # Redux store (configureStore)
│   │   └── type.js                   # 79 action type constants
│   ├── App.js                        # Root component with routing (30+ routes)
│   ├── App.css                       # Global custom styles
│   └── index.css                     # Tailwind directives + design system overrides
├── tailwind.config.js                # Custom theme (colors, fonts, shadows, radii)
├── vercel.json                       # API proxy rewrite rules
└── package.json
```

### Design Patterns

- **Domain-Driven Hooks** — Business logic encapsulated in 40+ custom hooks, organized by feature domain (auth, cart, product, checkout, etc.)
- **Generic Data Hooks** — Reusable `useGetData`, `useInsertData`, `useUpdateData`, `useDeleteData` hooks abstract all HTTP operations
- **Redux Action/Reducer Pattern** — 12 async action creators dispatch to 13 domain-specific reducers via a combined root reducer
- **Route-Level Protection** — `ProtectedRoute` component with role-based guards (`admin` / `user`) wrapping nested routes
- **Component Composition** — Pages compose domain components (e.g., `CartPage` → `CartItem` + `CartCheckout`) for clean separation
- **Centralized API Layer** — Single Axios instance with Vercel rewrites to proxy API calls and avoid CORS/mixed-content issues

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/Mahmoud142/Shopply.git
cd Shopply

# Install dependencies
npm install
```

### Run Locally

```bash
# Start the development server
npm start
# → Opens at http://localhost:3000
```

> **Note:** The app proxies API requests to the production backend via Vercel rewrites. For local backend development, update `src/Api/baseURL.js` to point to your local API server.

### Build for Production

```bash
npm run build
# → Optimized bundle in /build
```

---

## 🗺️ Page Structure

| Route | Page | Access |
|---|---|:---:|
| `/` | Landing page (hero carousel, categories, deals) | Public |
| `/products` | Product catalog with search, sort & filter | Public |
| `/products/:id` | Product details, gallery, reviews | Public |
| `/products/category/:id` | Products filtered by category | Public |
| `/products/brand/:id` | Products filtered by brand | Public |
| `/allcategory` | All categories grid | Public |
| `/allbrand` | All brands grid | Public |
| `/login` | User login | Public |
| `/register` | User registration | Public |
| `/user/forget-password` | Forgot password flow | Public |
| `/user/verify-code` | Verify reset code | Public |
| `/user/verify-email` | Verify email | Public |
| `/user/reset-password` | Reset password | Public |
| `/cart` | Shopping cart | Public |
| `/order/paymentMethod` | Checkout (Cash / Stripe) | 🔒 User |
| `/user/profile` | Profile management | 🔒 User |
| `/user/allorders` | Order history | 🔒 User |
| `/user/favoriteproducts` | Wishlist | 🔒 User |
| `/user/addresses` | Saved addresses | 🔒 User |
| `/user/add-address` | Add new address | 🔒 User |
| `/user/edit-address/:id` | Edit address | 🔒 User |
| `/admin/products-list` | Manage all products | 🔒 Admin |
| `/admin/add-product` | Add new product | 🔒 Admin |
| `/admin/edit-product/:id` | Edit product | 🔒 Admin |
| `/admin/allorders` | Manage all orders | 🔒 Admin |
| `/admin/orders/:id` | Order details (pay/deliver) | 🔒 Admin |
| `/admin/add-category` | Add category | 🔒 Admin |
| `/admin/add-subcategory` | Add subcategory | 🔒 Admin |
| `/admin/add-brand` | Add brand | 🔒 Admin |
| `/admin/add-coupon` | Add coupon | 🔒 Admin |
| `/admin/edit-coupon/:id` | Edit coupon | 🔒 Admin |

---

## 🔗 Related

| | Repository | Description |
|---|---|---|
| ⚙️ | [ECommerce-api](https://github.com/Mahmoud142/ECommerce-api) | Node.js/Express/MongoDB backend powering this frontend |
| 🌐 | [Live Demo](https://shopplywebapp.vercel.app/) | Production deployment on Vercel |

---

## 📄 License

This project is licensed under the **MIT License**.

---

<div align="center">

**Built by [Mahmoud Abdellah](https://mahmoudabdellah.tech)**

</div>
