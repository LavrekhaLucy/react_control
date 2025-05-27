import { createSlice} from "@reduxjs/toolkit";
import type {IPoster} from "../models/IImages/IPoster.ts";

type imageSliceType = {
    image: IPoster[];
}

const initImageSliceState: imageSliceType = {image:[]};

export const imageSlice =createSlice ({
    name:'imageSlice',
    initialState:initImageSliceState,
    reducers:{},
    extraReducers:builder => builder
})