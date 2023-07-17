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

    return response;
}, (error) => {
    if (error.response.status === 401) {
        // handle unauthorized error
    } else if (error.response.status === 404) {
        // handle not found error
    } else {
        // handle other errors
    }
    return Promise.reject(error);
});

export default axiosClient;

