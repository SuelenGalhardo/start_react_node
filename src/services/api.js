import axios from "axios";

export const api = axios.create({
    baseURL: 'https://start-node-js.onrender.com'
});

//api.get("/users/:id")