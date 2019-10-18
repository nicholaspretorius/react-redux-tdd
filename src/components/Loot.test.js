import React from "react";
import { mount, shallow } from "enzyme";

import { Loot } from "./Loot";
import { fetchBitcoin } from "./../actions/bitcoin";

describe("Loot", () => {
  const mockFetchBitcoin = jest.fn();
  const props = { balance: 10, bitcoin: {} };
  let loot = shallow(<Loot {...props} />);

  it("should render the Loot component properly", () => {
    expect(loot).toMatchSnapshot();
  });

  describe("when mounted", () => {
    beforeEach(() => {
      props.fetchBitcoin = mockFetchBitcoin;
      loot = mount(<Loot {...props} />);
    });

    it("dispatches the `fetchBitcoin()` method it receives from props", () => {
      expect(mockFetchBitcoin).toHaveBeenCalled();
    });
  });
});
