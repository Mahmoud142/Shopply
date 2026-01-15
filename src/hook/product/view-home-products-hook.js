import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "./../../redux/actions/productAction";

const ViewHomeProductsHook = () => {
  const dispatch = useDispatch();
  let limit = 4;
  useEffect(() => {
    dispatch(getAllProducts(limit));
  }, []);

  const Products = useSelector((state) => state.allProducts.allProducts);

  let homeProducts = [];

  if (Products.data) {
    homeProducts = Products.data.slice(0, limit);
  } else {
    homeProducts = [];
  }
  console.log(homeProducts);
  return [homeProducts];
};

export default ViewHomeProductsHook;
