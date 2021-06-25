import axios from 'axios';

export const instanceTMD = axios.create({
    baseURL: `https://api.themoviedb.org/3`
});

export const instanceBE = axios.create({
    baseURL: `http://127.0.0.1:8000/auth/`
});

export const instanceREFRESH = axios.create({
    baseURL: `http://127.0.0.1:8000/auth/`
});