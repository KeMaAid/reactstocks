import {useState, useEffect} from 'react';

const ListStocks = ({onChange, listMaxSize, search, stocks, hiddenStocks}) => {
    const [display, setDisplay] = useState([]);

    useEffect(() => {
        let displayList = stocks.filter(stock => !hiddenStocks.includes(stock));
        if(search !== ""){
            displayList = displayList.filter(
                stock => stock.symbol.toLowerCase()
                .includes(search.toLowerCase())
            );
        };
        setDisplay(displayList.slice(0, listMaxSize)); 
    }, [stocks, search, listMaxSize, hiddenStocks]);

    function handleClick(e){
        e.preventDefault();
        onChange(e.target.value);
    };
  
    return (
        <ul>
            {display.map(stock => 
                <button key={stock.key} value={stock.key} onClick={handleClick}>
                    {stock.symbol}
                </button>
            )}
        </ul>
    );
};

export default ListStocks;