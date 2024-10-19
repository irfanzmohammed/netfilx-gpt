import React from 'react'
import Header from './Header'
import useNowPlaying from '../Hooks/useNowPlaying'
import MainTrailer from './MainTrailer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

  useNowPlaying();

  return (
    <div>
      <Header/>
      <MainTrailer/>
      <SecondaryContainer/>
      

    </div>
  )
}

export default Browse