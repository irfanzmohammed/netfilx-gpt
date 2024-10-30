import { createSlice } from "@reduxjs/toolkit";


const GptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGPTSearch:false,
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGPTSearch=!state.showGPTSearch
        },
    },
});

export const {toggleGptSearchView}=GptSlice.actions;

export default GptSlice.reducer;