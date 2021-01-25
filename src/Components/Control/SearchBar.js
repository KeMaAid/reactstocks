const Searchbar = props => {
    
    return (
        <div className="Searchbar">
            <input value={props.passed} onChange={e => props.onChange(e.target.value)} placeholder={props.placeholder} />
        </div>
    );
} 

export default Searchbar;