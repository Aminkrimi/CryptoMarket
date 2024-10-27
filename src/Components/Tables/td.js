import React from "react";

const td = ({ Coins }) => {
  const coin = Coins.map((item) => {
    const price = item.current_price.toString().slice(0, 5);
    const change_24h = item.price_change_24h.toString().slice(0, 7);
    const total_volume = item.total_volume.toLocaleString();
    const market_cap = item.market_cap.toLocaleString();
    let profit = true;
    if (change_24h.slice(0, 1) === "-") {
      profit = false;
    }
    return (
      <>
        <tr>
          <td>
            <span id="btcLogo">
              <img src={item.image} alt={item.name} />
            </span>
          </td>
          <td>
            <strong className="d-block">{item.name}</strong>{" "}
            <span className="fw-3" id="btcSymbol">
              {item.symbol.toUpperCase()}
            </span>
          </td>
          <td>
            <span id="btcPrice">${price} </span>
          </td>
          <td>
            {profit ? (
              <>
                <span className="positive" >
                  {change_24h} %
                </span>
              </>
            ) : (
              <>
                <span className="negative">
                  {change_24h} %
                </span>
              </>
            )}
          </td>
          <td>
            <span id="btcVol">${total_volume}</span>
          </td>
          <td>
            <span id="btcCap"> ${market_cap}</span>
          </td>
        </tr>
      </>
    );
  });

  return <>{coin}</>;
};

export default td;
