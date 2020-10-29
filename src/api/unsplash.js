import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID nIj4RWvtABgMF2clmgSC7PzpiaQq2fi0QfvIypSK4lw',
    },
})