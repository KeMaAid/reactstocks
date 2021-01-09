import SearchBar from './SearchBar.js'
import ListStocks from './ListStocks.js'
import { useState } from 'react'

const StockList = props =>{
    const [searchWord, setSearchWord] = useState("");

    function handleSearchChange(newWord){
        setSearchWord(newWord);
    }

    function handleVisibleStockAddittion(newStockKey){
        props.onVisibleStockChange(props.allStocks.find(stock => stock.key === parseInt(newStockKey)), true);
    }
    function handleVisibleStockRemove(removedStockKey){
        props.onVisibleStockChange(props.allStocks.find(stock => stock.key === parseInt(removedStockKey)), false);
    }

    return (
        <div>
            <div className="Stock-picker">
                <SearchBar onChange={handleSearchChange} passed={searchWord}/>
                <p>Chosen Stocks</p>
                <ListStocks onChange={handleVisibleStockRemove} listMaxSize={props.setting['maxVisibleStock']} search={""} stocks={props.visibleStocks} hiddenStocks={[]}/>
                <p>Available Stocks</p>
                <ListStocks onChange={handleVisibleStockAddittion} listMaxSize={props.setting['listMaxSize']} search={searchWord} stocks={props.allStocks} hiddenStocks={props.visibleStocks}/>
            </div>
        </div>
    );
}


export default StockList;