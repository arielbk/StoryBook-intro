import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button.styled';
import Box from './Box';

const CountDisplay = styled.div`
    display: block;
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 2rem;
`;

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <Box title="counter">
            <CountDisplay>Count: {count}</CountDisplay>
            <Button onClick={() => setCount(count - 1)}>Decrement</Button>
            <Button onClick={() => setCount(count + 1)}>Increment</Button>
        </Box>
)};

export default Counter;