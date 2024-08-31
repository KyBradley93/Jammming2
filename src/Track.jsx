import React from 'react';
import Styles from "/Users/lisadodd/Desktop/Codecademy/Code Projects/Jammming/react-jammming2-project/src/Track.module.css"

function Track({ track, play, addToPlaylist }) {
    return (
        <div className={Styles.container}>
            <div>
                <img 
                    className={Styles.songPic}
                    src={track.imageUrl}
                    alt=""
                />
            </div>
            <div className={Styles.trackDesc}>
                <h3>{track.name}</h3>
                <p>{track.artist}</p>
                <p>{track.album}</p>
            </div>
            <div className={Styles.button}>
                <button
                    onClick={() => play(track.previewUrl)}
                >PREVIEW</button>
                <button
                    onClick={() => addToPlaylist(track)}
                >ADD TO PLAYLIST</button>
            </div>
        </div>
    )
}

export default Track;