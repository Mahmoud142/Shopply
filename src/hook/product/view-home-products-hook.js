import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "./../../redux/actions/productAction";

const ViewHomeProductsHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const Products = useSelector((state) => state.allProducts.allProducts);

  let homeProducts = [];

  if (Products.data) {
    homeProducts = Products.data.slice(0, 5);
  } else {
    homeProducts = [];
  }
  console.log(homeProducts);
  return [homeProducts];
};

export default ViewHomeProductsHook;
