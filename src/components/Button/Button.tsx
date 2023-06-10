import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
    text: string,
    onClick?: () => void
};

const StyledButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;
    background: #1E5EFF;
    border-radius: 6px;

    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
    outline: none;
    border: none;
    appearance: none;
    transition: 0.3s;
    
    &:hover{
        cursor: pointer;
        background: #4F81FF;
    }
    &:active{
        background: #336DFF;
    }
`;

function Button(props: ButtonProps) {
    return (
        <StyledButton data-testid='button' onClick={props.onClick}>
            {props.text}
        </StyledButton>
    );
}

export default Button;