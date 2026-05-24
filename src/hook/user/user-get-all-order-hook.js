import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../redux/actions/orderAction";

const UserGetAllOrderHook = () => {
    const [loading, setLoading] = useState(true);
    const [results, setResult] = useState(0);
    const [paginate, setPaginate] = useState({});
    const [orderData, setOrderData] = useState([]);
    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem("user"));
    let userName = "";
    if (user != null) userName = user.name;

    const get = async () => {
        setLoading(true);
        await dispatch(getAllOrders("", 5));
        setLoading(false);
    };

    useEffect(() => {
        get();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onPress = async (page) => {
        setLoading(true);
        await dispatch(getAllOrders(page, 5));
        setLoading(false);
    };
    //get address detalis for user
    const resAllOrder = useSelector((state) => state.orderReducer.getAllOrders);
    useEffect(() => {
        if (loading === false) {
            if (resAllOrder.results) setResult(resAllOrder.results);
            if (resAllOrder.paginationResult)
                setPaginate(resAllOrder.paginationResult);
            if (resAllOrder.data) setOrderData(resAllOrder.data);
        }
    }, [loading, resAllOrder]);

    return [userName, results, paginate, orderData, onPress];
};

export default UserGetAllOrderHook;
