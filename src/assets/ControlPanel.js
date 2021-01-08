import SettingList from './SettingList.js'
import StockList from './StockList.js'
//import { useState } from 'react'

const ControlPanel = props => {
    
    return (
    <div>
        <h2>This is a ControlPanel</h2>
        <div className="SettingList">
            <SettingList setting={props.setting} onChange={e => props.onChange(e)}/>
        </div>
        <div className="StockList">
            <StockList setting={props.setting}/>
        </div>
    </div>);
}

export default ControlPanel;
