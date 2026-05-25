import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, onPress }) => {
  const handlePageClick = (data) => {
    onPress(data.selected + 1);
  };
  
  return (
    <div className="flex items-center justify-center py-10 select-none">
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <span className="flex items-center gap-1">
            <span>Next</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
            </svg>
          </span>
        }
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel={
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
            </svg>
            <span>Previous</span>
          </span>
        }
        containerClassName="flex items-center gap-1.5 list-unstyled m-0 p-0"
        
        pageClassName="inline-block"
        pageLinkClassName="no-underline flex items-center justify-center min-w-[38px] h-[38px] px-3 rounded-xl border border-borderColor/60 text-xs font-bold text-secondaryText bg-white hover:text-primaryText hover:border-primaryText hover:shadow-sm transition-all duration-300 cursor-pointer"
        
        previousClassName="inline-block"
        previousLinkClassName="no-underline flex items-center justify-center h-[38px] px-3.5 rounded-xl border border-borderColor/60 text-xs font-bold text-secondaryText bg-white hover:text-primaryText hover:border-primaryText hover:shadow-sm transition-all duration-300 cursor-pointer"
        
        nextClassName="inline-block"
        nextLinkClassName="no-underline flex items-center justify-center h-[38px] px-3.5 rounded-xl border border-borderColor/60 text-xs font-bold text-secondaryText bg-white hover:text-primaryText hover:border-primaryText hover:shadow-sm transition-all duration-300 cursor-pointer"
        
        breakClassName="inline-block"
        breakLinkClassName="no-underline flex items-center justify-center min-w-[38px] h-[38px] rounded-xl text-xs font-bold text-secondaryText cursor-default"
        
        activeClassName="active-page"
        activeLinkClassName="!bg-primaryText !border-primaryText !text-white hover:!text-white hover:!bg-primaryText hover:!border-primaryText shadow-sm"
      />
    </div>
  );
};

export default Pagination;
