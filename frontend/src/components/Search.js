import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className='search-form'>
                <h4 className="search-label">ADD TO QUEUE</h4>
                <form action="">
                    <input type="text" name="" id="search-field" />
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default Search;