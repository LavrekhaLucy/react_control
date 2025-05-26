import axios from 'axios';
import {API_KEY, BASE_URL} from "../components/user-info/UserInfo.ts";
import type {IMoviesResponseModel} from "../models/IGenres/IMoviesResponseModel.ts";
import type {IMovie} from "../models/IGenres/IMovie.ts";


const axiosInstance = axios.create({
    baseURL: BASE_URL,
    params: {api_key: API_KEY},
    headers: {'Content-Type': 'application/json'},
})

axiosInstance.interceptors.request.use((request) => {

    return request;

})


export const getMovies = async ():Promise<IMoviesResponseModel> => {
    const {data} = await axiosInstance.get<IMoviesResponseModel>(`/discover/movie`);
    return data;
}


export const getMovie = async (id:number):Promise<IMovie> => {
    const {data} = await axiosInstance.get<IMovie>(`/movie/${id}`);
    return data;
}





