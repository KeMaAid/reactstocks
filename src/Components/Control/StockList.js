import SearchBar from './SearchBar.js'
import ListStocks from './ListStocks.js'
import { useState } from 'react'

const StockList = props =>{
    const [searchWord, setSearchWord] = useState("");
    const [searchStocks, setSearchStocks] = useState([]);


    function handleVisibleStockAddition(newStock){
        props.onVisibleStockChange(newStock, true);
    }
    function handleVisibleStockRemove(removedStock){
        props.onVisibleStockChange(removedStock, false);
    }

    //add handeling for companies with same name in different markets 
    function fetchSearch(newSearch){
        const API_Key = 'MFBETSKQD126AMHH';
        let API_Call = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${newSearch}&apikey=${API_Key}`

        if(newSearch.length>2){
            fetch(API_Call)
                .then(
                    function (response) {
                        return response.json();
                    }
                ).then(
                    function (data) {
                        var searchedStocks = [];
                        if (data.hasOwnProperty('bestMatches')) {
                            for (var result of data['bestMatches']) {
                                searchedStocks.push({symbol: result['1. symbol'], name: result['2. name']});
                            };
                        } else if (data.hasOwnProperty('Note')) {
                            searchedStocks = [{ symbol: null, name: "Please wait" }];
                        } else if (data.hasOwnProperty('Error Message')) {
                            searchedStocks = [{ symbol: null, name: "Invalid input" }];
                        }
                        setSearchStocks(searchedStocks);
                    }
                );
        } else {
            setSearchStocks([]);
        }
    }

    return (
        <div className="StockPicker">
            <SearchBar onChange={newWord => {fetchSearch(newWord);setSearchWord(newWord);}}
            passed={searchWord} placeholder="Search here"/>
            <div className="Chosen-stocks">
                <ListStocks onChange={handleVisibleStockRemove} 
                stocks={props.visibleStocks} hiddenStocks={[]}
                listMaxSize={props.visibleStocks.length} />
            </div>
            <div className="Search-stocks">
                <ListStocks onChange={handleVisibleStockAddition}
                 stocks={searchStocks} hiddenStocks={props.visibleStocks} 
                 listMaxSize={props.listMaxSize}/>
            </div>
        </div>
    );
}


export default StockList;