import React, { useEffect, useState } from 'react';
import SummaryCards from './components/SummaryCards';
import AllocationChart from './components/AllocationChart';
import PerformanceChart from './components/PerformanceChart';
import HoldingsTable from './components/HoldingsTable';



function App() {
  const [summary, setSummary] = useState({});
  const [holdings, setHoldings] = useState([]);
  const [allocation, setAllocation] = useState([]);
  const [performance, setPerformance] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/portfolio/summary')
       .then(res => res.json())
      .then(data => {
        console.log('Summary API Response:', data);
        setSummary(data)})
      .catch(err => console.error("Error fetching summary:", err));

    fetch('http://localhost:5000/api/portfolio/holdings')
      .then(res => res.json())
      .then(data =>{
        console.log('Holdings API Response:', data);
        setHoldings(data)
      })
      .catch(err => console.error("Error fetching holdings:", err));

    fetch('http://localhost:5000/api/portfolio/allocation')
      .then(res => res.json())
      .then(data => {
        console.log('Allocation API Response:', data);
        setAllocation(data);
      })

    fetch('http://localhost:5000/api/portfolio/performance')
        .then(res => res.json())
  .then(data => {
    console.log('Performance API Response:', data);
    setPerformance(data);
  });
  }, []);

  return (
   <div className="dashboard-container" >
  <div className="top-cards" >
    <SummaryCards summary={summary} />
  </div>
  <div className="charts-row" >
        <div className="chart-column" >
      <AllocationChart allocationData={allocation} />
      <PerformanceChart data={performance} />
    </div>
    <div className="table-column" >
      <HoldingsTable data={holdings} />
    </div>
  </div></div>

  );
}

export default App;