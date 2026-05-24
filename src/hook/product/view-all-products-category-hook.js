import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsByCategory } from "./../../redux/actions/productAction";
const ViewAllProductsCategoryHook = (catID) => {
    let limit = 4;
    const dispatch = useDispatch();

    const getProduct = async () => {
        await dispatch(getAllProductsByCategory("", limit, catID));
    };
    useEffect(() => {
        getProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[catID,dispatch]);

    //when click pagination
    const onPress = async (page) => {
        await dispatch(getAllProductsByCategory(page, limit, catID));
    };

    const allProducts = useSelector((state) => state.allProducts?.allProductCat);
    const items = allProducts?.data ? allProducts.data : [];
    const pagination = allProducts?.paginationResult ? allProducts.paginationResult.numberOfPages : [];
    return [items, pagination, onPress];
};

export default ViewAllProductsCategoryHook;
