import React from "react";
import { shallow } from "enzyme";

import { Wallet } from "./Wallet";

describe("Wallet", () => {
  const props = { balance: 20 };
  const wallet = shallow(<Wallet {...props} />);

  it("should render the wallet properly", () => {
    expect(wallet).toMatchSnapshot();
  });

  it("should initialize the `state` to 0", () => {
    expect(wallet.state().amount).toEqual(0);
  });

  it("displays the balance from props", () => {
    expect(wallet.find(".balance > p").text()).toEqual("Wallet Balance: 20");
  });

  it("finds the Wallet input", () => {
    expect(wallet.find(".wallet-input").exists()).toBe(true);
  });

  describe("when the user types into the wallet input", () => {
    const AMOUNT = "10";

    beforeEach(() => {
      wallet.find(".wallet-input").simulate("change", { target: { value: AMOUNT } });
    });

    it("should set the `state` to the amount and convert it to a number", () => {
      expect(wallet.state().amount).toEqual(parseInt(AMOUNT, 10));
      //expect(wallet.state().amount).toBe();
    });
  });
});
