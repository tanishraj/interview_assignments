import React from "react";
import { withRouter } from "react-router-dom";

import "./play-list-item.style.scss";

const playListItem = (props) => {
  return (
    <div
      className="item-container"
      onClick={() => props.history.push("songDetails", { details: props.item })}
    >
      <div className="image">
        <span className="fa fa-picture-o" />
      </div>
      <div className="details">
        <div className="track-name">{props.item.trackName}</div>
        <div className="more-info">
          <span className="artist-name">{props.item.artistName}</span>
          <span className="time">{props.item.trackCount}m</span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(playListItem);
