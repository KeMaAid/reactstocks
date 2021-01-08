import {useState, useEffect} from 'react';

const ListStocks = (props) => {
    const [stocks] = useState([
        {name: "MSFT", value: 100, key:1},
        {name: "AMZN", value: 609, key:2},
        {name: "TSLA", value: 1000, key:3}
    ]); // todo iniate real stocks
    const [display, setDisplay] = useState([]);

    // todo update to work with real data
    useEffect(() => {
        let fullList = stocks;
        
        if(props.word !== ""){
            let filteredList = fullList.filter(
                stock => stock.name.toLowerCase()
                .includes(props.word.toLowerCase())
            );
            setDisplay(filteredList.slice(0, props.setting['listMaxSize']));
        } else {
            setDisplay(fullList.slice(0, props.setting['listMaxSize']));
        } 
    }, [stocks, props.word, props.settings]);

    
    // todo change key and stock.name to work with real data
    return (
        <div>
            {display.map((stock, key) => (
                <div key={key}>
                    <li>
                        {stock.name}
                    </li>
                </div>
            ))}
        </div>
    );
}

export default ListStocks;