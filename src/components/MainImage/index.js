import React from 'react'
//styles (css)
import { Wrapper,Content,Text } from '../MainImage/MainImage.style'

const MainImage = ({image,title,text}) => (
    <Wrapper image = {image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text }</p>
            </Text>
        </Content>
    </Wrapper>
)

export default MainImage;