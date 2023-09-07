import { stringify } from "querystring";
import axiosClient from "./axiosAPI";

const movieServices = {
    createMovie: async (movies: any) => {
        console.log('createMovie')
        let url = '/movies/create';
        let token = movies.get('token');
        const headers = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": ["multipart/form-data", "boundary=something"]
        }
        console.log('movies ==== ', movies )
        const data = await axiosClient.post(url, movies , { headers });
        return data;
    }
};

export default movieServices;