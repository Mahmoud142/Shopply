import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import notify from "../../hook/useNotifaction";
import { applyCouponCart } from "../../redux/actions/cartAction";
import { useNavigate } from "react-router-dom";
const ApplyCouponHook = (cartItems) => {
    const dispatch = useDispatch();

    const [couponName, setCouponName] = useState("");
    const [loading, setLoading] = useState(true);

    const onChangeCoupon = (e) => {
        setCouponName(e);
    };

    const handleSubmitCoupon = async () => {
        if (couponName === "") {
            notify("Please enter the coupon code", "warn");
            return;
        }
        setLoading(true);
        await dispatch(
            applyCouponCart({
                couponName: couponName,
            }),
        );
        setLoading(false);
    };

    const res = useSelector((state) => state.cartReducer.applyCoupon);

    useEffect(() => {
        if (loading === false) {
            if (res && res.status === 200) {
                notify("Coupon applied successfully", "success");
                setTimeout(() => {
                    window.location.reload(false);
                }, 1000);
            } else {
                notify("This coupon is invalid or has expired", "warn");
                setTimeout(() => {
                    window.location.reload(false);
                }, 1000);
            }
        }
    }, [loading, res]);

        const navigate = useNavigate();
        const handleCheckout = () => {
            if (cartItems?.length >= 1) {
                navigate("/order/paymentMethod");
            } else {
                notify("Please add products to the cart first", "warn");
            }
        };

    return [couponName, onChangeCoupon, handleSubmitCoupon, handleCheckout];
};

export default ApplyCouponHook;
