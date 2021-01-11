import './AppDark.css';
import ControlPanel from './assets/ControlPanel.js';
import StocksPanel from './assets/StocksPanel.js';
import { useState } from 'react';


function App() {
  const [setting, setSetting] = useState({
    listMaxSize:10,
    maxVisibleStock:9
  });
  const [visibleStocks, setVisibleStocks] = useState([]);
  //add a function to get all stocks here
  const [allStocks] = useState([
    {symbol:"MSFT", key:1},
    {symbol:"TSLA", key:2},
    {symbol:"IBM",  key:3},
    {symbol:"AMZN", key:4},
    {symbol:"ABB", key:5},
    {symbol:"NOK", key:6},
    {symbol:"KO", key:7},
    {symbol:"NDAQ", key:8},
    {symbol:"NET", key:9},
    {symbol:"NFLX", key:10},
    {symbol:"MSFT", key:11},
    {symbol:"GOOG", key:12},
    {symbol:"GM", key:13},
    {symbol:"INTC", key:14},
    {symbol:"AMD", key:15},
    {symbol:"NVDA", key:16}
  ]);

  function handleSettingChange(newSetting){
    setSetting(newSetting);
  }

  //changeType ? addition : deletion
  function handleVisibleStockChange(changeStock, changeType){
    var newVisibleStocks = [];

    if(changeType){
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
