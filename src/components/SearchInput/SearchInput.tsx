import React from 'react';
import styled from 'styled-components';

type SearchInputProps = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string
};

const StyledSearchInput = styled.input`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 18px;
    gap: 8px;
    border: 1px solid #A1A7C4;
    border-radius: 6px;
    max-width : 600px;
`;

function SearchInput(props: SearchInputProps) {
    return (
        <StyledSearchInput onChange={props.onChange} value={props.value} placeholder='Поиск пользователей'>
        </StyledSearchInput>
    );
}

export default SearchInput;