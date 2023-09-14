import axios from 'axios';

const API_URL = 'https://viacep.com.br/ws/';

const zipCodeRequest = axios.create({
  baseURL: API_URL,
});

export default zipCodeRequest;
