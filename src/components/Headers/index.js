import React from 'react'
import RMDBLogo from '../../images/react-movie-logo.svg'
import  {Wrapper,Content,LogoImg,TMDBLogo} from './Header.styles'
import { Link } from 'react-router-dom'
const Header = () => (
    <Wrapper>
        <Content>
            <Link to ="/" >
            <LogoImg src={RMDBLogo} alt='rmdb-logo'/>
            </Link> 
         </Content>
    </Wrapper>
);

export default Header;