// import logo from './assets/logo.svg';
import './App.css';
import ControlPanel from './assets/ControlPanel.js';
import StocksPanel from './assets/StocksPanel.js';
import { useState } from 'react';


function App() {
  const [setting, setSetting] = useState({
    listMaxSize: 10
  });

  function handleChange(newSetting){
    setSetting(newSetting);
  }

  return (
    <div className="App">
      <h1>This is the App</h1>
      <div className="control-panel">
        <ControlPanel setting={setting} onChange={handleChange}/>
      </div>
      <div className="stocks-panel">
        <StocksPanel />
      </div>
    </div>
  );
}

export default App;
