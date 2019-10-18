import React from "react";

import Wallet from "./Wallet";
import Loot from "./Loot";

const App = () => {
  return (
    <div>
      <h3>Loot Check</h3>
      <Wallet />
      <hr />
      <Loot />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.coindesk.com/price"
        className="coindesk"
      >
        Powered By CoinDesk
      </a>
    </div>
  );
};

export default App;
