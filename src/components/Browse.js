import React from 'react'
import Header from './Header'
import useNowPlaying from '../Hooks/useNowPlaying'
import MainTrailer from './MainTrailer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRated from '../Hooks/useTopRated';
import useUpcoming from '../Hooks/useUpcoming';


const Browse = () => {

  useNowPlaying();
  usePopularMovies();
  useTopRated();
  useUpcoming();

  return (
    <div>
      <Header/>
      <MainTrailer/>
      <SecondaryContainer/>
      

    </div>
  )
}

export default Browse