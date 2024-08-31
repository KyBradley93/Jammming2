import React from 'react';
import Styles from "/Users/lisadodd/Desktop/Codecademy/Code Projects/Jammming/react-jammming2-project/src/SearchResults.module.css"
import Tracklist from './Tracklist';

function SearchResults({ tracks, play, clear, addToPlaylist }) {
    return (
        <div className={Styles.searchResults}>
            <Tracklist 
                tracks={tracks}
                play={play}
                clear={clear}
                addToPlaylist={addToPlaylist}
            />
        </div>
    )
}

export default SearchResults;