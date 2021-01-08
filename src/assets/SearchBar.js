const Searchbar = (props) => {
    function handleChange(e){
        props.onChange(e.target.value);
    }
    
    return (
        <div>
            <input value={props.word} onChange={handleChange} />
        </div>
    );
} 

export default Searchbar;