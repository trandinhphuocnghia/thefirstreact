import React,{useState,useEffect} from 'react'

//config , from config.js
import { POSTER_SIZE,BACKDROP_SIZE,IMAGE_BASE_URL } from '../../config'
//components
import MainImage from '../MainImage'
//hooks
import {useHomeFetch} from '../../hooks/useHomeFetch'
//img
import NoImg from '../../images/no_image.jpg'
//componets
import Grid from '../Grids/index'
import Thumb from '../Thumb/index'
import Spinner from '../Spinner'
import SearchBar from '../searchbar/index'
import Button from '../Button/index'

const Title = 'React Movie'
//the class return components
const Home = () =>{
    const {state,loading,error,setSearch,search,SetIsLoadMore} = useHomeFetch()
  

 console.log(state)

 
 
 return (
 <>
 <title>{Title}</title>
 {state.results[0] ?
 <MainImage
  image = {`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
  title = {state.results[0].original_title}
  text = {state.results[0].overview}
 /> : null
 }
 <SearchBar setSearch={setSearch}/>
  <Grid headers={search ?'Results':'Popular Movies'}> 
 {state.results.map(movie =>(
    <Thumb key={movie.id}
    clickable
    image = {
        movie.poster_path?IMAGE_BASE_URL+POSTER_SIZE+movie.poster_path: NoImg
    }
    movieId={movie.id}
    />

 ))}
</Grid>
 {loading && <Spinner/>} 

 {state.page < state.total_pages && !loading && 
 (<Button text="Load More" callback={() => SetIsLoadMore(true) }/>)}
 </>

    )
}

export default Home; 


