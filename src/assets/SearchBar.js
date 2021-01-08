const Searchbar = props => {
    function handleChange(e){
        props.onChange(e.target.value);
    }
    
    return (
        <div>
            <p>This is the Searchbar</p>
            <input value={props.word} onChange={handleChange} />
        </div>
    );
} 

export default Searchbar;