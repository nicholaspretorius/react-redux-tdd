import React, { Component } from "react";
import { connect } from "react-redux";

import { handleFetchBitcoin } from "./../actions/bitcoin";

export class Loot extends Component {
  state = {};

  componentDidMount() {
    this.props.handleFetchBitcoin();
  }

  computeBitcoin() {
    const { balance, bitcoin } = this.props;

    if (Object.keys(bitcoin).length === 0) return "";

    return balance / parseInt(bitcoin.bpi.USD.rate.replace(",", ""), 10);
  }

  render() {
    return <div className="bitcoin-balance">Bitcoin balance: {this.computeBitcoin()}</div>;
  }
}

export default connect(
  state => state,
  { handleFetchBitcoin }
)(Loot);
