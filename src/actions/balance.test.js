import * as constants from "./constants";
import * as actions from "./balance";

describe("balance", () => {
  it("creates an action to set the balance", () => {
    const balance = 0;
    const action = { type: constants.SET_BALANCE, balance };

    expect(actions.setBalance(balance)).toEqual(action);
  });

  it("creates an action to deposit into the balance", () => {
    const deposit = 10;
    const action = { type: constants.DEPOSIT, deposit };

    expect(actions.deposit(deposit)).toEqual(action);
  });

  it("creates an action to withdraw from the balance", () => {
    const withdrawal = 10;
    const action = { type: constants.WITHDRAW, withdrawal };

    expect(actions.withdraw(withdrawal)).toEqual(action);
  });
});
