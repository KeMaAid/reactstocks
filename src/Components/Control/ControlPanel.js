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
            <SettingList listMaxSize={listMaxSize} onListMaxSizeChange={value => setListMaxSize(value)}
                        timeRange={props.timeRange} onTimeRangeChange={value => props.onTimeRangeChange(value)}
            />
            <StockList  onVisibleStockChange={handleVisibleStockChange} visibleStocks={props.visibleStocks} 
                        listMaxSize={listMaxSize}
            />
        </div>
    );
}

export default ControlPanel;
