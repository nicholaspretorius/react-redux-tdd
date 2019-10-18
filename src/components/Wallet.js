import React, { Component } from "react";
import { connect } from "react-redux";

export class Wallet extends Component {
  state = {
    amount: 0
  };
  render() {
    const { balance } = this.props;

    return (
      <div className="wallet">
        <div className="balance">
          <p>Wallet Balance: {balance}</p>
        </div>
        <hr />
        <div>
          <form>
            <label htmlFor="amount">Enter amount</label>
            <input
              type="text"
              name="amount"
              className="wallet-input"
              onChange={({ target }) => this.setState({ amount: parseInt(target.value, 10) })}
            />
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    balance: state
  };
}

export default connect(mapStateToProps)(Wallet);
