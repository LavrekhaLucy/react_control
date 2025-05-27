// import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
// import {getMovie} from "../services/api.service.ts";
// import type {IMovie} from "../models/IMovies/IMovie.ts";
//
//
// type movieSliceType={
//     movie: IMovie[]
// }
// const initMovieSliceState: movieSliceType = {movie:[]};
//
//
// const loadMovie = createAsyncThunk(
//     "loadMovies", async (_, thunkApi) => {
//         const movie = await getMovie();
//         console.log(id)
//         return thunkApi.fulfillWithValue(movie);
//
//     }
// );
//
//
// const movieDetailSlice = createSlice({
//     name:'movieSlice',
//     initialState:initMovieSliceState,
//     reducers:{},
//     extraReducers:builder => builder.addCase(loadMovie.fulfilled,(state, action:PayloadAction<IMovie>)=>{
//         state.movie = action.payload;
//     }),
//
//
// })
//
// export const movieDetailActions = {...movieDetailSlice.actions, loadMovie};
//
// export default movieDetailSlice;