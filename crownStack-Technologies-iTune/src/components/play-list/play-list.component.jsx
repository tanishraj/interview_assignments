import React, { Component } from "react";
import AppLoader from "../app-loader/app-loader.component";
import PlayListItem from "../play-list-item/play-list-item.component";
import { playList } from "../../constant/play-list-api";

import "./play-list.style.scss";

class PlayList extends Component {
  constructor() {
    super();
    this.state = {
      showLoader: false,
      playList: {},
    };
  }

  componentWillMount() {
    this.setState({ showLoader: true, playList: playList.results });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showLoader: false });
    }, 3000);
  }

  render() {
    return (
      <div className="play-list">
        {this.state.showLoader ? <AppLoader /> : ""}
        <ul>
          {this.state.playList.map((item) => {
            return <PlayListItem key={item.trackId} item={item} />;
          })}
        </ul>
      </div>
    );
  }
}

export default PlayList;
