import { createSlice } from "@reduxjs/toolkit";


const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowplaying:null,
        trailerVideo:null,
    },
    reducers:{
        addNowPlaying:(state,action)=>{
            state.nowplaying=action.payload;
    },
    addTrailerVideo:(state,action)=>{
        state.trailerVideo=action.payload;
    },
    },
});
export const {addNowPlaying,addTrailerVideo}=movieSlice.actions;
export default movieSlice.reducer;