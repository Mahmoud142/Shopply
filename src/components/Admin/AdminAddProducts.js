import Select from "react-select";
import ImageUploading from "react-images-uploading";
import AdminAddProductHook from "../../hook/product/add-product-hook";
import { CompactPicker } from "react-color";
import { ToastContainer } from "react-toastify";

const AdminAddProducts = () => {
  const [
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
  ] = AdminAddProductHook();

  const maxNumber = 4;
  const onChange = (imageList) => {
    setImages(imageList);
  };

  return (
    <div className="flex flex-col gap-6 text-left pb-12 select-none">
      
      {/* Title */}
      <h2 className="font-sans text-2xl font-extrabold text-primaryText tracking-tight m-0 mb-2">
        Add New Product
      </h2>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: General Info Card (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-5">
          <div className="bg-white rounded-premium border border-borderColor/60 shadow-premium p-6 flex flex-col gap-4">
            <span className="text-[11px] font-bold text-primaryAccent uppercase tracking-widest bg-brandBg px-3 py-1 rounded-full border border-borderColor/40 self-start mb-2">
              Product Information
            </span>

            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-secondaryText uppercase tracking-wider">Product Name</label>
              <input
                value={prodName}
                onChange={onChangeProdName}
                type="text"
                className="w-full h-11 px-4 bg-brandBg border border-borderColor rounded-xl text-sm font-medium text-primaryText outline-none focus:border-primaryAccent focus:ring-4 focus:ring-primaryAccent/10 transition-all"
                placeholder="e.g. Minimalist Matte Black Headphones"
              />
            </div>

            {/* Description */}
            <div className="flex flex-col gap-1.5 mt-2">
              <label className="text-xs font-bold text-secondaryText uppercase tracking-wider">Product Description</label>
              <textarea
                className="w-full p-4 bg-brandBg border border-borderColor rounded-xl text-sm font-medium text-primaryText outline-none focus:border-primaryAccent focus:ring-4 focus:ring-primaryAccent/10 transition-all"
                rows="5"
                placeholder="Describe the product features, specifications, and layout..."
                value={prodDesc}
                onChange={onChangeProdDesc}
              />
            </div>

            {/* Classification (Category, Brand, Subcategory) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              
              {/* Category */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-secondaryText uppercase tracking-wider">Main Category</label>
                <div className="relative">
                  <select
                    name="cat"
                    onChange={onSelectCategory}
                    className="w-full h-11 pl-4 pr-10 bg-brandBg border border-borderColor rounded-xl text-sm font-semibold text-primaryText outline-none appearance-none focus:border-primaryAccent focus:ring-4 focus:ring-primaryAccent/10 transition-all cursor-pointer"
                  >
                    <option value="0">Select Category</option>
                    {category?.data
                      ? category.data.map((item, index) => (
                          <option key={index} value={item._id}>
                            {item.name}
                          </option>
                        ))
                      : null}
                  </select>
                  <svg className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-secondaryText pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                  </svg>
                </div>
              </div>

              {/* Brand */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-secondaryText uppercase tracking-wider">Select Brand</label>
                <div className="relative">
                  <select
                    name="brand"
                    onChange={onSelectBrand}
                    className="w-full h-11 pl-4 pr-10 bg-brandBg border border-borderColor rounded-xl text-sm font-semibold text-primaryText outline-none appearance-none focus:border-primaryAccent focus:ring-4 focus:ring-primaryAccent/10 transition-all cursor-pointer"
                  >
                    <option value="0">Select Brand</option>
                    {brand?.data
                      ? brand.data.map((item, index) => (
                          <option key={index} value={item._id}>
                            {item.name}
                          </option>
                        ))
                      : null}
                  </select>
                  <svg className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-secondaryText pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                  </svg>
                </div>
              </div>

            </div>

            {/* Subcategory */}
            <div className="flex flex-col gap-1.5 mt-3">
              <label className="text-xs font-bold text-secondaryText uppercase tracking-wider">Subcategory</label>
              <Select
                placeholder="Select Subcategories..."
                options={options}
                onChange={onSelect}
                isMulti
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    borderRadius: "12px",
                    borderColor: "#E5E7EB",
                    backgroundColor: "#F8F7F4",
                    boxShadow: "none",
                    minHeight: "44px",
                    fontWeight: "600",
                    fontSize: "13px",
                    "&:hover": {
                      borderColor: "#2563EB"
                    }
                  })
                }}
              />
            </div>

            {/* Colors Swatches Creator */}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-borderColor/45">
              <label className="text-xs font-bold text-secondaryText uppercase tracking-wider">Available Colors</label>
              <div className="flex items-center gap-3.5 flex-wrap">
                {colors.length >= 1 && colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => removeColor(color)}
                    className="w-8 h-8 rounded-full border border-borderColor/50 cursor-pointer transition-all duration-200 transform hover:scale-110 flex items-center justify-center shadow-sm relative group"
                    style={{ backgroundColor: color }}
                    title="Click to remove color"
                  >
                    <span className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center rounded-full bg-black/40 text-white font-extrabold text-[10px] transition-all">
                      ✕
                    </span>
                  </button>
                ))}

                {/* Add Color Selector Trigger */}
                <button
                  onClick={onChangeColor}
                  className="w-8 h-8 rounded-full bg-brandBg border border-borderColor hover:border-primaryAccent flex items-center justify-center text-secondaryText hover:text-primaryAccent transition-all cursor-pointer shadow-sm"
                  title="Add custom color swatch"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                  </svg>
                </button>

                {showColor === true && (
                  <div className="absolute mt-12 z-50 shadow-premium border border-borderColor/40 rounded-2xl overflow-hidden animate-fade-in">
                    <CompactPicker onChangeComplete={handleChangeComplete} />
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Media Assets & Inventory (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Images Upload Card */}
          <div className="bg-white rounded-premium border border-borderColor/60 shadow-premium p-6 flex flex-col gap-4">
            <span className="text-[11px] font-bold text-primaryAccent uppercase tracking-widest bg-brandBg px-3 py-1 rounded-full border border-borderColor/40 self-start">
              Media Assets
            </span>

            <div className="image-uploader-container">
              <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
              >
                {({ imageList, onImageUpload, onImageRemove }) => (
                  <div className="flex flex-col gap-3">
                    
                    {/* Primary Trigger Area */}
                    <div 
                      onClick={onImageUpload}
                      className="w-full h-36 border-2 dashed border-borderColor/70 rounded-premium flex flex-col items-center justify-center gap-2 cursor-pointer bg-brandBg hover:bg-primaryAccent/5 hover:border-primaryAccent/50 transition-all group"
                    >
                      <svg className="w-8 h-8 text-secondaryText/60 group-hover:text-primaryAccent transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                      </svg>
                      <span className="text-xs font-bold text-secondaryText group-hover:text-primaryAccent transition-colors">
                        Upload Product Images
                      </span>
                      <span className="text-[10px] text-secondaryText/50 font-semibold">Max 4 images</span>
                    </div>

                    {/* Previews grid */}
                    {imageList.length > 0 && (
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        {imageList.map((image, index) => (
                          <div key={index} className="aspect-video rounded-xl overflow-hidden border border-borderColor bg-brandBg relative group shadow-sm">
                            <img
                              src={image.data_url}
                              alt=""
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                            />
                            {/* Prominent floating close button at top-right */}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onImageRemove(index);
                              }}
                              className="absolute top-2.5 right-2.5 z-20 w-9 h-9 bg-white/95 hover:bg-red-500 hover:text-white text-primaryText rounded-full flex items-center justify-center shadow-md transition-all duration-200 transform hover:scale-108 active:scale-95 border-none cursor-pointer"
                              title="Delete Image"
                            >
                              <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="3.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                  </div>
                )}
              </ImageUploading>
            </div>
          </div>

          {/* Pricing & Inventory Card */}
          <div className="bg-white rounded-premium border border-borderColor/60 shadow-premium p-6 flex flex-col gap-4">
            <span className="text-[11px] font-bold text-primaryAccent uppercase tracking-widest bg-brandBg px-3 py-1 rounded-full border border-borderColor/40 self-start">
              Pricing & Stock
            </span>

            {/* Price Before */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-secondaryText uppercase tracking-wider">Price Before Discount</label>
              <div className="relative flex items-center">
                <input
                  type="number"
                  className="w-full h-11 pl-4 pr-12 bg-brandBg border border-borderColor rounded-xl text-sm font-semibold text-primaryText outline-none focus:border-primaryAccent focus:ring-4 focus:ring-primaryAccent/10 transition-all"
                  placeholder="0.00"
                  value={prodPriceBefore}
                  onChange={onChangePriceBefore}
                />
                <span className="absolute right-4 text-xs font-bold text-secondaryText uppercase tracking-wider">EGP</span>
              </div>
            </div>

            {/* Price After */}
            <div className="flex flex-col gap-1.5 mt-1">
              <label className="text-xs font-bold text-secondaryText uppercase tracking-wider">Price After Discount</label>
              <div className="relative flex items-center">
                <input
                  type="number"
                  className="w-full h-11 pl-4 pr-12 bg-brandBg border border-borderColor rounded-xl text-sm font-semibold text-primaryText outline-none focus:border-primaryAccent focus:ring-4 focus:ring-primaryAccent/10 transition-all"
                  placeholder="0.00"
                  value={prodPriceAfter}
                  onChange={onChangePriceAfter}
                />
                <span className="absolute right-4 text-xs font-bold text-secondaryText uppercase tracking-wider">EGP</span>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex flex-col gap-1.5 mt-1">
              <label className="text-xs font-bold text-secondaryText uppercase tracking-wider">Available Quantity</label>
              <input
                type="number"
                className="w-full h-11 px-4 bg-brandBg border border-borderColor rounded-xl text-sm font-semibold text-primaryText outline-none focus:border-primaryAccent focus:ring-4 focus:ring-primaryAccent/10 transition-all"
                placeholder="Available stock amount..."
                value={qty}
                onChange={onChangeQty}
              />
            </div>
          </div>

          {/* Action trigger button */}
          <button
            onClick={handleSubmit}
            className="w-full h-13 bg-primaryText hover:bg-primaryAccent text-white text-sm font-extrabold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 border-none cursor-pointer flex items-center justify-center gap-2"
          >
            <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
            </svg>
            Publish Product
          </button>

        </div>

      </div>

      <ToastContainer />
    </div>
  );
};

export default AdminAddProducts;
