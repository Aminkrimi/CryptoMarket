import React, { useEffect, useState } from "react";
import GridLoader from "react-spinners/GridLoader";
//API
import { getCoins } from "../../Services/cryptoAPI";
//Components
import Table from "../Tables/Table";
import Tbody from "../Tables/td";
import SearchInput from "./SearchInput";
const Crypto = () => {
  const [coins, setCoins] = useState([]);
  const [searchCoins, setSearcCoin] = useState("");
  useEffect(() => {
    const fetchCoins = async () => {
      const result = await getCoins("");
      setCoins(result);
    };
    fetchCoins();
  }, []);

  const searchHandler = (e) => {
    setSearcCoin(e.target.value);
  };
  const searchedCoins = coins.filter((coin) => coin.name.includes(searchCoins));

  console.log(searchedCoins);
  return (
    <>
      

      {!coins.length ? (
        <>
        <h1 className="text">Live Market</h1>
          <div className="loader">
            <GridLoader color="#36bbe5" size={20} />
          </div>
        </>
      ) : (
        <>
          <SearchInput value={searchCoins} handler={searchHandler} />
          <Table>
            <Tbody Coins={searchedCoins} key={1} />
          </Table>
        </>
      )}
    </>
  );
};

export default Crypto;
