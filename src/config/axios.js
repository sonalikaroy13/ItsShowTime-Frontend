import axios from 'axios';

export const instanceTMD = axios.create({
    baseURL: `https://api.themoviedb.org/3`
});

export const instanceBE = axios.create({
    baseURL: `https://itsshowtimebackend.pythonanywhere.com/auth/`
});

export const instanceREFRESH = axios.create({
    baseURL: `https://itsshowtimebackend.pythonanywhere.com/auth/`
});