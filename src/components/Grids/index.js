import React from 'react'
//Styles
import { Wrapper,Content } from '../Grids/Grids.style'

//Grid func with props objects {headers,children}
const Grid = ({headers,children}) => (
    //Components
    <Wrapper>
        <h1>{headers}</h1>
        <Content>{children}</Content>
    </Wrapper>

)

export default Grid