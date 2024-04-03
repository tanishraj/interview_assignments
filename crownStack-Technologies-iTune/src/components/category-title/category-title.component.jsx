import React from "react";

import "./category-title.style.scss";

const categoryTitle = (item) => {
  return <div className="header-title">{item.title}</div>;
};

export default categoryTitle;
