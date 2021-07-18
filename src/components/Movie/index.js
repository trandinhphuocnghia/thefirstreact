import React from 'react'
import { useParams } from 'react-router-dom'
import { IMAGE_BASE_URL,POSTER_SIZE } from '../../config'
//componnent
import BreadCrumb from '../BreadCrumb'
import Grid from '../Grids/index'
import Spinner from '../Spinner/index'
import Movieinfo from '../Movieinfo'
//Hook
import { useMovieFetch } from '../../hooks/useMovieFetch'

const Movie = () => {
    const {movieId} = useParams();
    //rename state is movie
    const {state:movie, loading,error} = useMovieFetch(movieId)
    if (loading) return <Spinner/>

   console.log(movie)
  return(
  
    //movie is state
  <>
   <BreadCrumb movieTitle={movie.original_title} />
   <Movieinfo movie={movie}/>
  </>
)
}
export default Movie