import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { getAllBrand } from "../../redux/actions/brandAction";
import ViewSearchProductsHook from "../product/view-search-products-hook";
const SidebarSearchHook = () => {
  const [items, pagination, onPress, getProduct, results] =
    ViewSearchProductsHook();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllCategory());
      await dispatch(getAllBrand());
    };
    fetchData();
  }, [dispatch]);

  const allcategory = useSelector((state) => state.allCategory.category);
  const allbrand = useSelector((state) => state.allBrand.brand);

  let category = [];
  if (allcategory.data) {
    category = allcategory.data;
  }

  let brand = [];
  if (allbrand.data) {
    brand = allbrand.data;
  }

  let queryCat = "";
  let queryBrand = "";
  const [catChecked, setCatChecked] = useState([]);
  const [brandChecked, setBrandChecked] = useState([]);

  const clickCategory = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setCatChecked([]);
    } else {
      if (e.target.checked === true) {
        setCatChecked([...catChecked, value]);
        console.log(catChecked);
      } else {
        const newarr = catChecked.filter((item) => item !== value);
        setCatChecked(newarr);
      }
    }
  };

  useEffect(() => {
    queryCat = catChecked.map((val) => "category[in][]=" + val).join("&");
    localStorage.setItem("catChecked", queryCat);
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [catChecked]);

  const clickBrand = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setBrandChecked([]);
    } else {
      if (e.target.checked === true) {
        setBrandChecked([...brandChecked, value]);
      } else {
        const newarr = brandChecked.filter((item) => item !== value);
        setBrandChecked(newarr);
      }
    }
  };

  useEffect(() => {
    queryBrand = brandChecked.map((val) => "brand[in][]=" + val).join("&");
    localStorage.setItem("brandChecked", queryBrand);
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [brandChecked]);

  const [From, setPriceFrom] = useState(0);
  const [To, setToFrom] = useState(0);

  const priceFrom = (e) => {
    localStorage.setItem("priceFrom", e.target.value);

    setPriceFrom(e.target.value);
  };
  const priceTo = (e) => {
    localStorage.setItem("priceTo", e.target.value);
    setToFrom(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [From, To]);

  return [category, brand, clickCategory, clickBrand, priceFrom, priceTo];
};
export default SidebarSearchHook;
