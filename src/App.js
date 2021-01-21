import './App.css';
import ControlPanel from './assets/Control/ControlPanel.js';
import StocksPanel from './assets/Stock/StocksPanel.js';
import { useState } from 'react';


function App() {
  const [setting, setSetting] = useState({
    listMaxSize:10,
    maxVisibleStock:9
  });
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

  function handleSettingChange(newSetting){
    setSetting(newSetting);
  }

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
        <ControlPanel onSettingChange={handleSettingChange} onVisibleStockChange={handleVisibleStockChange} setting={setting} visibleStocks={visibleStocks} allStocks={allStocks}/>
        <StocksPanel visibleStocks={visibleStocks}/>
    </div>
  );
}

export default App;
