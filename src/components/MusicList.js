import React from 'react';

const MusicList = (props) => {
    const list = props.songs.map((song) => {
        return (
        <li key={song.id} value={song['im:name'].label}>{song['im:name'].label}/ {song['im:artist'].label}</li>
        );
    });

    return (
        <ul>
            {list}
        </ul>
    )
}

export default MusicList;