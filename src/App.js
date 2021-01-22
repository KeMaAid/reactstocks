import './App.css';
import ControlPanel from './Components/Control/ControlPanel.js';
import StocksPanel from './Components/Stock/StocksPanel.js';
import { useState } from 'react';


function App() {
  const [visibleStocks, setVisibleStocks] = useState([]);


  //add a function to get all stocks here
  const [allStocks] = useState([
    {symbol:"MSFT"},
    {symbol:"TSLA"},
    {symbol:"IBM"},
    {symbol:"AMZN"},
    {symbol:"ABB"},
    {symbol:"NOK"},
    {symbol:"KO"},
    {symbol:"NDAQ"},
    {symbol:"NET"},
    {symbol:"NFLX"},
    {symbol:"GOOG"},
    {symbol:"GM"},
    {symbol:"INTC"},
    {symbol:"AMD"},
    {symbol:"NVDA"}
  ]);

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
        <ControlPanel onVisibleStockChange={handleVisibleStockChange} visibleStocks={visibleStocks} allStocks={allStocks}/>
        <StocksPanel visibleStocks={visibleStocks}/>
    </div>
  );
}

export default App;
