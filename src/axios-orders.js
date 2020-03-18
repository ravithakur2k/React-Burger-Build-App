import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e9768.firebaseio.com/'
});

export default instance;