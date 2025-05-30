import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {getMovies, getMoviesByGenre, searchMovies} from "../services/api.service.ts";
import type {IMovie} from "../models/IMovies/IMovie.ts";
import type {IMoviesResponseModel} from "../models/IMovies/IMoviesResponseModel.ts";


type movieSliceType = {
    moviesPage: IMoviesResponseModel | null,
    movies:IMovie[],
    moviesByGenre: IMovie[],
    searchResults: IMovie[];
};
const initMovieSliceState: movieSliceType = {moviesPage:null, movies:[],moviesByGenre:[],searchResults:[]};


const loadMovies = createAsyncThunk(
    "loadMovies",
    async (page:string, thunkApi) => {
        const movies = await getMovies(page);
        return thunkApi.fulfillWithValue(movies);

    }
);


 const loadMoviesByGenre = createAsyncThunk(
    "loadMoviesByGenre",
    async (genreId: number, thunkAPI) => {
        const moviesByGenre = await getMoviesByGenre(genreId);
        return thunkAPI.fulfillWithValue(moviesByGenre);
    }
);
 const loadMoviesBySearch = createAsyncThunk(
    "loadMoviesBySearch",
    async (query: string) => {
        const data = await searchMovies(query);
        return data.results;
    }
);
// export const loadMoviesBySearch = createAsyncThunk(
//     "movieSlice/loadMoviesBySearch",
//     async (query: string) => {
//         const data = await searchMovies(query);
//         return data.results; // або повністю data
//     }
// );




const movieSlice = createSlice({
    name:'movieSlice',
    initialState:initMovieSliceState,
    reducers:{},
    extraReducers:builder => builder
        .addCase(loadMovies.fulfilled, (state, action: PayloadAction<IMoviesResponseModel>) => {
            state.movies = action.payload.results;
            state.moviesPage = action.payload;
        })
        .addCase(loadMoviesByGenre.fulfilled, (state, action: PayloadAction<IMovie[]>) => {
            state.moviesByGenre = action.payload;
        })
        .addCase(loadMoviesBySearch.fulfilled, (state, action) => {
    state.searchResults = action.payload;
})

    // const movieSlice = createSlice({
    //     name: "movieSlice",
    //     initialState: { searchResults: [] },
    //     reducers: {},
    //     extraReducers: builder => {
    //         builder.addCase(loadMoviesBySearch.fulfilled, (state, action) => {
    //             state.searchResults = action.payload;
    //         });
    //     },
    // });




})

export const movieActions = {...movieSlice.actions, loadMovies,loadMoviesByGenre,loadMoviesBySearch};

export default movieSlice;