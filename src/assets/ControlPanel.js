import SettingList from './SettingList.js'
import StockList from './StockList.js'

const ControlPanel = props => {
    
    function handleVisibleStockChange(stock, changeType) {
        props.onVisibleStockChange(stock, changeType)    
    }

    return (
        <div className="ControlPanel">
            <SettingList setting={props.setting} onChange={e => props.onSettingChange(e)}/>
            <StockList setting={props.setting} onVisibleStockChange={handleVisibleStockChange} visibleStocks={props.visibleStocks} allStocks={props.allStocks}/>
        </div>
    );
}

export default ControlPanel;
