import {createSlice} from "@reduxjs/toolkit";
import type {IGenre} from "../models/IGenres/IGenre.ts";

type genreSliceType ={
    genreId:IGenre[]
}
const initGenreSliceState:genreSliceType ={genreId:[]}


export const genreSlice =createSlice({
    name:'genreSlice',
    initialState: initGenreSliceState,
    reducers:{},
    extraReducers:builder => builder
})