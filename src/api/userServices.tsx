import { stringify } from "querystring";
import axiosClient from "./axiosAPI";

const userServices = {
    registerService: async (user: any) => {
        let url = '/users/register';
        const data = await axiosClient.post(url, { user });
        if (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        }
        return data;
    },
    logoutService: () => {
        localStorage.removeItem('userInfo');
        return null;
    },
    loginService: async (user: any) => {
        const url = '/users/login';
        const data = await axiosClient.post(url, { user });
        if (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        }
        return data;
    },
    updateProfileService: async (user: any) => {
        const url = '/users/update';
        const headers = {
            "Authorization": "Bearer {token}",
            "Content-Type": ["multipart/form-data", "boundary=something"]
        }
        const data = await axiosClient.put(url, user , {headers});
        if (data) {
            localStorage.removeItem('userInfo');
            localStorage.setItem('userInfo', JSON.stringify(data));
        }
        return data;
    },
}

export default userServices;