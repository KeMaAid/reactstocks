// import logo from './assets/logo.svg';
import './App.css';
import ControlPanel from './assets/ControlPanel.js';
import StocksPanel from './assets/StocksPanel.js';

function App() {
  return (
    <div className="App">
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
