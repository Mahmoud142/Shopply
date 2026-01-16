import React from "react";
import { Row } from "react-bootstrap";
import SidebarSearchHook from "../../hook/search/sidebar-search-hook";
const SideFilter = () => {
  const [category, brand, clickCategory, clickBrand, priceFrom, priceTo] =
    SidebarSearchHook();
  let localFrom = localStorage.getItem("priceFrom");
  let localTo = localStorage.getItem("priceTo");
  return (
    <div className="mt-3">
      <Row>
        <div className="d-flex flex-column mt-2">
          <div className="filter-title">الفئة</div>
          <div className="d-flex mt-3">
            <input type="checkbox" value="0" onChange={clickCategory} />
            <div className="filter-sub me-2 ">الكل</div>
          </div>
          {category ? (
            category.map((cat) => (
              <div key={cat._id} className="d-flex mt-3">
                <input
                  type="checkbox"
                  value={cat._id}
                  onChange={clickCategory}
                />
                <div className="filter-sub me-2 ">{cat.name}</div>
              </div>
            ))
          ) : (
            <h5>لا توجد فئات</h5>
          )}
        </div>

        <div className="d-flex flex-column mt-2">
          <div className="filter-title mt-3">الماركة</div>
          <div className="d-flex mt-3">
            <input type="checkbox" value="0" onChange={clickBrand} />
            <div className="filter-sub me-2 ">الكل</div>
          </div>
          {brand ? (
            brand.map((br) => (
              <div key={br._id} className="d-flex mt-3">
                <input type="checkbox" value={br._id} onChange={clickBrand} />
                <div className="filter-sub me-2 ">{br.name}</div>
              </div>
            ))
          ) : (
            <h5>لا توجد ماركات</h5>
          )}
        </div>

        <div className="filter-title my-3">السعر</div>
        <div className="d-flex">
          <p className="filter-sub my-2">من:</p>
          <input
            value={localFrom}
            onChange={priceFrom}
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
          />
        </div>
        <div className="d-flex">
          <p className="filter-sub my-2">الي:</p>
          <input
            onChange={priceTo}
            value={localTo}
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
          />
        </div>
      </Row>
    </div>
  );
};

export default SideFilter;
