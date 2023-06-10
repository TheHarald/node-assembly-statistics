import React from 'react';
import styled from 'styled-components';

type NavigationButtonProps = {
    text: string;
    onClick: () => void
};

const StyledNavigationButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 14px;
    background: #FFF;
    border-radius: 6px;
    color: #1E5EFF;
    width: min-content;

    font-weight: 500;
    font-size: 18px;
    text-align: center;
    text-decoration: none;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    outline: none;
    border: none;
    &:hover{
        cursor: pointer;
        background: #efefef;
    }
    @media (min-width: 320px) and (max-width: 900px) {
        font-size: 16px;
    }
`;

function NavigationButton(props: NavigationButtonProps) {
    return (
        <StyledNavigationButton onClick={props.onClick}>
            {props.text}
        </StyledNavigationButton>
    );
}

export default NavigationButton;