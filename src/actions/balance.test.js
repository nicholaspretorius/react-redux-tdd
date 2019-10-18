import * as constants from "./constants";
import * as actions from "./balance";

describe("balance", () => {
  it("creates an action to set the balance", () => {
    const balance = 0;
    const action = { type: constants.SET_BALANCE, balance };

    expect(actions.setBalance(balance)).toEqual(action);
  });
});
