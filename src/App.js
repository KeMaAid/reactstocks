import './App.css';
import ControlPanel from './Components/Control/ControlPanel.js';
import StocksPanel from './Components/Stock/StocksPanel.js';
import { useState } from 'react';


function App() {
  const [visibleStocks, setVisibleStocks] = useState([]);
  const [timeRange, setTimeRange] = useState([20, 60]);

  //isAddition ? addition : deletion
  function handleVisibleStockChange(changeStock, isAddition){
    var newVisibleStocks = [];

    if(isAddition){
      newVisibleStocks=visibleStocks.concat(changeStock);
    } else {
      newVisibleStocks=visibleStocks.filter(stock => stock !== changeStock);
    };
    setVisibleStocks(newVisibleStocks);
  }

  return (
    <div className="App">
        <ControlPanel timeRange={timeRange} onTimeRangeChange={value => setTimeRange(value)}
                      onVisibleStockChange={handleVisibleStockChange} visibleStocks={visibleStocks} 
        />
        <StocksPanel visibleStocks={visibleStocks} timeRange={timeRange}/>
    </div>
  );
}

export default App;
