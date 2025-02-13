import axios from 'axios';
import { apiCmdbuildUrl } from './config';

const cmdbuildClient = axios.create({
    baseURL: apiCmdbuildUrl,
});

export default cmdbuildClient;
