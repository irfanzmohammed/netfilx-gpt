import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies=useSelector(store=>store.movies) ;
  return (
    
    <div className="bg-black">
      <div className=" -mt-52 pl-12 relative z-20">
      <MovieList title={"Now Playing"} movies={movies.nowplaying} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRated} />
      <MovieList title={"Upcoming"} movies={movies.upcoming} />
    </div>
    </div>
    
    
  )
}

export default SecondaryContainer