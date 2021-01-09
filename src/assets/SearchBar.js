const Searchbar = props => {
    function handleChange(e){
        props.onChange(e.target.value);
    }
    
    return (
        <div>
            <p>This is the Searchbar</p>
            <input value={props.passed} onChange={handleChange} />
        </div>
    );
} 

export default Searchbar;