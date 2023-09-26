import { stringify } from "querystring";
import axiosClient from "./axiosAPI";
import { MovieType } from "../constants/type/inex";

const movieServices = {
    getAll: async () => {
        let url = '/movies/all';
        const data: any = await axiosClient.get(url);
        return data;
    },
    createMovie: async (movies: any) => {
        console.log('createMovie')
        let url = '/movies/create';
        let token = movies.get('token');
        const headers = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": ["multipart/form-data", "boundary=something"]
        }
        const data = await axiosClient.post(url, movies, { headers });
        return data;
    },
    getPopularMovies: async (params?: Object) => {
        console.log('getPopularMovie');
        let url = '/movies/ramdom/all';
        const data: any = await axiosClient.get(url, params);
        return data;
    },
    getRatedTopMovies: async (params?: Object) => {
        console.log('getRatedTopMovies');
        let url = '/movies/rated/top';
        const data: any = await axiosClient.get(url, params);
        return data;
    },
    getRelatedMovies: async (params?: Object) => {
        console.log('getRelatedMovie');
        let url = '/movies/rated/top';
        const data: any = await axiosClient.get(url, params);
        return data;
    },
    getMovieById: async (_id: any) => {
        console.log('getMovieById');
        let url = `movies/${_id}`;
        const data: MovieType = await axiosClient.get(url, _id);
        return data;
    },
    createMovieReview: async (reviews: any) => {
        console.log('createMovieReview');
        const token = reviews.token;
        let url = `movies/${reviews.id}/review`;
        const headers = {
            "Authorization": `Bearer ${token}`,
        }
        const data = await axiosClient.post(url, reviews, { headers });
        return data;
    },
    deleteMovie: async (id: string, token: string) => {
        const url = `/movies/${id}`;
        const headers = {
            "Authorization": `Bearer ${token}`,
        }
        const data = await axiosClient.delete(url, {headers});
        return data;
    }
};

export default movieServices;