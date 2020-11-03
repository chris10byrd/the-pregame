import React, { Component } from 'react';

import AlbumCover from '../res/igor-cover.jpg'

class CurrentSong extends Component {
    render() {
        return (
            <div className='current-song'>
                <img src={AlbumCover} alt="Album Cover" className='current-song-img' />
                <h3 className="current-song-title">EARFQUAKE</h3>
                <h3 className="current-song-artist">TYLER THE CREATOR</h3>
            </div>
        );
    }
}

export default CurrentSong;