const Searchbar = props => {
    function handleChange(e){
        props.onChange(e.target.value);
    }
    
    return (
        <div className="search-bar">
            <input value={props.passed} onChange={handleChange} />
        </div>
    );
} 

export default Searchbar;