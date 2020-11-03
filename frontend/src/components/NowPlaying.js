import React, { Component } from 'react';
import CurrentSong from './CurrentSong';

class NowPlaying extends Component {
    render() {
        return (
            <div className='now-playing'>
                <h2 className="section-title">NOW PLAYING</h2>
                <CurrentSong />
            </div>
        );
    }
}

export default NowPlaying;