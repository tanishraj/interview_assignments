import React from "react";
import PlayList from "../../components/play-list/play-list.component";

import "./home-page.style.scss";

const HomePage = () => {
  return (
    <div className="home-page-wrapper">
      <PlayList />
    </div>
  );
};

export default HomePage;
