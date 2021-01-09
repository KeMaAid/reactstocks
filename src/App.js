import './App.css';
import ControlPanel from './assets/ControlPanel.js';
import StocksPanel from './assets/StocksPanel.js';
import { useState } from 'react';


function App() {
  const [setting, setSetting] = useState({
    listMaxSize:10,
    maxVisibleStock:9
  });
  const [visibleStocks, setVisibleStocks] = useState([]);
  //add all stocks here
  const [allStocks] = useState([
    {symbol:"MSFT", key:1},
    {symbol:"TSLA", key:2},
    {symbol:"IBM",  key:3},
    {symbol:"AMZN", key:4}
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
      <h1>This is the App</h1>
      <div className="control-panel">
        <ControlPanel onSettingChange={handleSettingChange} onVisibleStockChange={handleVisibleStockChange} setting={setting} visibleStocks={visibleStocks} allStocks={allStocks}/>
      </div>
      <div className="stocks-panel">
        <StocksPanel visibleStocks={visibleStocks}/>
      </div>
    </div>
  );
}

export default App;
