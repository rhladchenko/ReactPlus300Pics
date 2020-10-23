import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component {
    async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization:
                    'Client-ID nIj4RWvtABgMF2clmgSC7PzpiaQq2fi0QfvIypSK4lw',
            },
        });

        console.log(response.data.results);
    };

    render() {
        return (
            <div className='ui container' style={{ marginTop: 10 }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}
export default App;
