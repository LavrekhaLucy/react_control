import axios from 'axios';
import {API_KEY, BASE_URL} from "../components/user-info/UserInfo.ts";
import type {IMoviesResponseModel} from "../models/IMovies/IMoviesResponseModel.ts";
import type {IMovie} from "../models/IMovies/IMovie.ts";
import type {IPosterResponseModel} from "../models/IImages/IPosterResponseModel.ts";
import type {IGenresResponseModel} from "../models/IGenres/IGenresResponseModel.ts";


const axiosInstance = axios.create({
    baseURL: BASE_URL,
    params: {api_key: API_KEY},
    headers: {'Content-Type': 'application/json'},
})

axiosInstance.interceptors.request.use((request) => {
///чи потрібний інтерцептор????/////
        return request;
    });




export const getMovies = async (page: string):Promise<IMoviesResponseModel> => {


    const {data}= await axiosInstance.get<IMoviesResponseModel>(`/discover/movie`,{
        params: {
            page: +page,
        },
    });
    return data;
}

export const getMovie = async (id:number):Promise<IMovie> => {
    const {data} = await axiosInstance.get<IMovie>(`/movie/${id}`);
    return data;
}


export const getImage = async (id:number):Promise<IPosterResponseModel> => {
    const {data} = await axiosInstance.get<IPosterResponseModel>(`/movie/${id}/images`);
    return data;
}



export const getGenres = async ():Promise<IGenresResponseModel> => {
    const {data} = await axiosInstance.get<IGenresResponseModel>(`/genre/movie/list?language=en`);
    return data;
}

export const getMoviesByGenre = async (genreId: number): Promise<IMovie[]> => {
    const {data} = await axiosInstance.get(`/movie_with_genres=${genreId}`);
    return data.results;
};

export const searchMovies = async (query: string): Promise<IMoviesResponseModel> => {
    const { data } = await axiosInstance.get("/search/movie", {
        params: {
            query,
        },
    });
    return data;
};

// export const searchMovies = async (query: string): Promise<IMoviesResponseModel> => {
//     const { data } = await axiosInstance.get("/search/movie", {
//         params: { query },
//     });
//     return data;
// };


