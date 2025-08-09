import React from 'react';
import './SummaryCard.css'; // Using same CSS file

function HoldingsTable({ data }) {
  return (
    <div className="holdings-container">
      <h3>Holdings</h3>
      <table className="holdings-table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Avg Price</th>
            <th>Current Price</th>
            <th>Sector</th>
            <th>Market Cap</th>
            <th>Value</th>
            <th>Gain/Loss</th>
            <th>Gain/Loss %</th>
          </tr>
        </thead>
        <tbody>
          {data.map((holding, index) => (
            <tr key={index} style={{color:"black"}}>
              <td>{holding.symbol}</td>
              <td>{holding.name}</td>
              <td>{holding.quantity}</td>
              <td>₹{holding.avgPrice}</td>
              <td>₹{holding.currentPrice}</td>
              <td>{holding.sector}</td>
              <td>{holding.marketCap}</td>
              <td>₹{holding.value}</td>
              <td className={holding.gainLoss >= 0 ? 'text-green' : 'text-red'}>
                ₹{holding.gainLoss}
              </td>
              <td className={holding.gainLossPercent >= 0 ? 'text-green' : 'text-red'}>
                {holding.gainLossPercent}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HoldingsTable;
