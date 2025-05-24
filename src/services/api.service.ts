import axios from 'axios';
import type {IMoviesResponseModel} from "../models/IGenres/IMoviesResponseModel.ts";
import {API_KEY, BASE_URL} from "../components/user-info/UserInfo.ts";



// export const getAll= async<T,> (endpoint:string): Promise<T> => {
//     const responseResult = await fetch(`${baseUrl}${endpoint}`).then((res) => res.json());
//     return responseResult as T;
//
// }




export const getMovies = (page = 1) =>
    axios.get(`${BASE_URL}/discover/movie`, {
        params: {
            api_key: API_KEY,
            language: 'en-US',
            page,

        },
    });


export const getMovie = (id: number) =>
    axios.get(`${BASE_URL}/movie/${id}`, {
               params: { api_key: API_KEY },
                })
                .then(res => res.data);



export const getGenres = () =>
    axios.get(`${BASE_URL}/genre/movie/list`, {
        params: {
            api_key: API_KEY,
        },
    });




export const searchMovies = () =>
    axios.get(`${BASE_URL}/search/movie`, {
        params: {
            api_key: API_KEY,

        },
    });
