import React from 'react';
import styled from 'styled-components';
import { StyledIcon } from '@styled-icons/styled-icon'
import { StyledIconBase } from '@styled-icons/styled-icon'

type ParameterProps = {
    icon: JSX.Element;
    title: string;
    value: string
};

const StyledParameter = styled.article`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    @media (min-width: 320px) and (max-width: 900px) {
        display: grid;
        grid-template-columns: 24px 1fr 1fr;
    }
`;

const StyledTitle = styled.span`
    font-weight: 600;
    font-size: 18px;
    color: #7E84A3;
    min-width: 200px;
    @media (min-width: 320px) and (max-width: 900px) {
        white-space: normal;
        font-size: 16px;
        min-width: unset;
    }
`;
const StyledValue = styled.span`
    font-weight: 600;
    font-size: 18px;
    color: #131523;
    white-space: nowrap;
    @media (min-width: 320px) and (max-width: 900px) {
        white-space: normal;
        font-size: 16px;
    }
`;


const StyledIconContainer = styled.span`
    ${StyledIconBase} {
        width: 24px;
        height: 24px;
        color: #7E84A3
    }
    
`;



function Parameter(props: ParameterProps) {
    return (
        <StyledParameter>
            <StyledIconContainer>
                {props.icon}
            </StyledIconContainer>
            <StyledTitle>
                {props.title}
            </StyledTitle>
            <StyledValue>
                {props.value}
            </StyledValue>
        </StyledParameter>
    );
}

export default Parameter;