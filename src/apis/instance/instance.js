import axios from 'axios';

const baseURL = 'https://server.mooner.dev/dambda/api/v1';

const instance = axios.create({
  baseURL: baseURL,
  timeout: 1000 * 60 * 5,
});

export default instance;
