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
        const data = await axiosClient.put(url, user, { headers });
        console.log('updateProfile ======', user)
        if (data) {
            localStorage.removeItem('userInfo');
            localStorage.setItem('userInfo', JSON.stringify(data));
        }
        return data;
    },
    changePasswordService: async (user: any) => {
        const url = '/users/password';
        const token = user.token;
        console.log(token)
        const headers = {
            "Authorization": `Bearer ${token}`,
        }
        const data = await axiosClient.put(url, { user }, { headers });
        return data;
    },
    getFavoriteMovies: async (token: any) => {
        const url = '/users/favorites';
        const headers = {
            "Authorization": `Bearer ${token}`,
        }
        const data = await axiosClient.get(url, { headers });
        if (data) {
            localStorage.setItem('favorites', JSON.stringify(data));
        }
        return data;
    },
    deleteFavoriteMovies: async (token: any) => {
        const url = '/users/favorites';
        const headers = {
            "Authorization": `Bearer ${token}`,
        }
        const data = await axiosClient.delete(url, { headers });
        return data;
    },
    getAllUser: async (token: any) => {
        const url = '/users';
        const headers = {
            "Authorization": `Bearer ${token}`,
        }
        const data: any = await axiosClient.get(url, { headers });
        return data;
    }
}

export default userServices;