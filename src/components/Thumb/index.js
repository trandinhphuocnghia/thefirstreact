import React from 'react'
import { Image } from './Thumb.style'

//arrow func with props
const Thumb = ({image,movieId,clickable})=>(
    <div>
        <Image src={image} alt='movie-thumb'/> 
    </div>

)

export default Thumb;