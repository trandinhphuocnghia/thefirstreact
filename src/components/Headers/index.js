import React from 'react'
import RMDBLogo from '../../images/react-movie-logo.svg'
import TmdbLogo from 'C:\\Users\\Mysterious\\thefirstreact\\src\\images\\tmdb_logo.svg'
import  {Wrapper,Content,LogoImg,TMDBLogo} from './Header.styles'

const Header = () => (
    <Wrapper>
        <Content>
        <LogoImg src={RMDBLogo} alt='rmdb-logo'/>
       
        </Content>
    </Wrapper>
);

export default Header;