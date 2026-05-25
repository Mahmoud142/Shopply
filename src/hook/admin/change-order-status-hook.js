import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    changeOrderDeliver,
    changeOrderPay,
} from "../../redux/actions/orderAction";
import notify from "../useNotifaction";

const ChangeOrderStatusHook = (id) => {
    const [loading, setLoading] = useState(true);
    const [loadingDeliver, setLoadingDeliver] = useState(true);
    const [pay, setPay] = useState(0);
    const [deliver, setDeliver] = useState(0);
    const dispatch = useDispatch();

    const changePayOrder = async () => {
        if (pay === "true") {
            setLoading(true);
            await dispatch(changeOrderPay(id));
            setLoading(false);
        } else if (pay === "0") {
            console.log("Please select a value");
        }
    };

    const changeDeliverOrder = async () => {
        if (deliver === "true") {
            setLoadingDeliver(true);
            await dispatch(changeOrderDeliver(id));
            setLoadingDeliver(false);
        } else if (deliver === "0") {
            console.log("Please select a value");
        }
    };

    //get order pay change
    const resOneOrder = useSelector((state) => state.orderReducer.changePay);
    useEffect(() => {
        if (loading === false) {
            if (resOneOrder && resOneOrder.status === 200) {
                notify("Payment status updated successfully", "success");
                setTimeout(() => {
                    window.location.reload(false);
                }, 1000);
            } else {
                notify("There was a problem during the change", "error");
            }
        }
    }, [loading, resOneOrder]);

    //get order deliver change
    const resDeliverOrder = useSelector(
        (state) => state.orderReducer.changeDeliver,
    );
    useEffect(() => {
        if (loadingDeliver === false) {
            if (resDeliverOrder && resDeliverOrder.status === 200) {
                notify("Delivery status updated successfully", "success");
                setTimeout(() => {
                    window.location.reload(false);
                }, 1000);
            } else {
                notify("There was a problem during the change", "error");
            }
        }
    }, [loadingDeliver, resDeliverOrder]);

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "numeric", day: "numeric" };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const onChangePaid = (e) => {
        setPay(e.target.value);
    };

    const onChangeDeliver = (e) => {
        setDeliver(e.target.value);
    };

    return [
        formatDate,
        onChangePaid,
        changePayOrder,
        onChangeDeliver,
        changeDeliverOrder,
    ];
};

export default ChangeOrderStatusHook;
