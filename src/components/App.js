import React, { Component } from "react";

import SearchBar from "./Search-bar";
import SearchResult from "./SearchResult";
import AllUsers from "./AllUsers";
import OnlineUsers from "./OnlineUsers";
import OfflineUsers from "./OfflineUsers";
import DisplayUsers from "./DisplayUsers";

class App extends Component {
  render() {
    return (
      <div>
        <div className="main">
          <main className="container">
            <header>
              <div id="title">
                <h1>TwitchTV Streamers</h1>
              </div>
              <SearchBar />
            </header>
            <SearchResult />
            <div className="buttons main-flex-item">
              <AllUsers />
              <OnlineUsers />
              <OfflineUsers />
            </div>

            <DisplayUsers />
          </main>
          <footer>Written and coded by OxiBo, 2019</footer>
        </div>
      </div>
    );
  }
}

export default App;
