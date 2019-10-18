import React from "react";
import { mount, shallow } from "enzyme";

import { Loot } from "./Loot";

describe("Loot", () => {
  let props = { balance: 10, bitcoin: {} };
  let loot = shallow(<Loot {...props} />);

  it("should render the Loot component properly", () => {
    expect(loot).toMatchSnapshot();
  });

  describe("when mounted", () => {
    const mockFetchBitcoin = jest.fn();
    beforeEach(() => {
      props.handleFetchBitcoin = mockFetchBitcoin;
      loot = mount(<Loot {...props} />);
    });

    it("dispatches the `fetchBitcoin()` method it receives from props", () => {
      expect(mockFetchBitcoin).toHaveBeenCalled();
    });

    describe("when there are valid bitcoin props", () => {
      beforeEach(() => {
        props = { balance: 10, bitcoin: { bpi: { USD: { rate: "1,000" } } } };
        loot = shallow(<Loot {...props} />);
      });

      it("displays the correct bitcoin value", () => {
        // 0.01 is balance { 10 } divided by bitcoin { 1000 }
        expect(loot.find(".bitcoin-balance").text()).toEqual("Bitcoin balance: 0.01");
      });
    });
  });
});
