import React from "react";
import { Link } from "react-router-dom";

const Subtitle = ({ title, btntitle, pathText }) => {
  return (
    <div className="flex items-end justify-between pt-10 pb-2">
      <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-primaryText tracking-tight m-0">
        {title}
      </h2>
      {btntitle ? (
        <Link to={`${pathText}`} className="no-underline group">
          <span className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-secondaryText hover:text-primaryText border border-borderColor hover:border-primaryText rounded-full transition-all duration-300 hover:shadow-sm">
            {btntitle}
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      ) : null}
    </div>
  );
};

export default Subtitle;
