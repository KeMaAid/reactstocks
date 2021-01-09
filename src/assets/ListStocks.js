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
        
        if(props.passed !== ""){
            let filteredList = fullList.filter(
                stock => stock.name.toLowerCase()
                .includes(props.passed.toLowerCase())
            );
            setDisplay(filteredList.slice(0, props.setting['listMaxSize']));
        } else {
            setDisplay(fullList.slice(0, props.setting['listMaxSize']));
        } 
    }, [stocks, props.passed, props.setting]);

    
    // todo change key and stock.name to work with real data
    return (
        <div>
            <p>This is the showed list</p>
            <ul>
                {display.map((stock, key) => (
                    <div key={key}>
                        {stock.name}
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default ListStocks;