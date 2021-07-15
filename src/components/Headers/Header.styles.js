 import styled from "styled-components"

 export const Wrapper = styled.div`
 background: var(--darkGrey);
 padding: 0 20px;
 `;


 export const Content = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 max-width: var(--maxSize);
 padding: 20px 0;
 margin: 0 auto;
 `;

 export const LogoImg = styled.img`
    width : 200px;
   @media screen and (max-width: 500px){
       width :150px;
   }
 `;

 //the logo of themovie db
 export const TMDBLogo = styled.img`
   width: 200px;
   @media screen and (max-width: 500px){
       width: 150px;
   }
 `;