import React, { Component } from "react";
import "./app-loader.style.scss";

class AppLoader extends Component {
  render() {
    return (
      <div className="loader-container">
        <div className="loader" aria-busy="true" aria-label="Loading"></div>
        <div className="loader-label">Please wait</div>
      </div>
    );
  }
}

export default AppLoader;
