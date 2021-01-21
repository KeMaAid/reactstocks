import SearchBar from './SearchBar.js'
import ListStocks from './ListStocks.js'
import { useState } from 'react'

const StockList = props =>{
    const [searchWord, setSearchWord] = useState("");

    function handleSearchChange(newWord){
        setSearchWord(newWord);
    }

    function handleVisibleStockAddittion(newStockSymbol){
        props.onVisibleStockChange(props.allStocks.find(stock => stock.symbol === newStockSymbol), true);
    }
    function handleVisibleStockRemove(removedStockSymbol){
        props.onVisibleStockChange(props.allStocks.find(stock => stock.symbol === removedStockSymbol), false);
    }

    return (
        <div className="StockPicker">
            <SearchBar onChange={handleSearchChange} passed={searchWord} placeholder="Search"/>
            <ul>
                <div className="Chosen-stocks">
                    <ListStocks onChange={handleVisibleStockRemove} listMaxSize={props.setting['maxVisibleStock']} search={""} stocks={props.visibleStocks} hiddenStocks={[]}/>
                </div>
                <div className="Available-stocks">
                    <ListStocks className="Available-stocks" onChange={handleVisibleStockAddittion} listMaxSize={props.setting['listMaxSize']} search={searchWord} stocks={props.allStocks} hiddenStocks={props.visibleStocks}/>
                </div>
            </ul>
        </div>
    );
}


export default StockList;