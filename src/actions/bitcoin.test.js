// https://api.coindesk.com/v1/bpi/currentprice.json
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { FETCH_BITCOIN } from "./constants";
import { handleFetchBitcoin } from "./bitcoin";

const createMockStore = configureMockStore([thunk]);
const mockStore = createMockStore({ bitcoin: {} });
const mockResponse = { body: { bpi: "bitcoin price index" } };
const URL = "https://api.coindesk.com/v1/bpi/currentprice.json";

fetchMock.get(URL, mockResponse);

it("creates an async action to fetch the bitcoin value", () => {
  const actions = [{ type: FETCH_BITCOIN, bitcoin: mockResponse.body }];

  return mockStore.dispatch(handleFetchBitcoin()).then(() => {
    expect(mockStore.getActions()).toEqual(actions);
  });
});
