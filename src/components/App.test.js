import React from "react";
import { shallow } from "enzyme";

import App from "./App";

describe("App", () => {
  const app = shallow(<App />);

  it("render the app correctly", () => {
    expect(app).toMatchSnapshot();
  });

  it("contains a connected Wallet component", () => {
    // console.log(app.debug());
    expect(app.find("Connect(Wallet)").exists()).toBe(true);
  });

  it("contains a connected Loot component", () => {
    expect(app.find("Connect(Loot)").exists()).toBe(true);
  });

  it("contains a link to the CoinDesk api", () => {
    expect(app.find("a.coindesk").props().href).toBe("https://www.coindesk.com/price");
  });
});
