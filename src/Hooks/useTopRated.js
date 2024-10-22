import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { addTopRatedMovies } from '../utils/movieSlice';


const useTopRated=()=>{
    const dispatch=useDispatch();
  const getTopRated=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1', API_OPTIONS);
    const json =await data.json();
    console.log(json)
    
    dispatch(addTopRatedMovies(json.results));
  }

  useEffect(()=>{
    getTopRated();
  },[]);

}

export default useTopRated;