import axios from "axios";

const instance = axios.create({
    baseURL: process.env.NEXT.PUBLIC_BACKEND_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;