import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {getMovies} from "../services/api.service.ts";
import type {IMoviesResponseModel} from "../models/IMovies/IMoviesResponseModel.ts";


type movieSliceType={
    movies: IMoviesResponseModel | null
}
const initMovieSliceState: movieSliceType = {movies:null};


const loadMovies = createAsyncThunk(
    "loadMovies", async (_, thunkApi) => {
        const movies = await getMovies();
        return thunkApi.fulfillWithValue(movies);

    }
);


const movieSlice = createSlice({
    name:'movieSlice',
    initialState:initMovieSliceState,
    reducers:{},
    extraReducers:builder => builder.addCase(loadMovies.fulfilled,(state, action:PayloadAction<IMoviesResponseModel>)=>{
        state.movies = action.payload;
    }),


})

export const movieActions = {...movieSlice.actions, loadMovies};

export default movieSlice;