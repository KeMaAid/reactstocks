import {useState, useEffect} from 'react';

const ListStocks = ({onChange, setting, search, stocks, hiddenStocks}) => {
    const [display, setDisplay] = useState([]);

    // todo update to work with real data
    useEffect(() => {
        let displayList = stocks.filter(stock => !hiddenStocks.includes(stock));
        if(search !== ""){
            displayList = stocks.filter(
                stock => stock.name.toLowerCase()
                .includes(search.toLowerCase())
            );
        };
        setDisplay(displayList.slice(0, setting['listMaxSize'])); 
    }, [stocks, search, setting, hiddenStocks]);

    function handleClick(e){
        onChange(e.target.value);
    }
    
    
    // todo change stock.key and stock.name to work with real data
    return (
        <div>
            <p>This is the showed list</p>
            <ul>
                {display.map(stock =>
                    <button key={stock.key} value={stock.key} onClick={handleClick}>
                        {stock.name}
                    </button>    
                )}
            </ul>
        </div>
    );
}

export default ListStocks;