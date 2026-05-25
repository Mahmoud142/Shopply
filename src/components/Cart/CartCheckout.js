
import DeleteCartHook from "../../hook/cart/delete-cart-hook";
import ApplyCouponHook from "../../hook/cart/apply-coupon-to-hook";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

const CartCheckout = ({
    totalCartPrice,
    cartItems,
    totalCartPriceAfterDiscount,
    couponNameRes,
}) => {
    const [handleDeleteCart] = DeleteCartHook();
    const [couponName, onChangeCoupon, handleSubmitCoupon, handleCheckout] =
        ApplyCouponHook(cartItems);

    useEffect(() => {
        if (couponNameRes) {
            onChangeCoupon(couponNameRes);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [couponNameRes]);

    return (
        <div className="bg-white rounded-premium border border-borderColor/60 shadow-premium p-6 sticky top-24">
            <h3 className="font-sans text-lg font-bold text-primaryText tracking-tight m-0 mb-5">
                Order Summary
            </h3>

            {/* Coupon */}
            <div className="flex w-full gap-0 mb-4">
                <input
                    value={couponName}
                    onChange={(e) => onChangeCoupon(e.target.value)}
                    className="w-full min-w-0 flex-1 h-11 px-4 text-xs font-semibold text-primaryText placeholder-secondaryText/50 bg-brandBg border border-borderColor border-r-0 rounded-l-xl outline-none focus:border-primaryAccent transition-all"
                    placeholder="Discount Code"
                />
                <button
                    className="h-11 px-5 text-xs font-bold text-white bg-primaryText hover:bg-primaryAccent rounded-r-xl transition-all duration-300 border-none cursor-pointer whitespace-nowrap"
                    onClick={handleSubmitCoupon}
                >
                    Apply
                </button>
            </div>

            {/* Price Summary */}
            <div className="border-t border-borderColor/40 pt-4 mb-5">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-secondaryText font-medium">Subtotal</span>
                    <span className="text-sm font-bold text-primaryText">{totalCartPrice} EGP</span>
                </div>
                {totalCartPriceAfterDiscount >= 1 && (
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-green-600 font-semibold">After Discount</span>
                        <span className="text-sm font-bold text-green-600">{totalCartPriceAfterDiscount} EGP</span>
                    </div>
                )}
                <div className="flex items-center justify-between pt-3 mt-3 border-t border-borderColor/40">
                    <span className="text-base font-bold text-primaryText">Total</span>
                    <span className="text-xl font-extrabold text-primaryText tracking-tight">
                        {totalCartPriceAfterDiscount >= 1 ? totalCartPriceAfterDiscount : totalCartPrice} <span className="text-xs font-semibold text-secondaryText">EGP</span>
                    </span>
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2.5">
                <button
                    onClick={handleCheckout}
                    className="w-full h-12 bg-primaryAccent hover:bg-accentHover text-white text-sm font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg border-none cursor-pointer flex items-center justify-center gap-2"
                >
                    Proceed to Checkout
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
                <button
                    onClick={handleDeleteCart}
                    className="w-full h-10 bg-transparent hover:bg-red-50 text-red-500 text-xs font-bold rounded-xl transition-all duration-300 border border-red-200 hover:border-red-300 cursor-pointer"
                >
                    Clear Cart
                </button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CartCheckout;
