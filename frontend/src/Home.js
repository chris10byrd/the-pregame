import React, { Component } from 'react';
import NowPlaying from './components/NowPlaying';
import Queue from './components/Queue';
import Search from './components/Search';


class Home extends Component {
    render() {
        return (
            <div className='container'>
                <h1 className='party-name'>WATERFORD 8 PARTY</h1>
                <NowPlaying />
                <Search />
                <Queue />
            </div>
        );
    }
}

export default Home;