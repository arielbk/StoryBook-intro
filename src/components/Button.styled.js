import styled from 'styled-components';

export default styled.button`
    border-radius: 3px;
    background: #fff;
    border: 1px solid #999;
    padding: 0.7rem 1.6rem;
    margin: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
    ${({primary}) => primary 
        ? `background: #000;
        color: #fff;`
        : `background: #fff;
        color: #111;`}

    :focus {
        background: #555;
        color: #fff;
        outline: none;
    }
    :hover {
        transform: translateY(-2px);
        box-shadow: 0 3px 7px rgba(0,0,0,0.1);
    }
`;