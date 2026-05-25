import React from "react";
import SidebarSearchHook from "../../hook/search/sidebar-search-hook";

const SideFilter = () => {
  const [category, brand, clickCategory, clickBrand, priceFrom, priceTo] =
    SidebarSearchHook();
  let localFrom = localStorage.getItem("priceFrom");
  let localTo = localStorage.getItem("priceTo");

  return (
    <div className="flex flex-col gap-6 text-left pr-4 md:pr-6 border-r border-borderColor/40 min-h-[500px]">
      
      {/* Category Section */}
      <div className="flex flex-col gap-3">
        <h4 className="font-sans font-bold text-xs text-primaryText uppercase tracking-wider mb-1">
          Category
        </h4>
        <div className="flex flex-col gap-2.5">
          <label className="flex items-center gap-2.5 cursor-pointer select-none">
            <input 
              type="checkbox" 
              value="0" 
              onChange={clickCategory}
              className="w-4 h-4 rounded border-borderColor/60 text-primaryAccent focus:ring-primaryAccent/20 transition-all cursor-pointer"
            />
            <span className="text-xs font-semibold text-secondaryText hover:text-primaryText transition-colors">
              All Categories
            </span>
          </label>
          
          {category ? (
            category.map((cat) => (
              <label key={cat._id} className="flex items-center gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  value={cat._id}
                  onChange={clickCategory}
                  className="w-4 h-4 rounded border-borderColor/60 text-primaryAccent focus:ring-primaryAccent/20 transition-all cursor-pointer"
                />
                <span className="text-xs font-semibold text-secondaryText hover:text-primaryText transition-colors">
                  {cat.name}
                </span>
              </label>
            ))
          ) : (
            <p className="text-xs font-semibold text-secondaryText/50 m-0">No categories</p>
          )}
        </div>
      </div>

      <div className="border-b border-borderColor/40"></div>

      {/* Brand Section */}
      <div className="flex flex-col gap-3">
        <h4 className="font-sans font-bold text-xs text-primaryText uppercase tracking-wider mb-1">
          Brand
        </h4>
        <div className="flex flex-col gap-2.5">
          <label className="flex items-center gap-2.5 cursor-pointer select-none">
            <input 
              type="checkbox" 
              value="0" 
              onChange={clickBrand}
              className="w-4 h-4 rounded border-borderColor/60 text-primaryAccent focus:ring-primaryAccent/20 transition-all cursor-pointer"
            />
            <span className="text-xs font-semibold text-secondaryText hover:text-primaryText transition-colors">
              All Brands
            </span>
          </label>
          
          {brand ? (
            brand.map((br) => (
              <label key={br._id} className="flex items-center gap-2.5 cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  value={br._id} 
                  onChange={clickBrand}
                  className="w-4 h-4 rounded border-borderColor/60 text-primaryAccent focus:ring-primaryAccent/20 transition-all cursor-pointer"
                />
                <span className="text-xs font-semibold text-secondaryText hover:text-primaryText transition-colors">
                  {br.name}
                </span>
              </label>
            ))
          ) : (
            <p className="text-xs font-semibold text-secondaryText/50 m-0">No brands</p>
          )}
        </div>
      </div>

      <div className="border-b border-borderColor/40"></div>

      {/* Price Section */}
      <div className="flex flex-col gap-3">
        <h4 className="font-sans font-bold text-xs text-primaryText uppercase tracking-wider mb-1">
          Price Range
        </h4>
        <div className="flex flex-col gap-3">
          
          <div className="flex items-center justify-between gap-2.5">
            <span className="text-[11px] font-bold text-secondaryText uppercase tracking-widest min-w-[36px]">From</span>
            <input
              value={localFrom || ""}
              onChange={priceFrom}
              className="w-full px-3 py-1.5 bg-white border border-borderColor/60 rounded-xl text-xs font-bold text-primaryText outline-none focus:ring-4 focus:ring-primaryAccent/10 focus:border-primaryAccent transition-all text-center"
              type="number"
              placeholder="0"
            />
          </div>

          <div className="flex items-center justify-between gap-2.5">
            <span className="text-[11px] font-bold text-secondaryText uppercase tracking-widest min-w-[36px]">To</span>
            <input
              onChange={priceTo}
              value={localTo || ""}
              className="w-full px-3 py-1.5 bg-white border border-borderColor/60 rounded-xl text-xs font-bold text-primaryText outline-none focus:ring-4 focus:ring-primaryAccent/10 focus:border-primaryAccent transition-all text-center"
              type="number"
              placeholder="MAX"
            />
          </div>

        </div>
      </div>

    </div>
  );
};

export default SideFilter;
