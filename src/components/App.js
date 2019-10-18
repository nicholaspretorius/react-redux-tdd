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
    </div>
  );
};

export default App;
