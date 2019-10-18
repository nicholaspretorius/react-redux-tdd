import * as constants from "./constants";

export function setBalance(balance) {
  return {
    type: constants.SET_BALANCE,
    balance
  };
}
