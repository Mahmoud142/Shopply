import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
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
        ApplyCouponHook();

    useEffect(() => {
        if (couponNameRes) {
            onChangeCoupon(couponNameRes);
        }
    }, [couponNameRes, onChangeCoupon]);

    return (
        <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
            <Col xs="12" className="d-flex  flex-column  ">
                <div className="d-flex  ">
                    <input
                        value={couponName}
                        onChange={(e) => onChangeCoupon(e.target.value)}
                        className="copon-input d-inline text-center "
                        placeholder="Discount Code"
                    />
                    <button
                        className="copon-btn d-inline "
                        onClick={handleSubmitCoupon}
                    >
                        Apply
                    </button>
                </div>
                <div className="product-price d-inline w-100 my-3  border">
                    {" "}
                    {totalCartPriceAfterDiscount >= 1
                        ? `${totalCartPrice} EGP ... After Discount ${totalCartPriceAfterDiscount} `
                        : `${totalCartPrice} EGP`}
                </div>
                <Link
                    to="/order/paymentMethod"
                    style={{ textDecoration: "none" }}
                    className="product-cart-add  d-inline "
                >
                    <button
                        onClick={handleCheckout}
                        className="product-cart-add w-100 px-2"
                    >
                        {" "}
                        Checkout
                    </button>
                </Link>
                <button
                    onClick={handleDeleteCart}
                    className="product-cart-add w-100 px-2 my-1"
                >
                    {" "}
                    Clear Cart
                </button>
            </Col>
            <ToastContainer />
        </Row>
    );
};

export default CartCheckout;
