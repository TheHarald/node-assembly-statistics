import React from 'react';
import styled from 'styled-components';
import { CardList } from '@styled-icons/bootstrap/CardList'

type EmptyProps = {};

const StyledEmpty = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    /* width: 100px; */
   align-items: center;
`;

const StyledEmptyIcon = styled(CardList)`
    color:#A1A7C4;
    width: 64px;
    height: 64px;
`

const StyledTitle = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #131523;
    text-align: center;
`

function Empty(props: EmptyProps) {
    return (
        <StyledEmpty>
            <StyledEmptyIcon>
            </StyledEmptyIcon>
            <StyledTitle>
                Пока пусто, выберите сборку узла чтобы посмотреть ошибки.
            </StyledTitle>

        </StyledEmpty>
    );
}

export default Empty;