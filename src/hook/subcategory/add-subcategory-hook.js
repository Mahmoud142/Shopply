import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSubCategory } from "../../redux/actions/subcategoryAction";
import notify from "../../hook/useNotifaction";
import { getAllCategory } from "../../redux/actions/categoryAction";

const AddSubCategoryHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!navigator.onLine) {
      notify("You are offline", "error");
      return;
    }
    dispatch(getAllCategory());
  }, [dispatch]);
  const [id, setID] = useState("0");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  //get last catgeory state from redux
  const category = useSelector((state) => state.allCategory.category);

  //get last subcatgeory state from redux
  const subcategory = useSelector((state) => state.allSubCategory.subcategory);

  const onChangeName = (e) => {
    e.persist();
    setName(e.target.value);
  };

  const onChangeCategoryId = (e) => {
    e.persist();
    setID(e.target.value);
  };

  // save data function
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!navigator.onLine) {
      notify("Internet connection error", "warn");
      return;
    }
    if (id === "0") {
      notify("Please select a main category", "warn");
      return;
    }
    if (name === "") {
      notify("Please enter category name", "warn");
      return;
    }
    setLoading(true);
    await dispatch(createSubCategory({ name, category: id }));
    setLoading(false);
    setID("0");
  };
  useEffect(() => {
    if (loading === false) {
      setName("");
      setID("0");       
      if (subcategory?.status === 201) {
        notify("Added successfully", "success");
      } else if (
        subcategory === "Error Error: Request failed with status code 400"
      ) {
        notify("This name already exists, please choose another name", "warn");
      } else {
        notify("There was a problem during addition", "warn");
      }
      setLoading(true);
    }
  }, [loading, subcategory]);

  return [
    id,
    name,
    loading,
    category,
    subcategory,
    onChangeCategoryId,
    handleSubmit,
    onChangeName,
  ];
};
export default AddSubCategoryHook;
