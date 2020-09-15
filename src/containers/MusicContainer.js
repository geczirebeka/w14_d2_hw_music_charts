import React, { Component } from 'react';
import MusicList from '../components/MusicList';

class MusicContainer extends Component {
    constructor() {
        super();
        this.state = {
            songs: [],
            selectedSong: '',
        };
    }

    componentDidMount() {
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
        fetch(url)
            .then(res => res.json())
            .then(songs => this.setState({ songs: songs.feed.entry }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <>
            <h2>Uk Top 20 Charts</h2>
            <MusicList songs={this.state.songs} />
            </>
        )
    }
}

export default MusicContainer;