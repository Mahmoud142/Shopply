import { useParams } from "react-router-dom";
import ViewProductDetailsHook from "../../hook/product/view-product-details-hook";
import AddToCartHook from "../../hook/cart/add-to-cart-hook";
import { ToastContainer } from "react-toastify";

const ProductText = () => {
    const { id } = useParams();
    const [item, , cat, brand] = ViewProductDetailsHook(id);
    const [colorClick, indexColor, addToCartHandel] = AddToCartHook(id, item);

    return (
        <div className="flex flex-col gap-6 text-left pl-0 md:pl-8">
            
            {/* Category and Rating Header */}
            <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-borderColor/40">
                <span className="text-[11px] font-bold text-primaryAccent uppercase tracking-widest bg-brandBg px-3 py-1 rounded-full border border-borderColor/40">
                    {cat?.name || "Premium Collection"}
                </span>
                {item?.ratingsAverage !== undefined && (
                    <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200/50 px-3 py-1 rounded-full">
                        <svg className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                        <span className="text-xs font-extrabold text-amber-800">
                            {item.ratingsAverage} / 5.0
                        </span>
                    </div>
                )}
            </div>

            {/* Product Title */}
            <div>
                <h1 className="font-sans font-extrabold text-3xl md:text-4xl text-primaryText tracking-tight leading-tight m-0">
                    {item?.title}
                </h1>
                <p className="font-sans text-sm font-semibold text-secondaryText mt-2.5 m-0">
                    Brand: <span className="text-primaryText font-bold">{brand?.name || "SHOPPLY"}</span>
                </p>
            </div>

            {/* Color Swatches */}
            {item?.availableColors && item.availableColors.length > 0 && (
                <div className="flex flex-col gap-2.5">
                    <span className="text-xs font-bold text-secondaryText uppercase tracking-wider">
                        Available Colors
                    </span>
                    <div className="flex items-center gap-3">
                        {item.availableColors.map((color, index) => (
                            <button
                                key={index}
                                onClick={() => colorClick(index, color)}
                                className={`w-8 h-8 rounded-full border border-borderColor/60 cursor-pointer transition-all duration-300 transform hover:scale-110 focus:outline-none flex items-center justify-center`}
                                style={{
                                    backgroundColor: color,
                                    boxShadow: indexColor === index 
                                        ? `0 0 0 3px #FFFFFF, 0 0 0 5px #2563EB, 0 4px 10px rgba(0,0,0,0.15)`
                                        : "0 2px 5px rgba(0,0,0,0.05)"
                                }}
                                aria-label={`Select color ${color}`}
                            >
                                {indexColor === index && (
                                    <svg className="w-3.5 h-3.5 text-white mix-blend-difference" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Description */}
            <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-secondaryText uppercase tracking-wider">
                    Product Description
                </span>
                <p className="font-sans text-sm text-secondaryText leading-relaxed max-w-2xl m-0">
                    {item?.description}
                </p>
            </div>

            {/* Price & Checkout Action CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-4 pt-6 border-t border-borderColor/40">
                
                {/* Pricing Box */}
                <div className="flex flex-col">
                    <span className="text-xs font-bold text-secondaryText uppercase tracking-wider mb-1">
                        Price
                    </span>
                    <div className="flex items-baseline gap-2.5">
                        <span className="text-3xl font-black text-primaryText tracking-tight">
                            {item?.priceAfterDiscount >= 1 ? item.priceAfterDiscount : item?.price}
                        </span>
                        {item?.priceAfterDiscount >= 1 && (
                            <span className="text-sm font-semibold text-secondaryText line-through">
                                {item.price}
                            </span>
                        )}
                        <span className="text-xs font-bold text-secondaryText uppercase tracking-widest">
                            EGP
                        </span>
                    </div>
                </div>

                {/* Add to Cart CTA */}
                <button
                    onClick={addToCartHandel}
                    className="flex-1 flex items-center justify-center gap-2 px-8 h-14 bg-primaryText hover:bg-primaryAccent text-white text-sm font-extrabold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 border-none cursor-pointer"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                    </svg>
                    Add to Cart
                </button>

            </div>

            <ToastContainer />
        </div>
    );
};

export default ProductText;
