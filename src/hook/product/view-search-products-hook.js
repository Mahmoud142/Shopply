import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllProducts,
  getAllProductsPage,
} from "../../redux/actions/productAction";

const ViewSearchProductsHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts(12));
  }, [dispatch]);

  // get products from redux
  const products = useSelector((state) => state.allProducts.allProducts);
  console.log(products);
  let items = [];
  if (products.data) {
    items = products.data;
  }
  let pagination = [];
  if (products.paginationResult) {
    pagination = products.paginationResult;
  }
  
  // change page
  const onPress = async (page) => {
    await dispatch(getAllProductsPage(page));
  };
  return [items, pagination, onPress];
};
export default ViewSearchProductsHook;
