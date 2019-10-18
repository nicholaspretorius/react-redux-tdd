import React, { Component } from "react";
import { connect } from "react-redux";
import { deposit, withdraw } from "./../actions/balance";

export class Wallet extends Component {
  state = {
    amount: 0
  };

  handleDeposit = e => {
    this.props.deposit(this.state.amount);
  };

  handleWithdrawal = () => {
    this.props.withdraw(this.state.amount);
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
          <label htmlFor="amount">Enter amount</label>
          <input
            type="text"
            name="amount"
            className="wallet-input"
            onChange={({ target }) => this.setState({ amount: parseInt(target.value, 10) })}
          />
          <button onClick={this.handleDeposit} className="btn-deposit">
            Deposit
          </button>
          <button className="btn-withdraw" onClick={this.handleWithdrawal}>
            Withdraw
          </button>
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

export default connect(
  mapStateToProps,
  { deposit, withdraw }
)(Wallet);
