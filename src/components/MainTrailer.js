import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainTrailer = () => {

    const movies=useSelector((store)=>store.movies?.nowplaying);
    if(!movies) return;
    const displaymovie=movies[0];
    const {original_title,overview,id}=displaymovie;

  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id} />
    </div>
  )
}

export default MainTrailer