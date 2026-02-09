import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllProductsSearch,
} from "../../redux/actions/productAction";

const ViewSearchProductsHook = () => {
  let limit = 8;
  const dispatch = useDispatch();

  // Declare variables at the top to avoid scoping issues
  let pricefromString = "",
    priceToString = "";
  let word = "",
    queryCat = "",
    brandCat = "",
    priceTo = "",
    priceFrom = "";
  let sortType = "",
    sort = "";

  const getStorge = () => {
    if (localStorage.getItem("searchWord") != null)
      word = localStorage.getItem("searchWord");
    if (localStorage.getItem("catChecked") != null)
      queryCat = localStorage.getItem("catChecked");
    if (localStorage.getItem("brandChecked") != null)
      brandCat = localStorage.getItem("brandChecked");
    if (localStorage.getItem("priceTo") != null)
      priceTo = localStorage.getItem("priceTo");
    if (localStorage.getItem("priceFrom") != null)
      priceFrom = localStorage.getItem("priceFrom");

    if (priceFrom === "" || priceFrom <= 0) {
      pricefromString = "";
    } else {
      pricefromString = `&price[gt]=${priceFrom}`;
    }

    if (priceTo === "" || priceTo <= 0) {
      priceToString = "";
    } else {
      priceToString = `&price[lte]=${priceTo}`;
    }
  };

  const sortData = () => {
    if (localStorage.getItem("sortType") !== null) {
      sortType = localStorage.getItem("sortType");
    } else {
      sortType = "";
    }
    if (sortType === "السعر من الاقل للاعلي") sort = "price";
    else if (sortType === "السعر من الاعلي للاقل") sort = "-price";
    else if (sortType === "") sort = "";
    else if (sortType === "الاكثر مبيعا") sort = "-sold";
    else if (sortType === "الاعلي تقييما") sort = "-quantity";
  };

  const getProducts = async () => {
    getStorge();
    sortData();
    const keywordString = word ? `&keyword=${word}` : "";
    await dispatch(
      getAllProductsSearch(
        `sort=${sort}&limit=${limit}${keywordString}${queryCat}&${brandCat}${pricefromString}${priceToString}`
      )
    );
  };

  useEffect(() => {
    getProducts();
  }, [dispatch, limit]);
  
  // get products from redux
  const products = useSelector((state) => state.allProducts.allProductsSearch);

  const items = products?.data || [];
  const pagination = products?.paginationResult?.numberOfPages || [];
  const results = products?.results || 0;

  // change page
  const onPress = async (page) => {
    getStorge();
    sortData();
    const keywordString = word ? `&keyword=${word}` : "";
    await dispatch(
      getAllProductsSearch(`sort=${sort}&limit=${limit}&page=${page}${keywordString}${queryCat}&${brandCat}${pricefromString}${priceToString}`)
    );
  };

  return [items, pagination, onPress, getProducts, results];
};
export default ViewSearchProductsHook;
