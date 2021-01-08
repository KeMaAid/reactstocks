import SettingList from './SettingList.js'
import StockList from './StockList.js'
import useState from 'react'

const ControlPanel = () => {

    
    return (
    <div>
        <h2>This is a ControlPanel</h2>
        <div className="SettingList">
            <SettingList />
        </div>
        <div className="StockList">
            <StockList />
        </div>
    </div>);
}

export default ControlPanel;
