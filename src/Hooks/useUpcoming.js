import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { addUpcomingMovies } from '../utils/movieSlice';



const useUpcoming=()=>{
    const dispatch=useDispatch();
  const getUpcoming=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1', API_OPTIONS);
    const json =await data.json();
    
    
    dispatch(addUpcomingMovies(json.results));
  }

  useEffect(()=>{
    getUpcoming();
  },[]);

}

export default useUpcoming;