import * as constants from "./constants";

function fetchBitcoin(bitcoin) {
  return {
    type: constants.FETCH_BITCOIN,
    bitcoin
  };
}

export function handleFetchBitcoin() {
  return dispatch => {
    return fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => {
        return response.json();
      })
      .then(json => {
        dispatch(fetchBitcoin(json));
      });
  };
}
