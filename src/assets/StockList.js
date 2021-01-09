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
            <p>This is a StockList</p>
            <div className="Stocklist">
                <SearchBar onChange={handleSearchChange} passed={searchWord}/>
                <p>Visible Stocks</p>
                <ListStocks onChange={handleVisibleStockRemove} setting={props.setting} search={""} stocks={props.visibleStocks} hiddenStocks={[]}/>
                <p>Available Stocks</p>
                <ListStocks onChange={handleVisibleStockAddittion} setting={props.setting} search={searchWord} stocks={props.allStocks} hiddenStocks={props.visibleStocks}/>
            </div>
        </div>
    );
}


export default StockList;