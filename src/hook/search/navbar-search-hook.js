import { useState, useEffect } from "react";

import ViewSearchProductsHook from "../product/view-search-products-hook";
const NavbarSearchHook = () => {
  const [items, pagination, onPress, getProducts] = ViewSearchProductsHook();

  const [searchWord, setSearchWord] = useState("");
  const onChangeSearchWord = (e) => {
    localStorage.setItem("searchWord", e.target.value);
    setSearchWord(e.target.value);
    const path = window.location.pathname;
    if (path !== "/products") {
      window.location.href = "/products";
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getProducts();
    }, 1000);
  }, [searchWord]);
  return [onChangeSearchWord, searchWord];
};
export default NavbarSearchHook;
