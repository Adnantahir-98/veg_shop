
import React from 'react';
import styled from '@emotion/styled';

const SliderContent = styled.div`
    transform: translateX(-${props => props.translate}px);
    transition: transform ease-out ${props => props.transition}s;
    height: ${props => props.width}px;
    display: flex;
    background: red;
    `

export default SliderContent;

