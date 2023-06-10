import React from 'react';
import styled from 'styled-components';

type TitleProps = {
    text: string
};

const StyledTitle = styled.h2`
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    color: #131523;
    @media (min-width: 320px) and (max-width: 900px) {
        font-size: 20px;
    }
`;

function Title(props: TitleProps) {
    return (
        <StyledTitle>
            {props.text}
        </StyledTitle>
    );
}

export default Title;