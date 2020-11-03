import React, { Component } from 'react';
import QueuedSong from './QueuedSong';

class Queue extends Component {
    render() {
        return (
            <div className='queue'>
                <h2 className="section-title">UP NEXT</h2>
                <QueuedSong />
                <QueuedSong />
                <QueuedSong />
                <QueuedSong />
            </div>
        );
    }
}

export default Queue;