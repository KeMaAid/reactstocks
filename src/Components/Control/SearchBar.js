const Searchbar = props => {
    function handleChange(e){
        props.onChange(e.target.value);
    }
    
    return (
        <div className="Searchbar">
            <input value={props.passed} onChange={handleChange} placeholder={props.placeholder} />
        </div>
    );
} 

export default Searchbar;