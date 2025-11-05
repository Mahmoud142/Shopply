import React from "react";
import { Link } from "react-router-dom";

const Subtitle = ({ title, btntitle, path }) => {
  return (
    <div className="d-flex justify-content-between pt-4">
      <div className="sub-title">{title}</div>
      <Link to={path}>
        {btntitle ? <div className="shopping-now">{btntitle}</div> : null}
      </Link>
    </div>
  );
};

export default Subtitle;
