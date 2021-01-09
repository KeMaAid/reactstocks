import SearchBar from './SearchBar.js'
import ListStocks from './ListStocks.js'
import { useState } from 'react'

const StockList = props =>{
    const [word, setWord] = useState("");

    function handleChange(newWord){
        setWord(newWord);
    }

    return (
        <div>
            <p>This is a StockList</p>
            <div className="Stocklist">
                <SearchBar onChange={handleChange} passed={word}/>
                <ListStocks setting={props.setting} passed={word}/>
            </div>
        </div>
    );
}


export default StockList;