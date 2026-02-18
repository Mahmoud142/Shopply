import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsByBrand } from "./../../redux/actions/productAction";


const ViewAllProductsBrandHook = (brandID) => {
    let limit = 8;
    const dispatch = useDispatch();

    const getProduct = async () => {
        await dispatch(getAllProductsByBrand("", limit, brandID));
    };
    useEffect(() => {
        getProduct();
    }, []);

    //when click pagination
    const onPress = async (page) => {
        await dispatch(getAllProductsByBrand(page, limit, brandID));
    };

    const allBrand = useSelector((state) => state.allProducts?.allProductBrand);

    const items = allBrand?.data ? allBrand.data : [];
    const pagination = allBrand?.paginationResult ? allBrand.paginationResult.numberOfPages : [];

    return [items, pagination, onPress];
};

export default ViewAllProductsBrandHook;
