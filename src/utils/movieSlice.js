import { createSlice } from "@reduxjs/toolkit";


const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowplaying:null,
        trailerVideo:null,
        popularMovies:null,
        topRated:null,
        upcoming:null,
     
    },
    reducers:{
        addNowPlaying:(state,action)=>{
            state.nowplaying=action.payload;
    },
    addPopularMovies:(state,action)=>{
        state.popularMovies=action.payload;
    },
    addTopRatedMovies:(state,action)=>{
    state.topRated=action.payload;
    },
    addUpcomingMovies:(state,action)=>{
        state.upcoming=action.payload;
    },
    addTrailerVideo:(state,action)=>{
        state.trailerVideo=action.payload;
    },
    },
});
export const {addNowPlaying,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies}=movieSlice.actions;
export default movieSlice.reducer;