import {useState, useEffect} from 'react';

const ListStocks = ({onChange, setting, search, stocks, hiddenStocks}) => {
    const [display, setDisplay] = useState([]);

    useEffect(() => {
        let displayList = stocks.filter(stock => !hiddenStocks.includes(stock));
        if(search !== ""){
            displayList = stocks.filter(
                stock => stock.symbol.toLowerCase()
                .includes(search.toLowerCase())
            );
        };
        setDisplay(displayList.slice(0, setting['listMaxSize'])); 
    }, [stocks, search, setting, hiddenStocks]);

    function handleClick(e){
        onChange(e.target.value);
    }
    

    return (
        <div>
            <p>This is the showed list</p>
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