import axios from "axios";
import store from '@/store/index';

export const api = axios.create({
    baseURL: "https://api.github.com"
});

api.interceptors.request.use(req => {
    store.dispatch('updateLoadingPage', true);
    return req
})

api.interceptors.response.use(res => {
    store.dispatch('updateLoadingPage', false);
    return res
})

