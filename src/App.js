// import logo from './assets/logo.svg';
import './App.css';
import ControlPanel from './assets/ControlPanel.js';
import StocksPanel from './assets/StocksPanel.js';
import { useState } from 'react';


function App() {
  const [settings, setSettings] = useState({
    listMaxSize: 10
  });

  return (
    <div className="App">
      <h1>This is the App</h1>
      <div className="control-panel">
        <ControlPanel />
      </div>
      <div className="stocks-panel">
        <StocksPanel />
      </div>
    </div>
  );
}

export default App;
