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
  let items = [];
  let pagination = [];

  let products = useSelector((state) => state.allProducts.allProducts);
  try {
    if (products.data) {
      items = products.data;
    }
    if (products.paginationResult) {
      pagination = products.paginationResult;
    }
  } catch (e) {
    console.log(e);
  }
  return [items, pagination, onPress];
};
export default ViewProductAdminHook;
