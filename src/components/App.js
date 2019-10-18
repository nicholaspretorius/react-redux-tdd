import React, { Component } from "react";

import Wallet from "./Wallet";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <h3>Loot Check</h3>
        <Wallet />
      </div>
    );
  }
}

export default App;
