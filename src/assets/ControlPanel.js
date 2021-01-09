import SettingList from './SettingList.js'
import StockList from './StockList.js'
//import { useState } from 'react'

const ControlPanel = props => {
    
    function handleVisibleStockChange(stock, changeType) {
        props.onVisibleStockChange(stock, changeType)    
    }

    return (
    <div>
        <h2>This is a ControlPanel</h2>
        <div className="SettingList">
            <SettingList setting={props.setting} onChange={e => props.onSettingChange(e)}/>
        </div>
        <div className="StockList">
            <StockList setting={props.setting} onVisibleStockChange={handleVisibleStockChange} visibleStocks={props.visibleStocks} allStocks={props.allStocks}/>
        </div>
    </div>);
}

export default ControlPanel;
