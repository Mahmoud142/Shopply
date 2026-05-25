import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductCardHook from "../../hook/product/product-card-hook";
import { motion } from "framer-motion";

const ProductCard = ({ product, favProd }) => {
    const [, , handleFav, , isFav] = ProductCardHook(product, favProd);

    let imageCoverUrl = product?.imageCover || "";
    if (imageCoverUrl && !imageCoverUrl.includes("http")) {
        imageCoverUrl = `http://localhost:3000/products/${imageCoverUrl}`;
    }

    return (
        <Col xs="12" sm="6" md="4" lg="3" className="d-flex p-3">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full flex"
            >
                <div className="group relative w-full flex flex-col justify-between bg-white border border-borderColor/60 rounded-premium shadow-premium hover:shadow-premium-hover transition-all duration-400 ease-out overflow-hidden p-3.5">
                    
                    {/* Image Container with Hover Zoom & Floating Elements */}
                    <div className="relative w-full aspect-[4/5] rounded-premium-sm overflow-hidden bg-brandBg/40 mb-3.5 flex items-center justify-center">
                        
                        {/* Wishlist Button (Glassmorphic) */}
                        <button
                            onClick={handleFav}
                            className="absolute top-3.5 right-3.5 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-white shadow-sm cursor-pointer transition-all duration-300 hover:scale-110 active:scale-90 hover:bg-white"
                            aria-label="Add to Wishlist"
                        >
                            <svg 
                                className={`w-5 h-5 transition-colors duration-300 ${
                                    isFav 
                                        ? "fill-red-500 text-red-500" 
                                        : "text-secondaryText hover:text-red-500"
                                }`} 
                                fill={isFav ? "currentColor" : "none"} 
                                stroke="currentColor" 
                                strokeWidth="2.5" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                        </button>

                        {/* Product Image Cover */}
                        <Link
                            to={`/products/${product._id}`}
                            className="w-full h-full flex items-center justify-center"
                        >
                            <img
                                className="w-full h-full object-contain p-2 transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-106"
                                src={imageCoverUrl}
                                alt={product.title}
                                loading="lazy"
                            />
                        </Link>
                    </div>

                    {/* Product Details Section */}
                    <div className="flex-1 flex flex-col justify-between">
                        
                        {/* Ratings & Category */}
                        <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[11px] font-bold text-primaryAccent uppercase tracking-widest">
                                {product.category?.name || "Premium"}
                            </span>
                            <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-full">
                                <svg className="w-3.5 h-3.5 fill-amber-400 text-amber-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                </svg>
                                <span className="text-[11px] font-bold text-amber-700">
                                    {product.ratingsAverage || 0}
                                </span>
                            </div>
                        </div>

                        {/* Title */}
                        <Link 
                            to={`/products/${product._id}`}
                            className="no-underline block mb-2"
                        >
                            <h4 className="font-sans font-semibold text-primaryText text-base group-hover:text-primaryAccent transition-colors duration-300 line-clamp-1 m-0">
                                {product.title}
                            </h4>
                        </Link>

                        {/* Price & Action Button */}
                        <div className="flex flex-col gap-3 mt-auto">
                            <div className="flex items-baseline gap-2">
                                <span className="text-lg font-bold text-primaryText tracking-tight">
                                    {product.priceAfterDiscount >= 1 
                                        ? product.priceAfterDiscount 
                                        : product.price}
                                </span>
                                {product.priceAfterDiscount >= 1 && (
                                    <span className="text-xs text-secondaryText line-through font-medium">
                                        {product.price}
                                    </span>
                                )}
                                <span className="text-[10px] font-semibold text-secondaryText uppercase tracking-wider ml-0.5">EGP</span>
                            </div>

                            {/* Modern conversion-focused button */}
                            <Link 
                                to={`/products/${product._id}`}
                                className="no-underline flex items-center justify-center gap-1.5 w-full py-2.5 bg-brandBg hover:bg-primaryText text-primaryText hover:text-white text-xs font-bold rounded-xl transition-all duration-300 group-hover:bg-brandBg/80 border border-borderColor/50 hover:border-primaryText"
                            >
                                View Details
                                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Col>
    );
};

export default ProductCard;
