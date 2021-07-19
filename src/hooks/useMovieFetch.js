import { useState,useEffect,useCallback } from "react";
import API from '../API'
import { Sessionstorage } from "../helpers";


export const  useMovieFetch = (movieId) => {
    const [state,setState] = useState({});
   // the flag to config spinners.
    const [loading,setLoading] = useState (true);
    const [error,setError] = useState (false);

    // use callBack để tối ưu componet vì mỗi lần click vào movie poster sẽ render component này.
    const fetchData = useCallback (async () =>{
        try{
            setLoading(true)
            setError(false)

            const movie = await API.fetchMovie(movieId)
            const credits = await API.fetchCredits(movieId)
            //Get directors in themoviedb filters job equal 'Director'
            const directors = credits.crew.filter(  member => member.job === 'Director' )

            setState({
                ...movie,
                //get arr casts
                 actors :credits.cast,
                 
                directors
            })

            setLoading(false)
        }catch(error){
            setError(true)
        }
    },[movieId])
    
    useEffect(()=>{
        document.title="Movie details"
        
        //config session storage
        const sessionStorage = Sessionstorage(movieId);

        if(sessionStorage){

            setState(sessionStorage)
            setLoading(false)
            return
        }
        fetchData();
    }, [movieId,fetchData])

    //write session for movie details
    useEffect(() =>{
     sessionStorage.setItem(movieId,JSON.stringify(state))
    },[movieId,state])
return{state,loading,error}
}