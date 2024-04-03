import React from "react";

import "./song-details.style.scss";

const SongDetails = (props) => {
  return (
    <div className="song-details">
      <div className="image">
        <span className="fa fa-picture-o" />
      </div>
      <ul>
        <li>
          <strong>Collection Name:</strong>{" "}
          {props.location.state.details.collectionName}
        </li>
        <li>
          <strong>Track Name:</strong> {props.location.state.details.trackName}
        </li>
        <li>
          <strong>Artist Name:</strong>{" "}
          {props.location.state.details.artistName}
        </li>
        <li>
          <strong>Collection Price:</strong> $
          {props.location.state.details.collectionPrice}
        </li>
        <li>
          <strong>Genre:</strong>{" "}
          {props.location.state.details.primaryGenreName}
        </li>
      </ul>
    </div>
  );
};

export default SongDetails;
