import SettingList from './SettingList.js'
import StockList from './StockList.js'
import { useState } from 'react';

const ControlPanel = props => {
    const [listMaxSize, setListMaxSize] = useState([10]);

    function handleVisibleStockChange(stock, isAddition) {
        props.onVisibleStockChange(stock, isAddition)    
    }

    return (
        <div className="ControlPanel">
            <SettingList listMaxSize={listMaxSize} onListMaxSizeChange={e => setListMaxSize(e.target.value)}/>
            <StockList listMaxSize={listMaxSize} onVisibleStockChange={handleVisibleStockChange} visibleStocks={props.visibleStocks} allStocks={props.allStocks}/>
        </div>
    );
}

export default ControlPanel;
