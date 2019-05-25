import styled from 'styled-components';

export default styled.button`
    border-radius: 3px;
    background: #fff;
    border: 1px solid #999;
    padding: 0.7rem 1.6rem;
    font-size: 1rem;
    ${({primary}) => primary 
        ? `background: #000;
        color: #fff;`
        : `background: #fff;
        color: #111;`}
`;