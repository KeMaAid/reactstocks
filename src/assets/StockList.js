import SearchBar from './SearchBar.js'
import ListStocks from './ListStocks.js'
import useState from 'react'

const StockList = () =>{

    return (
        <div>
            <p>This is a StockList</p>
            <div className="Stocklist">
                <SearchBar />
                <ListStocks />
            </div>
        </div>
    );
}


export default StockList;