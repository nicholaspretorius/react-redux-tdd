import React, { Component } from "react";
import { connect } from "react-redux";

export class Wallet extends Component {
  state = {};
  render() {
    const { balance } = this.props;

    return <div className="balance">Wallet Balance: {balance}</div>;
  }
}

function mapStateToProps(state) {
  return {
    balance: state
  };
}

export default connect(mapStateToProps)(Wallet);
