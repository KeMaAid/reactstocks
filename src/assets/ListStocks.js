import {useState, useEffect} from 'react';

const ListStocks = ({onChange, listMaxSize, search, stocks, hiddenStocks}) => {
    const [display, setDisplay] = useState([]);

    useEffect(() => {
        let displayList = stocks.filter(stock => !hiddenStocks.includes(stock));
        if(search !== ""){
            displayList = stocks.filter(
                stock => stock.symbol.toLowerCase()
                .includes(search.toLowerCase())
            );
        };
        setDisplay(displayList.slice(0, listMaxSize)); 
    }, [stocks, search, listMaxSize, hiddenStocks]);

    function handleClick(e){
        onChange(e.target.value);
    }
    

    return (
        <div className="stocklist">
            <ul>
                {display.map(stock =>
                    <button key={stock.key} value={stock.key} onClick={handleClick}>
                        {stock.symbol}
                    </button>    
                )}
            </ul>
        </div>
    );
}

export default ListStocks;