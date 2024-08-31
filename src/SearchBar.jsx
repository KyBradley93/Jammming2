import React, {useState} from 'react';
import Styles from "/Users/lisadodd/Desktop/Codecademy/Code Projects/Jammming/react-jammming2-project/src/SearchBar.module.css";

function SearchBar({ onSearch, clear }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleTermChange = (e) => {
        setSearchTerm(e.target.value);
    }
    
    const passTerm = () => {
        onSearch(searchTerm);
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            passTerm();
        }
    }

    const handleClick = (e) => {
        clear();
        setSearchTerm("");
    }

    
    return (
        <div className={Styles.container}>
            <input
                className={Styles.searchBar}
                type="text"
                value={searchTerm}
                onChange={handleTermChange}
                onKeyDown={handleKeyDown}
                placeholder="Enter Search"
            ></input>
            <button
                className={Styles.search}
                onClick={passTerm}
            >SEARCH</button>
            <button
                className={Styles.clear}
                onClick={handleClick}
            >CLEAR</button>
        </div>
    )
}

export default SearchBar;