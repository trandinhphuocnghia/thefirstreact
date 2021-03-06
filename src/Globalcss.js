

import {createGlobalStyle} from 'styled-components'

//created component form global css
export const Globalcss = createGlobalStyle`
:root{
  --maxWidth: 1280px;
  --white: #fff;
  --light: #eee;
  --medGrey: #8a8888;
  --darkGrey: #b0adad;
  --fontSuperBig: 2.5rem;
  --fontBig: 1.5rem;
  --fontMed: 1.2rem;
  --fontSmall: 1rem;
  --maxSize :100px;
  --colortext: rgb(248, 14, 14);
  --black: rgba(5, 5, 5, 0.067);
}

*{
    box-sizing: border-box;
    font-family:Arial, Helvetica, sans-serif;
  
}
  body{
    margin: 0;
    padding: 0;
  
  
  h1{
    font-size: 2rem;
    font-weight: 600;
    color: var(--white)
  }
  
  h3{
    font-size: 1.1rem;
    font-weight: 600;
  }

  p{
      font-size: 1rem;
      color: var(--white);
  }
}

`
