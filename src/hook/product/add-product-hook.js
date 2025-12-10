import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "./../../hook/useNotifaction";

import { getAllCategory } from "./../../redux/actions/categoryAction";
import { getAllBrand } from "./../../redux/actions/brandAction";
import { getOneCategory } from "../../redux/actions/subcategoryAction";

import { createProduct } from "./../../redux/actions/productAction";

const AdminAddProductHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getAllBrand());
  }, [dispatch]);

  // get category, brand, subcategory from redux
  const category = useSelector((state) => state.allCategory.category);
  const brand = useSelector((state) => state.allBrand.brand);
  const subCategory = useSelector((state) => state.allSubCategory.subcategory);

  const onSelect = (selectedList) => {
    setSelectedSubID(selectedList);
  };

  const [options, setOptions] = useState([]);

  // images
  const [images, setImages] = useState([]);
  // values
  const [prodName, setProdName] = useState("");
  const [prodDesc, setProdDesc] = useState("");
  const [prodPriceBefore, setProdPriceBefore] = useState("السعر قبل الخصم");
  const [prodPriceAfter, setProdPriceAfter] = useState("السعر بعد الخصم");
  const [qty, setQty] = useState("الكمية المتاحة");
  const [CatID, setCatID] = useState("0");
  const [BrandID, setBrandID] = useState('');
  const [selectedSubID, setSelectedSubID] = useState([]);
  const [loading, setLoading] = useState(true);

  const onChangeProdName = (e) => {
    e.persist();
    setProdName(e.target.value);
  };
  const onChangeProdDesc = (e) => {
    e.persist();
    setProdDesc(e.target.value);
  };
  const onChangePriceBefore = (e) => {
    e.persist();
    setProdPriceBefore(e.target.value);
  };
  const onChangeProdPriceAfter = (e) => {
    e.persist();
    setProdPriceAfter(e.target.value);
  };
  const onChangeQty = (e) => {
    e.persist();
    setQty(e.target.value);
  };
  const onChangeColor = (event) => {
    event.persist();
    setShowColor(!showColor);
  };
  //to show hide color picker
  const [showColor, setShowColor] = useState(false);
  //to store all pick color
  const [colors, setColors] = useState([]);

  const handleChangeComplete = (color) => {
    setColors([...colors, color.hex]);
    setShowColor(!showColor);
  };
  const removeColor = (color) => {
    const newColor = colors.filter((e) => e !== color);
    setColors(newColor);
  };
  const onSelectCategory = async (e) => {
    if (e.target.value !== 0) {
      await dispatch(getOneCategory(e.target.value));
    }
    setCatID(e.target.value);
  };
  useEffect(() => {
    if (CatID !== "0") {
      if (subCategory?.data && Array.isArray(subCategory.data)) {
        // Transform subcategory data to React Select format
        const formattedOptions = subCategory.data.map((item) => ({
          value: item._id,
          label: item.name,
          _id: item._id,
        }));
        setOptions(formattedOptions);
      }
    }
  }, [CatID, subCategory]);
  //when select brand store id
  const onSelectBrand = (e) => {
    setBrandID(e.target.value);
  };
  //to convert base 64 to file
  const dataURLtoFile = (dataurl, filename) => {
    if (!dataurl || typeof dataurl !== 'string') {
      return null;
    }
    try {
      const arr = dataurl.split(",");
      if (arr.length < 2) return null;
      
      const mimeMatch = arr[0].match(/:(.*?);/);
      if (!mimeMatch) return null;
      
      const mime = mimeMatch[1];
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }

      return new File([u8arr], filename, { type: mime });
    } catch (error) {
      console.error("Error converting dataURL to file:", error);
      return null;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      CatID === 0 ||
      prodName === "" ||
      prodDesc === "" ||
      images.length <= 0 ||
      prodPriceBefore <= 0
    ) {
      notify("من فضلك اكمل البيانات", "warn");
      return;
    }

    //convert base 64 image to file
    const imgCover = dataURLtoFile(images[0]?.data_url, Math.random() + ".png");
    if (!imgCover) {
      notify("حدث خطأ في معالجة الصور", "error");
      return;
    }
    
    //convert array of base 64 image to file
    const itemImages = Array.from(Array(Object.keys(images).length).keys())
      .map((item, index) => {
        return dataURLtoFile(images[index]?.data_url, Math.random() + ".png");
      })
      .filter((img) => img !== null);

    if (itemImages.length === 0) {
      notify("حدث خطأ في معالجة الصور", "error");
      return;
    }

    const formData = new FormData();
    formData.append("title", prodName);
    formData.append("description", prodDesc);
    formData.append("quantity", qty);
    formData.append("price", prodPriceBefore);
    formData.append("imageCover", imgCover);
    formData.append("category", CatID);
    formData.append("brand", BrandID);
    
    itemImages.forEach((item) => formData.append("images", item));
    colors.forEach((color) => formData.append("availableColors", color));
    selectedSubID.forEach((item) => formData.append("subcategory", item._id));

    setLoading(true);
    await dispatch(createProduct(formData));
    setLoading(false);
  };

  const product = useSelector((state) => state.allProducts.products);

  useEffect(() => {
    if (loading === false) {
      // setCatID(0)
      setColors([]);
      setImages([]);
      setProdName("");
      setProdDesc("");
      setProdPriceBefore("السعر قبل الخصم");
      setProdPriceAfter("السعر بعد الخصم");
      setQty("الكمية المتاحة");
      setBrandID(0);
      setSelectedSubID([]);
      setTimeout(() => setLoading(true), 1500);

      if (product?.status === 201) {
        notify("تم الاضافة بنجاح", "success");
      } else if (product) {
        notify("هناك مشكله", "error");
      }
    }
  }, [loading, product]);
    return [
      onChangeProdDesc,
      onChangeQty,
      onChangeColor,
      onChangeProdPriceAfter,
      onChangePriceBefore,
      onChangeProdName,
      showColor,
      category,
      brand,
      prodPriceAfter,
      images,
      setImages,
      onSelect,
      options,
      handleChangeComplete,
      removeColor,
      onSelectCategory,
      handleSubmit,
      onSelectBrand,
      colors,
      prodPriceBefore,
      qty,
      prodDesc,
      prodName,
    ];

};
export default AdminAddProductHook;
