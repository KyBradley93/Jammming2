import React, {useState} from 'react';
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";
import Spotify from './spotify';
import Styles from "/Users/lisadodd/Desktop/Codecademy/Code Projects/Jammming/react-jammming2-project/src/App.module.css"

function App() {
    const [results, setResults] = useState([]);
    const [playlistTracks, setPlaylistTracks] = useState([]);
    const [playlistTitle, setPlaylistTitle] = useState("")

    const onSearch = async (term) => {
        const searchResults = await Spotify.search(term);
        setResults(searchResults);
    }

    const clearSearch = () => {
        setResults([]);
    }

    const addToPlaylist = (song) => {
        setPlaylistTracks((prevPlaylistTracks) => [
            ...prevPlaylistTracks,
            song,
        ]);
    }

    const playPreview = (url) => {
        const audio = new Audio(url);
        audio.play();
    }

    const removeSong = (song) => {
        setPlaylistTracks(
            playlistTracks.filter((track) => song.id !== track.id)
        )
    }

    const handleTitleChange = (e) => {
        setPlaylistTitle(e.target.value);
    }

    const savePlaylist = async () => {
        const trackURIs = playlistTracks.map((track) => track.uri);

        if (playlistTitle) {
            await Spotify.savePlaylist(playlistTitle, trackURIs);
            setPlaylistTitle("");
            setPlaylistTracks([]);
            alert("Playlist Saved");
        } else {
            alert("Name Your Playlist First!");
        }
    }

    const clearSongs = () => {
        setPlaylistTracks([]);
    }


    return (
        <div>
            <div>
                <h1 className="Header">JAMMMING</h1>
            </div>
            <div>
                <SearchBar 
                    onSearch={onSearch}
                    clear={clearSearch}
                />
            </div>

                <div className={Styles.bodyContainer}>
                    <div className={Styles.searchResults}>
                        <SearchResults
                            tracks={results}
                            addToPlaylist={addToPlaylist}
                            play={playPreview}
                        />
                    </div>

                    <div className={Styles.playlist}>
                        <Playlist 
                            title={playlistTitle}
                            playlistTracks={playlistTracks}
                            onTitleChange={handleTitleChange}
                            onSave={savePlaylist}
                            clearPlaylist={clearSongs}
                            removeSong={removeSong}
                        />
                    </div>
                </div>

        </div>
    )

}

export default App;