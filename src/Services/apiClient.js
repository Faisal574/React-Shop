import axios from "axios";

let baseUrl = 'http://localhost:8800/api/';
const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
});

export default axiosInstance
