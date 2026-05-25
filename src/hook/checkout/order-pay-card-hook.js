import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrderCARD } from "../../redux/actions/checkoutAction";
import notify from "../useNotifaction";
import GetAllUserCartHook from "./../cart/get-all-user-cart-hook";

const OrderPayCardHook = (addressDetails) => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const [, , , , , cartID] = GetAllUserCartHook();

    //when user click
    const handelCreateOrderCARD = async () => {
        if (cartID === "0") {
            notify("Please add products to your cart first", "warn");
            return;
        }
        if (addressDetails === null || addressDetails === undefined) {
            notify("Please select an address first", "warn");
            return;
        }
        setLoading(true);
        await dispatch(
            createOrderCARD(cartID, {
                shippingAddress: {
                    details: addressDetails.alias,
                    phone: addressDetails.phone,
                    city: "",
                    postalCode: "",
                },
            }),
        );
        setLoading(false);
    };

    //get response for create order card
    const resOrderCard = useSelector(
        (state) => state.checkoutReducer.createOrderCard,
    );
    useEffect(() => {
        if (loading === false) {
            if (resOrderCard && (resOrderCard.status === 200 || resOrderCard.data?.status === "success")) {
                //notify("Your order has been created successfully", "success")
                console.log(resOrderCard);
                if (resOrderCard.data?.session?.url) {
                    window.open(resOrderCard.data.session.url);
                }
            } else {
                notify("Failed to complete the order, please try again", "warn");
            }
        }
    }, [loading, resOrderCard]);

    return [handelCreateOrderCARD];
};

export default OrderPayCardHook;
