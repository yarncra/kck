import axios from './axios';

const api = {
  getCards() {
    return axios.get('/cards');
  },
};

export default api;
