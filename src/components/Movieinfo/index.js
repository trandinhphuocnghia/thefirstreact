import React from "react";
import { Wrapper,Content,Text } from "./movie.styles";
import Thumb from "../Thumb";
import { IMAGE_BASE_URL,POSTER_SIZE } from "../../config";
import NoImg from '../../images/no_image.jpg'
const Movieinfo = ({movie}) =>(
<Wrapper backdrop={movie.backdrop_path}>
    <Content>
    <Thumb 
    image = {
        movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`:NoImg    
    }
    clickable={false}
    
    />
    <Text>
        <h1>{movie.title}</h1>
        <h3>DESCRIPTIONS</h3>
        <p>{movie.overview}</p>

        <div className="rating-directors">
            <div>
                <h3>RATING</h3>
                <div className="score">{movie.vote_average}</div>

            </div>
            <div className="director">
                <h3>
                   DIRECTOR {movie.directors.length > 1 ? 'S' : '' }
                   
                   {movie.directors.map(director =>(
                       <p key = {director.credit_id}>{director.name}</p>
                   ))}
                </h3>
            </div>
        </div>

    </Text>
    </Content>
</Wrapper>
)

export default Movieinfo
