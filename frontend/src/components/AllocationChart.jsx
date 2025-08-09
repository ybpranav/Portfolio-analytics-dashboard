import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import './SummaryCard.css'; // reuse same CSS file

function AllocationChart({ allocationData }) {
  if (!allocationData?.bySector || !allocationData?.byMarketCap) {
    return <p className="loading-text">Loading allocation chart...</p>;
  }

  // Convert bySector object into array
  const sectorArray = Object.entries(allocationData.bySector).map(
    ([name, valueObj]) => ({
      name,
      value: valueObj.value
    })
  );

  // Convert byMarketCap object into array
  const marketCapArray = Object.entries(allocationData.byMarketCap).map(
    ([name, valueObj]) => ({
      name,
      value: valueObj.value
    })
  );

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A020F0', '#FF1493'];

  return (
    <div className="allocation-container">
      <div className="chart-box">
        <h2 className="chart-title">Allocation by Sector</h2>
        <PieChart width={400} height={400}>
          <Pie
            data={sectorArray}
            cx={200}
            cy={200}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(1)}%`
            }
          >
            {sectorArray.map((entry, index) => (
              <Cell key={`sector-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      <div className="chart-box">
        <h2 className="chart-title">Allocation by Market Cap</h2>
        <PieChart width={400} height={400}>
          <Pie
            data={marketCapArray}
            cx={200}
            cy={200}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(1)}%`
            }
          >
            {marketCapArray.map((entry, index) => (
              <Cell key={`cap-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}

export default AllocationChart;
