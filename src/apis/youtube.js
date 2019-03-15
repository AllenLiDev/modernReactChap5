import axios from 'axios';

const KEY = 'AIzaSyDUOK-YbrNstIxSVP_T7CGjFAlZSVTcbcc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});