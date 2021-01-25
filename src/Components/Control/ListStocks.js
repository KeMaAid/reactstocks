const ListStocks = ({onChange, stocks}) => {


    function handleClick(e){
        e.preventDefault();
        onChange(e.target.value);
    };
  
    return (
        <ul>
            {stocks.map(stock => 
                <button key={stock.symbol} onClick={handleClick}>
                    {stock.name}
                </button>
            )}
        </ul>
    );
};

export default ListStocks;