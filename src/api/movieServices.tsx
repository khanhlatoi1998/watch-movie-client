import { stringify } from "querystring";
import axiosClient from "./axiosAPI";
import { MovieType } from "../constants/type/inex";

const movieServices = {
    createMovie: async (movies: any) => {
        console.log('createMovie')
        let url = '/movies/create';
        let token = movies.get('token');
        const headers = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": ["multipart/form-data", "boundary=something"]
        }
        console.log('movies ==== ', movies)
        const data = await axiosClient.post(url, movies, { headers });
        return data;
    },
    getPopularMovie: async (params?: Object) => {
        console.log('getPopularMovie');
        let url = '/movies/ramdom/all';
        const data: any = await axiosClient.get(url, params);
        return data;
    },
    getMovieById: async (_id: any) => {
        console.log('getMovieById');
        let url = `movies/${_id}`;
        const data: MovieType = await axiosClient.get(url, _id);
        return data;
    }
};

export default movieServices;