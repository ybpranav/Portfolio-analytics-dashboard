import React from 'react';
import './SummaryCard.css'; // Import CSS

function SummaryCards({ summary }) {
  return (
    <div className="summary-container">
      {/* Total Value */}
      <div className="summary-card">
        <h3>Total Value</h3>
        <p className="value">₹{summary.totalValue?.toLocaleString()}</p>
      </div>

      {/* Total Invested */}
      <div className="summary-card">
        <h3>Total Invested</h3>
        <p className="value">₹{summary.totalInvested?.toLocaleString()}</p>
      </div>

      {/* Total Gain/Loss */}
      <div className="summary-card">
        <h3>Total Gain/Loss</h3>
        <p className={`value ${summary.totalGainLoss >= 0 ? 'positive' : 'negative'}`}>
          ₹{summary.totalGainLoss?.toLocaleString()}
        </p>
      </div>

      {/* Total Gain/Loss % */}
      <div className="summary-card">
        <h3>Total Gain/Loss %</h3>
        <p className={`value ${summary.totalGainLossPercent >= 0 ? 'positive' : 'negative'}`}>
          {summary.totalGainLossPercent?.toFixed(2)}%
        </p>
      </div>

      {/* Top Performer */}
      <div className="summary-card">
        <h3>Top Performer</h3>
        <p className="symbol">{summary.topPerformer?.symbol}</p>
        <p className="positive">{summary.topPerformer?.gainPercent}%</p>
      </div>

      {/* Worst Performer */}
      <div className="summary-card">
        <h3>Worst Performer</h3>
        <p className="symbol" style={{color:"orange"}}>{summary.worstPerformer?.symbol}</p>
        <p className="negative">{summary.worstPerformer?.gainPercent}%</p>
      </div>

      {/* Diversification Score */}
      <div className="summary-card">
        <h3>Diversification Score</h3>
        <p className="value"style={{color:"blue"}}>{summary.diversificationScore}</p>
      </div>

      {/* Risk Level */}
      <div className="summary-card">
        <h3>Risk Level</h3>
        <p className="value" style={{color:"orange"}} >{summary.riskLevel}</p>
      </div>
    </div>
  );
}

export default SummaryCards;
