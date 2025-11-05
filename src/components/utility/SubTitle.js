import React from "react";

const Subtitle = ({ title, btntitle }) => {
  return (
    <div className="d-flex justify-content-between pt-4">
      <div className="sub-title">{title}</div>
      {btntitle ? <div className="shopping-now">{btntitle}</div> : null}
    </div>
  );
};

export default Subtitle;
