import React from 'react'
import { Wrapper } from '../Button/button.styles'

//the return function 
const Button =({text,callback}) =>(
  <Wrapper type="button" onClick={callback}>
      {text}
  </Wrapper>
)

export default Button;