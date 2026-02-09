import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "./../../redux/actions/productAction";

const ViewHomeProductsHook = () => {
  const dispatch = useDispatch();
  let limit = 4;

  useEffect(() => {
    dispatch(getAllProducts(limit));
  },[dispatch,limit]);

  const Products = useSelector((state) => state.allProducts.allHomeProducts);

  const homeProducts = Products?.data ?? [];

  return [homeProducts];
};

export default ViewHomeProductsHook;
