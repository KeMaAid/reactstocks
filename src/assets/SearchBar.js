import useState from 'react';

const Searchbar = (word) => {

    return (
        <div>
            <input value={word} onChange={handleChange} />
        </div>
    );
} 

function handleChange(e, setWord){
    setWord(e.target.value);
}

export default Searchbar;