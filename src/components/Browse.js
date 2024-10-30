import React from 'react'
import Header from './Header'
import useNowPlaying from '../Hooks/useNowPlaying'
import MainTrailer from './MainTrailer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRated from '../Hooks/useTopRated';
import useUpcoming from '../Hooks/useUpcoming';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {

  const showGPTSearch=useSelector((store)=>store.gpt.showGPTSearch);

  useNowPlaying();
  usePopularMovies();
  useTopRated();
  useUpcoming();

  return (
    <div>
      <Header/>
      {showGPTSearch?(
        <GptSearch/>
      ):(
        <>
        <MainTrailer/>
        <SecondaryContainer/>
        </>
      )
}
      

    </div>
  )
}

export default Browse