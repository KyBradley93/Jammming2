import React from 'react';
import Track from './Track';

function Tracklist({ tracks, play, addToPlaylist }) {
    return (
        <div>
            {tracks.map(track => (
                <div key={track.id}>
                    <Track 
                        track={track}
                        addToPlaylist={addToPlaylist}
                        play={play}
                    />
                </div>
            ))}
        </div>
    )
}

export default Tracklist