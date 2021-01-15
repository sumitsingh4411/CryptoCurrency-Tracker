import React, { createContext, useState, useEffect } from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
  console.log();
  const[watchList, setWatchList] = useState(
     [
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
    ]
  );

  useEffect(() => {
    window.localStorage.setItem("watchList", watchList);
  },[watchList]);

  const deleteCoin = (coin) => {
    setWatchList(
      watchList.filter((el) => {
        return el !== coin;
      })
    );
  };

  const addCoin = (coin) => {
    if (watchList.indexOf(coin) === -1) {
      setWatchList([...watchList, coin]);
    }
  };

  return (
    <WatchListContext.Provider value={{ watchList, deleteCoin, addCoin }}>
      {props.children}
    </WatchListContext.Provider>
  );
};
