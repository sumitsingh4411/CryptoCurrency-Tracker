import React from "react";
import AddCoin from "../components/AddCoin";
import CoinList from "../components/CoinList";
import Heading from "../pages/Heading"
const CoinSummaryPage = () => {
  return (
    <div className="coinsummary shadow border p-2 rounded mt-2 bg-light">
      <AddCoin />
      <Heading/>
      <CoinList/>
    </div>
  );
};

export default CoinSummaryPage;
