import SearchBar from './SearchBar.js'
import ChoosedStocks from './ChoosedStocks.js'
import SuggestedStocks from './SuggestedStocks.js'
import useState from 'react'

const StockList = () =>{

    return (
        <div>
            <p>This is a StockList</p>
            <div className="Searchbar">
                <SearchBar />
            </div>
            <div className="Stocks">
                <ChoosedStocks />
                <SuggestedStocks />
            </div>
        </div>
    );
}


export default StockList;