import axios from 'axios';

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_URL_API,
    headers: {
        'content-type': 'application/json',
    },
    // paramsSerializer: (params: string | any) => queryString.stringify(params)
});


axiosClient.interceptors.request.use(async (config) => {
    return config;
});

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response
}, (err) => {
    throw err;
});

export default axiosClient;

