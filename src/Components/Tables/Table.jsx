import React from "react";

const Table = ({ children }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Coin</th>
            <th>Price</th>
            <th>24h %</th>
            <th>24h Volume</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </>
  );
};

export default Table;
