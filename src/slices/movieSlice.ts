import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {getMovies, getMoviesByGenre} from "../services/api.service.ts";
import type {IMovie} from "../models/IMovies/IMovie.ts";


type movieSliceType = {
    movies: IMovie[];
    moviesByGenre: IMovie[]
};
const initMovieSliceState: movieSliceType = {movies:[],moviesByGenre:[]};


const loadMovies = createAsyncThunk(
    "loadMovies", async (_, thunkApi) => {
        const movies = await getMovies();
        return thunkApi.fulfillWithValue(movies.results);

    }
);
export const loadMoviesByGenre = createAsyncThunk(
    "loadMoviesByGenre",
    async (genreId: number, thunkAPI) => {
        const moviesByGenre = await getMoviesByGenre(genreId);
        return thunkAPI.fulfillWithValue(moviesByGenre);
    }
);


const movieSlice = createSlice({
    name:'movieSlice',
    initialState:initMovieSliceState,
    reducers:{},
    extraReducers:builder => builder
        .addCase(loadMovies.fulfilled, (state, action: PayloadAction<IMovie[]>) => {
            state.movies = action.payload;
        })
        .addCase(loadMoviesByGenre.fulfilled, (state, action: PayloadAction<IMovie[]>) => {
            state.moviesByGenre = action.payload;
        })


})

export const movieActions = {...movieSlice.actions, loadMovies,loadMoviesByGenre};

export default movieSlice;