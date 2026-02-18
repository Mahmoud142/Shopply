import { useEffect } from "react";
// import baseUrl from './../../Api/baseURL';
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCategory,
  getAllCategoryPage,
} from "../../redux/actions/categoryAction";

const AllCategoryHook = () => {
  const dispatch = useDispatch();
  //when first load
  useEffect(() => {
    dispatch(getAllCategory(6));
  }, []);

  //to get state from redux
  const category = useSelector((state) => state.allCategory?.category);
  const loading = useSelector((state) => state.allCategory?.loading);


  //to get page count
  let pageCount = category?.paginationResult ? category.paginationResult?.numberOfPages : 0;

  //when press pagination
  const getPage = (page) => {
    dispatch(getAllCategoryPage(page));
  };

  return [category, loading, pageCount, getPage];
};

export default AllCategoryHook;
