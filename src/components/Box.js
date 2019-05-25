import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    ${({stretch}) => stretch ? `width: 100%` : `width: 400px`};
    margin: 1rem auto 2rem;
    font-family: sans-serif;
`;

const Title = styled.h1`
    font-size: 1.2rem;
    text-transform: uppercase;
    color: #333;
`;

const StyledBox = styled.div`
    border-radius: 3px;
    box-shadow: 0 3px 12px rgba(0,0,0,0.2);
    padding: 3rem;
    width: 100%;
    height: auto;
    ${({withAttitude}) => withAttitude
    ? `
        border: 2px dashed #333;
        color: eggplant;
    ` : `
        border: none;
        color: #555;
    `}
`;


export default ({title, children, stretch, withAttitude}) => {
    return (
        <Container stretch={stretch}>
            <Title>{title}</Title>
            <StyledBox withAttitude={withAttitude}>{children}</StyledBox>
        </Container>
    )
}