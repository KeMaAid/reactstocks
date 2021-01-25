import SearchBar from './SearchBar.js'
import ListStocks from './ListStocks.js'
import { useState } from 'react'

const StockList = props =>{
    const [searchWord, setSearchWord] = useState("");
    const [searchStocks, setSearchStocks] = useState([]);


    function handleVisibleStockAddittion(newStockSymbol){
        props.onVisibleStockChange(props.allStocks.find(stock => stock.symbol === newStockSymbol), true);
    }
    function handleVisibleStockRemove(removedStockSymbol){
        props.onVisibleStockChange(props.allStocks.find(stock => stock.symbol === removedStockSymbol), false);
    }

    //add error handeling for companies with same stocksymbol or name in different markets 
    function fetchSearch(newSearch){
        const API_Key = 'MFBETSKQD126AMHH';
        let API_Call = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${newSearch}&apikey=${API_Key}`
        var searchedStocks = [];
        
        if(newSearch.length > 2){
            fetch(API_Call)
                .then(
                    function(response){
                        return response.json();
                    }
                ).then(
                    function(data){

                        if(data.hasOwnProperty('bestMatches')){
                            for(var result of data['bestMatches']){
                                searchedStocks.push({symbol: result['1. symbol'], name: result['2. name']});
                            }
                        } else if (data.hasOwnProperty('Note')){
                            searchedStocks = [ {symbol: null, name: "Please wait"}];
                        } else if (data.hasOwnProperty('Error Message')) {
                            searchedStocks = [ {symbol: null, name: "Invalid input"}];
                        }
                        setSearchStocks(searchedStocks);
                    }
                );
        } else {
            setSearchStocks(searchedStocks);
        }   
    }

    return (
        <div className="StockPicker">
            <SearchBar onChange={newWord => {fetchSearch(newWord);setSearchWord(newWord);}} passed={searchWord} placeholder="Search here"/>
            <ul>
                <div className="Chosen-stocks">
                    <ListStocks onChange={handleVisibleStockRemove} listMaxSize={(props.visibleStocks).length} stocks={props.visibleStocks}/>
                </div>
                <div className="Search-stocks">
                    <ListStocks className="Available-stocks" onChange={handleVisibleStockAddittion} listMaxSize={props.listMaxSize} stocks={searchStocks} />
                </div>
            </ul>
        </div>
    );
}


export default StockList;