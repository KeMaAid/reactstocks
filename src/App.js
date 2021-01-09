import './App.css';
import ControlPanel from './assets/ControlPanel.js';
import StocksPanel from './assets/StocksPanel.js';
import { useState } from 'react';


function App() {
  const [setting, setSetting] = useState({
    listMaxSize:10
  });
  const [visibleStocks, setVisibleStocks] = useState([]);
  //add all stocks here
  const [allStocks] = useState([
    {name:"MSFT", value:69, key:1},
    {name:"TSLA", value:800, key:2},
    {name:"IBM", value:400, key:3},
    {name:"AMZN", value:200, key:4}
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
