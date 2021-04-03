import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-3f411-default-rtdb.firebaseio.com/'
});

export default instance;