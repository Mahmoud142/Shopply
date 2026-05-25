import axios from "axios";

const baseURL = axios.create({
    baseURL: "http://13.61.175.114:4000",
});

export default baseURL;
