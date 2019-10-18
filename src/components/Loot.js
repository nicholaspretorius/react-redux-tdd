import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchBitcoin } from "./../actions/bitcoin";

export class Loot extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchBitcoin();
  }

  render() {
    return <div>Loot</div>;
  }
}

export default connect(
  state => state,
  { fetchBitcoin }
)(Loot);
