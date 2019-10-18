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
});
