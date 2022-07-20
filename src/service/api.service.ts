import axios from "axios";

const api = axios.create({
    baseURL: "https://api.github.com",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
});

export default api