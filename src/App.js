import './App.css';
import ControlPanel from './Components/Control/ControlPanel.js';
import StocksPanel from './Components/Stock/StocksPanel.js';
import { useState } from 'react';


function App() {
  const [visibleStocks, setVisibleStocks] = useState([]);

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
        <ControlPanel onVisibleStockChange={handleVisibleStockChange} visibleStocks={visibleStocks} 
        />
        <StocksPanel visibleStocks={visibleStocks} />
    </div>
  );
}

export default App;
