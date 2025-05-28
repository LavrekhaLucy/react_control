import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import movieSlice from "../../slices/movieSlice.ts";
import {imageSlice} from "../../slices/imageSlice.ts";
import {genreSlice} from "../../slices/genreSlice.ts";
import movieDetailSlice from "../../slices/movieDetailSlice.ts";

export const store = configureStore({
    reducer: {
        movieStoreSlice:movieSlice.reducer,
        movieDetailStoreSlice:movieDetailSlice.reducer,
        imageStoreSlice:imageSlice.reducer,
        genreStoreSlice:genreSlice.reducer,
    }
});
export const useAppSelector =useSelector.withTypes<ReturnType<typeof store.getState>>();
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
