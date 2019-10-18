import balanceReducer from "./balance";
import * as constants from "./../actions/constants";

describe("balanceReducer", () => {
  it("sets a balance", () => {
    const balance = 10;
    expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance })).toEqual(balance);
  });

  it("sets an empty balance if action provided", () => {
    expect(balanceReducer(undefined, {})).toEqual(0);
  });

  it("deposits the amount into the balance", () => {
    const initialBalance = 5;
    const deposit = 10;
    expect(balanceReducer(initialBalance, { type: constants.DEPOSIT, deposit })).toEqual(
      initialBalance + deposit
    );
  });

  it("withdraws the amount from the balance", () => {
    const initialBalance = 20;
    const withdrawal = 10;
    expect(balanceReducer(initialBalance, { type: constants.WITHDRAW, withdrawal })).toEqual(
      initialBalance - withdrawal
    );
  });
});
