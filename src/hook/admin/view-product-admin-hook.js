import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getAllProducts,
    getAllProductsPage,
} from "../../redux/actions/productAction";

const ViewProductAdminHook = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts(10));
    }, [dispatch]);

    const onPress = async (page) => {
        await dispatch(getAllProductsPage(page, 10));
    };
    const products = useSelector((state) => state.allProducts.allProducts);

    const items = products?.data ?? [];
    const pagination = products?.paginationResult ?? [];

    return [items, pagination, onPress];
};
export default ViewProductAdminHook;
