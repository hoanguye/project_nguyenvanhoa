import axios from 'axios';

const apiUrl = 'http://localhost:3002';


const axiosConfig = axios.create({
    baseURL: apiUrl,
})

export default axiosConfig