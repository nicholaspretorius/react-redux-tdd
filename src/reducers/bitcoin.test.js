import bitcoinReducer from "./bitcoin";
import * as constants from "./../actions/constants";

describe("bitcoinReducer", () => {
  const bitcoin = { bpi: "bitcoin price index" };
  it("fetches and sets the bitcoin data", () => {
    expect(bitcoinReducer(undefined, { type: constants.FETCH_BITCOIN, bitcoin })).toEqual(bitcoin);
  });
});
