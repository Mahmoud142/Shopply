import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneProduct,
  getProductLike,
} from "../../redux/actions/productAction";
import mobile from "../../images/mobile.png";
import { getOneCategory } from "../../redux/actions/categoryAction";
import { getOneBrand } from "../../redux/actions/brandAction";

const ViewProductDetailsHook = (prodID) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneProduct(prodID));
  }, [dispatch, prodID]);

  const oneProduct = useSelector((state) => state.allProducts.oneProduct);
  const oneCategory = useSelector((state) => state.allCategory.oneCategory);
  const oneBrand = useSelector((state) => state.allBrand.oneBrand);
  const productLike = useSelector((state) => state.allProducts.productLike);

  const product = useMemo(() => oneProduct?.data || {}, [oneProduct]);

  useEffect(() => {
    const { category, brand } = product;
    if (!category && !brand) return;

    if (category) {
      dispatch(getOneCategory(category));
      dispatch(getProductLike(category));
    }

    if (brand) dispatch(getOneBrand(brand));
  }, [dispatch, product]);

  // image views
  const images = product.images?.length
    ? product.images.map((img) => ({ original: img }))
    : [{ original: `${mobile}` }];
  //to show category item
  const cat = oneCategory?.data || [];

  //to show brand item
  const brand = oneBrand?.data || [];

  const prod = productLike?.data || [];

  return [product, images, cat, brand, prod];
};

export default ViewProductDetailsHook;
