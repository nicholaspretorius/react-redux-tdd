import balanceReducer from "./balance";
import balanceReducer2 from "./balance";
import * as constants from "./../actions/constants";

describe("balanceReducer", () => {
  describe("when initialising", () => {
    const balance = 10;

    it("sets a balance", () => {
      expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance })).toEqual(balance);
    });

    xit("sets an empty balance if no action provided", () => {
      expect(balanceReducer(undefined, {})).toEqual(0);
    });

    describe("when re-initiallising", () => {
      it("reads the balance from cookies", () => {
        expect(balanceReducer2(undefined, {})).toEqual(balance);
      });
    });
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
