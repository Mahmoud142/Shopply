import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import notify from "../../hook/useNotifaction";
import { applyCouponCart } from "../../redux/actions/cartAction";

const ApplyCouponHook = () => {
    const dispatch = useDispatch();

    const [couponName, setCouponName] = useState("");
    const [loading, setLoading] = useState(true);

    const onChangeCoupon = (e) => {
        setCouponName(e);
    };

    const handleSubmitCoupon = async () => {
        if (couponName === "") {
            notify("من فضلك ادخل الكوبون", "warn");
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
                notify("تم تطبيق الكوبون بنجاح", "success");
                setTimeout(() => {
                    window.location.reload(false);
                }, 1000);
            } else {
                notify("هذا الكوبون غير صحيح او منتهى الصلاحيه", "warn");
                setTimeout(() => {
                    window.location.reload(false);
                }, 1000);
            }
        }
    }, [loading]);

    return [couponName, onChangeCoupon, handleSubmitCoupon];
};

export default ApplyCouponHook;
