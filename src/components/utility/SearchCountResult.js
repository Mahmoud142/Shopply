import React, { useState } from "react";
import UnopDropdown from "unop-react-dropdown";

const SearchCountResult = ({ title, onClick }) => {
  const handler = () => {};
  const [activeSort, setActiveSort] = useState("Default Sorting");

  const clickMe = (key) => {
    setActiveSort(key);
    localStorage.setItem("sortType", key);
    onClick();
  };
  
  return (
    <div className="flex items-center justify-between py-6 px-3 border-b border-borderColor/40 mb-6 flex-wrap gap-4">
      
      {/* Results Counter */}
      <h3 className="font-sans font-bold text-sm text-secondaryText uppercase tracking-wider m-0">
        {title}
      </h3>

      {/* Sorting Dropdown */}
      <div className="search-count-text flex items-center">
        <UnopDropdown
          onAppear={handler}
          onDisappearStart={handler}
          trigger={
            <button className="flex items-center gap-2 px-4.5 py-2 bg-white border border-borderColor/60 rounded-full text-xs font-bold text-primaryText hover:border-primaryAccent hover:shadow-sm transition-all duration-300 cursor-pointer">
              <svg className="w-3.5 h-3.5 text-secondaryText" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v10.5"></path>
              </svg>
              <span>Sort: {activeSort}</span>
              <svg className="w-3 h-3 text-secondaryText ml-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
              </svg>
            </button>
          }
          delay={0}
          align="RIGHT"
          hover
        >
          <div className="mt-2 w-48 bg-white border border-borderColor/50 rounded-2xl shadow-premium-hover py-1.5 z-50 overflow-hidden transform origin-top-right transition-all">
            {[
              "Default Sorting",
              "Best Selling",
              "Highest Rated",
              "Price: Low to High",
              "Price: High to Low"
            ].map((option) => (
              <button
                key={option}
                onClick={() => clickMe(option)}
                className={`w-full text-left px-4.5 py-2.5 text-xs font-semibold border-none cursor-pointer transition-colors ${
                  activeSort === option 
                    ? "bg-brandBg text-primaryAccent" 
                    : "bg-transparent text-secondaryText hover:text-primaryText hover:bg-brandBg"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </UnopDropdown>
      </div>

    </div>
  );
};

export default SearchCountResult;
