import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrderCash } from "../../redux/actions/checkoutAction";
import { getOneUserAddress } from "../../redux/actions/userAddressesAction";
import notify from "../useNotifaction";
import GetAllUserCartHook from "./../cart/get-all-user-cart-hook";

const OrderPayCashHook = () => {
    const [loading, setLoading] = useState(true);
    const [loadingCreate, setLoadingCreate] = useState(true);
    const [addressDetails, setAddressDetails] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [, , , , , cartID] = GetAllUserCartHook();
    // console.log(addressDetails);
    //when change address bu user
    const handleChooseAddress = (e) => {
        setAddressDetails([]);
        if (e.target.value !== "0") get(e.target.value);
    };

    const get = async (id) => {
        setLoading(true);
        await dispatch(getOneUserAddress(id));
        setLoading(false);
    };

    //get address detalis for user
    const resAddress = useSelector(
        (state) => state.userAddressesReducer?.oneAddress,
    );
    useEffect(() => {
        if (loading === false) {
            if (resAddress && resAddress.status === "success") {
                setAddressDetails(resAddress.data);
            } else setAddressDetails([]);
        }
    }, [loading]);

    //when user click
    const handleCreateOrderCash = async () => {
        if (cartID === "0") {
            notify("من فضلك اضف منتجات الى العربه اولا", "warn");
            return;
        }
        if (addressDetails.length <= 0) {
            notify("من فضلك اختر عنوان اولا", "warn");
            return;
        }
        setLoadingCreate(true);
        await dispatch(
            createOrderCash(cartID, {
                shippingAddress: {
                    details: addressDetails.alias,
                    phone: addressDetails.phone,
                    city: "",
                    postalCode: "",
                },
            }),
        );
        setLoadingCreate(false);
    };

    //get response for create orser cash
    const resOrserCash = useSelector(
        (state) => state.checkoutReducer?.createOrderCash,
    );
    useEffect(() => {
        console.log('resOrserCash: ', resOrserCash);
        if (loadingCreate === false) {
            if (resOrserCash && resOrserCash.status === 201) {
                notify("تم انشاء طلبك بنجاح", "success");
                setTimeout(() => {
                    navigate("/user/allorders");
                }, 1500);
            } else {
                notify("فشل فى اكمال الطلب من فضلك حاول مره اخرى", "warn");
            }
        }
    }, [loadingCreate]);

    return [handleChooseAddress, addressDetails, handleCreateOrderCash];
};

export default OrderPayCashHook;
