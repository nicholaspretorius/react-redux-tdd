import * as constants from "./constants";

export function setBalance(balance) {
  return {
    type: constants.SET_BALANCE,
    balance
  };
}

export function deposit(deposit) {
  return {
    type: constants.DEPOSIT,
    deposit
  };
}

export function withdraw(withdrawal) {
  return {
    type: constants.WITHDRAW,
    withdrawal
  };
}
