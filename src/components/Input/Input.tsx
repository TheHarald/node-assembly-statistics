import React, { HTMLInputTypeAttribute } from 'react';
import styled from 'styled-components';

type InputProps = {
    label?: string;
    inputRef: React.Ref<HTMLInputElement>
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
};

const StyledInput = styled.input`
    display: flex;
    flex-direction: row;
    justify-content: center;    
    align-items: center;
    padding: 12px 12px 12px 16px;
    outline: none;
    background: #FFFFFF;
    border: 1px solid #A1A7C4;
    border-radius: 6px;
    flex-grow: 1;
`;

const StyledLabel = styled.label`
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    text-transform: uppercase;
    color: #7E84A3;
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
`

function Input(props: InputProps) {
    return (
        <StyledLabel>
            {props.label}
            <StyledInput ref={props.inputRef} type={props.type} placeholder={props.placeholder}>
            </StyledInput>
        </StyledLabel>
    );
}

export default Input;