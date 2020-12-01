import axios from 'axios';

const KEY = 'AIzaSyCDf28TwsplTr1Y92M-2GJoyUmfRs5HjqM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})