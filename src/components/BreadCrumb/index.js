import React from 'react'
import { Wrapper,Content } from '../BreadCrumb/breadcrumb.styles'
import { Link } from 'react-router-dom';


const BreadCrumb = ({movieTitle}) => (
 <Wrapper>
     <Content>
         <Link to='/'>
             <span>Home</span>
         </Link>
        <span>|</span>
        <span>{movieTitle}</span>

     </Content>
 </Wrapper>
);

export default BreadCrumb