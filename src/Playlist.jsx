import React, { useState } from 'react';
import Styles from "/Users/lisadodd/Desktop/Codecademy/Code Projects/Jammming/react-jammming2-project/src/Playlist.module.css"
function Playlist({ title, playlistTracks, removeSong, onTitleChange, onSave, clearPlaylist }) {
    const [isEditing, setIsEditing] = useState(false);

    const handleTitleClick = () => {
        setIsEditing(true);
    }

    const handleBlur = () => {
        setIsEditing(false);
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleBlur();
        };
    }


    return (
        <div className={Styles.container}>
            {isEditing ? (
                <input
                    type="text"
                    value={title}
                    onChange={onTitleChange}
                    onBlur={handleBlur}
                    autoFocus
                    onKeyDown={handleKeyDown}
                ></input>
            ) : (
                <button
                    onClick={handleTitleClick}
                >{ title || "Click To Name Your Playlist" }
                </button>
            )}

            <ul className={Styles.list}>
                {playlistTracks?.map((track, index) => (
                    <li key={index} className={Styles.listItems}>
                        <img
                            className={Styles.playlistPic}
                            src={track.imageUrl}
                            alt=""
                        ></img>
                        <div className={Styles.trackButton}>
                            {track.name} - {track.artist}
                            <button
                                className={Styles.removeButton}
                                onClick={() => removeSong(track)}
                            >REMOVE</button>
                        </div>    
                    </li>
                ))}
            </ul>

            <div>
                <button
                    onClick={onSave}
                >SAVE PLAYLIST</button>
                <button
                    onClick={clearPlaylist}
                >CLEAR PLAYLIST</button>
            </div>
        </div>
    )
}

export default Playlist;