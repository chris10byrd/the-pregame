import React, { Component } from 'react';

import AlbumCover from '../res/igor-cover.jpg'
import LikeIcon from '../res/like.svg'
import DislikeIcon from '../res/like-1.svg'

class QueuedSong extends Component {
    render() {
        return (
            <div className='queued-song'>
                <img src={AlbumCover} alt="Album Cover" className='queued-song-image' />
                <div className="queued-song-details">
                    <h4 className="queued-song-title">NEW MAGIC WAND</h4>
                    <h4 className="queued-song-artist">TYLER THE CREATOR</h4>
                </div>
                <div className="button-container">
                    <p className="total-likes">7</p>
                    <img src={LikeIcon} alt="" onClick={liked} />
                    <img src={DislikeIcon} alt="" />
                </div>
            </div>
        );
    }
}

var liked = () => {
    alert('liked a song')
}

export default QueuedSong;