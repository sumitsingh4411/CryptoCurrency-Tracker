import React, { useState, useContext } from "react";
import { WatchListContext } from "../context/watchListContext";

const AddCoin = () => {
  const [isActive, setIsActive] = useState(false);
  const { addCoin } = useContext(WatchListContext);
  const availableCoins = [
    "bitcoin",
    "ethereum",
    "tether",
    "polkadot",
    "litecoin",
    "cardano",
    "chainlink",
      "stellar",
      "monero",
      "tron",
      "theta",
      "tezos",
      "uniswap",
      "nem",
      "aave",
      "synthetix",
      "neo",       
      "veChain",
      "cosmos",
      "maker",
      "dai",
      "dash",
      "celsius",
      "dogecoin",
      "iota",
      "zcash",
      "revain",
      "filecoin",
      "yearn.finance",
      "compound",
      "solana",
      "sushiswap",
      "hedgetrade",
      "zilliqa",
      "avalanche",
      "decred",
      "kusama",
  ];

  const handleClick = (coin) => {
    addCoin(coin);
    setIsActive(false);
  };

  return (
    <div className="dropdown">
      <button
        onClick={() => setIsActive(!isActive)}
        className="btn btn-primary dropdown-toggle"
        type="button"
      >
        Add Coin
      </button>
      <div className={isActive ? "dropdown-menu show" : "dropdown-menu"}>
        {availableCoins.map((el) => {
          return (
            <a
              onClick={() => handleClick(el)}
              href="#"
              className="dropdown-item"
            >
              {el}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default AddCoin;
