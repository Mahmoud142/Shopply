import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Select from "react-select";
import add from "../../images/add.png";
import ImageUploading from "react-images-uploading";

import { CompactPicker } from "react-color";
import { ToastContainer } from "react-toastify";
import AdminEditProductHook from "./../../hook/product/edit-product-hook";

const AdminEditProducts = () => {
  const { id } = useParams();

  const [
    CatID,
    BrandID,
    onChangeProdDesc,
    onChangeQty,
    onChangeColor,
    onChangePriceAfter,
    onChangePriceBefore,
    onChangeProdName,
    showColor,
    category,
    brand,
    prodPriceAfter,
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
    prodPriceBefore,
    qty,
    prodDesc,
    prodName,
  ] = AdminEditProductHook(id);

  const maxNumber = 4;
  const onChange = (imageList) => {
    setImages(imageList);
  };

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">
          {" "}
          تعديل المنتج - {prodName}
        </div>
        <Col sm="8">
          <div className="text-form pb-2"> صور للمنتج</div>

          <div className="image-uploader-container">
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({ imageList, onImageUpload }) => (
                <div className="image-uploader-wrapper">
                  {/* Upload box */}
                  <div className="upload-box" onClick={onImageUpload}>
                    + Add Image
                  </div>

                  {/* Preview images */}
                  {imageList.map((image, index) => (
                    <div key={index} className="uploaded-image-box">
                      <img
                        src={image.data_url}
                        alt=""
                        className="uploaded-image"
                      />
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
          </div>

          <input
            value={prodName}
            onChange={onChangeProdName}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم المنتج"
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="وصف المنتج"
            value={prodDesc}
            onChange={onChangeProdDesc}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر قبل الخصم"
            value={prodPriceBefore}
            onChange={onChangePriceBefore}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر بعد الخصم"
            value={prodPriceAfter}
            onChange={onChangePriceAfter}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="الكمية المتاحة"
            value={qty}
            onChange={onChangeQty}
          />
          <select
            name="cat"
            value={CatID}
            onChange={onSelectCategory}
            className="select input-form-area mt-3 px-2 "
          >
            <option value="0">التصنيف الرئيسي</option>
            {category.data
              ? category.data.map((item) => {
                  return <option value={item._id}>{item.name}</option>;
                })
              : null}
          </select>

          <Select
            className="mt-2 text-end"
            placeholder="التصنيف الفرعي"
            options={options}
            onChange={onSelect}
            onRemove={onRemove}
            isMulti
            style={{ color: "red" }}
          />
          <select
            name="brand"
            value={BrandID}
            onChange={onSelectBrand}
            className="select input-form-area mt-3 px-2 "
          >
            <option value="0">اختر ماركة</option>
            {brand.data
              ? brand.data.map((item) => {
                  return <option value={item._id}>{item.name}</option>;
                })
              : null}
          </select>
          <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
          <div className="mt-1 d-flex">
            {colors.length >= 1
              ? colors.map((color, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => removeColor(color)}
                      className="color ms-2 border  mt-1"
                      style={{ backgroundColor: color }}
                    ></div>
                  );
                })
              : null}

            <img
              onClick={onChangeColor}
              src={add}
              alt=""
              width="30px"
              height="35px"
              style={{ cursor: "pointer" }}
            />
            {showColor === true ? (
              <CompactPicker onChangeComplete={handleChangeComplete} />
            ) : null}
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminEditProducts;
