import { useState, useEffect } from "react";
import { getOneCategory } from "../../redux/actions/subcategoryAction";
import {
  getOneProduct,
} from "../../redux/actions/productAction";
import notify from "../useNotifaction";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { getAllBrand } from "../../redux/actions/brandAction";
import { updateProduct } from "../../redux/actions/productAction";

const AdminEditProductHook = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const run = async () => {
      await dispatch(getOneProduct(id));
      await dispatch(getAllCategory());
      await dispatch(getAllBrand());
    };
    run();
  }, [dispatch, id]);

  //get one product details
  const item = useSelector((state) => state.allProducts.oneProduct);
  //get last category state from redux
  const category = useSelector((state) => state.allCategory.category);
  //get last brand state from redux
  const brand = useSelector((state) => state.allBrand.brand);

  //get last sub cat state from redux
  const subCat = useSelector((state) => state.allSubCategory.subCategory);

  //values images products
  const [images, setImages] = useState([]);
  //values state
  const [prodName, setProdName] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [priceBefore, setPriceBefore] = useState("السعر قبل الخصم");
  const [priceAfter, setPriceAfter] = useState("السعر بعد الخصم");
  const [qty, setQty] = useState("الكمية المتاحة");
  const [catID, setCatID] = useState("0");
  const [brandID, setBrandID] = useState("0");
  const [selectedSubID, setSelectedSubID] = useState([]);
  const [loading, setLoading] = useState(true);

  //to show hide color picker
  const [showColor, setShowColor] = useState(false);
  //to store all picked colors
  const [colors, setColors] = useState([]);

  const [options, setOptions] = useState([]);

  const onSelect = (selectedList) => {
    setSelectedSubID(selectedList);
  };
  const onRemove = (selectedList) => {
    setSelectedSubID(selectedList);
  };

  useEffect(() => {
    if (item.data) {
      // Convert image URLs to ImageUploading format
      const formattedImages = item.data.images.map((url) => ({
        data_url: url,
      }));
      setImages(formattedImages);
      setProdName(item.data.title);
      setProdDescription(item.data.description);
      setPriceBefore(item.data.price);
      setQty(item.data.quantity);
      setCatID(item.data.category);
      setBrandID(item.data.brand);
      setColors(item.data.availableColors);
    }
  }, [item]);

  //to change product name
  const onChangeProdName = (event) => {
    event.persist();
    setProdName(event.target.value);
  };
  //to change description
  const onChangeDescription = (event) => {
    event.persist();
    setProdDescription(event.target.value);
  };
  //to change price before discount
  const onChangePriceBefore = (event) => {
    event.persist();
    setPriceBefore(event.target.value);
  };
  //to change price after discount
  const onChangePriceAfter = (event) => {
    event.persist();
    setPriceAfter(event.target.value);
  };
  //to change quantity
  const onChangeQty = (event) => {
    event.persist();
    setQty(event.target.value);
  };
  const onChangeColor = (event) => {
    event.persist();
    setShowColor(!showColor);
  };

  //when choose new color
  const handleChangeComplete = (color) => {
    setColors([...colors, color.hex]);
    setShowColor(!showColor);
  };
  const removeColor = (color) => {
    const newColor = colors.filter((e) => e !== color);
    setColors(newColor);
  };

  //when select category store id
  const onSelectCategory = async (e) => {
    setCatID(e.target.value);
  };
  useEffect(() => {
    if (catID !== "0") {
      const run = async () => {
        await dispatch(getOneCategory(catID));
      };
      run();
    }
  }, [catID, dispatch]);

  useEffect(() => {
    if (subCat) {
      setOptions(subCat.data);
    }
  }, [subCat]);

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

  //convert url to file
  const convertURLtoFile = async (url) => {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.blob();
    const ext = url.split(".").pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], Math.random(), metadata);
  };

  //to save data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      catID === "0" ||
      prodName === "" ||
      prodDescription === "" ||
      images.length <= 0 ||
      priceBefore <= 0
    ) {
      notify("من فضلك اكمل البيانات", "warn");
      return;
    }

    let imgCover;
    let itemImages = [];

    // Check if first image is a URL (starts with http) or base64 data
    const isUrl = images[0]?.data_url?.startsWith('http');

    if (isUrl) {
      // Existing images (URLs from server)
      imgCover = await convertURLtoFile(images[0].data_url);
      
      // Convert all existing URLs to files
      for (let index = 0; index < images.length; index++) {
        const file = await convertURLtoFile(images[index].data_url);
        itemImages.push(file);
      }
    } else {
      // New images uploaded (base64 data)
      imgCover = dataURLtoFile(images[0].data_url, Math.random() + ".png");
      if (!imgCover) {
        notify("حدث خطأ في معالجة الصور", "error");
        return;
      }

      // Convert all images
      itemImages = images
        .map((img) => dataURLtoFile(img.data_url, Math.random() + ".png"))
        .filter((img) => img !== null);

      if (itemImages.length === 0) {
        notify("حدث خطأ في معالجة الصور", "error");
        return;
      }
    }

    const formData = new FormData();
    formData.append("title", prodName);
    formData.append("description", prodDescription);
    formData.append("quantity", qty);
    formData.append("price", priceBefore);

    formData.append("category", catID);
    formData.append("brand", brandID);

    formData.append("imageCover", imgCover);
    itemImages.forEach((item) => formData.append("images", item));

    colors.forEach((color) => formData.append("availableColors", color));
    selectedSubID.forEach((item) => formData.append("subcategory", item._id));

    setLoading(true);
    await dispatch(updateProduct(id, formData));
    setLoading(false);
  };

  //get create message
  const product = useSelector((state) => state.allProducts.updateProduct);

  useEffect(() => {
    if (loading === false) {
      setCatID("0");
      setColors([]);
      setImages([]);
      setProdName("");
      setProdDescription("");
      setPriceBefore("السعر قبل الخصم");
      setPriceAfter("السعر بعد الخصم");
      setQty("الكمية المتاحة");
      setBrandID("0");
      setSelectedSubID([]);
      setTimeout(() => setLoading(true), 1500);

      if (product) {
        if (product.status === 200) {
          notify("تم التعديل بنجاح", "success");
        } else {
          notify("هناك مشكله", "error");
        }
      }
    }
  }, [loading, product]);

  return [
    catID,
    brandID,
    onChangeDescription,
    onChangeQty,
    onChangeColor,
    onChangePriceAfter,
    onChangePriceBefore,
    onChangeProdName,
    showColor,
    category,
    brand,
    priceAfter,
    images,
    setImages,
    onSelect,
    onRemove,
    options,
    handleChangeComplete,
    removeColor,
    onSelectCategory,
    handleSubmit,
    onSelectBrand,
    colors,
    priceBefore,
    qty,
    prodDescription,
    prodName,
  ];
};

export default AdminEditProductHook;
