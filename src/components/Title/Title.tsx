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
`;

function Title(props: TitleProps) {
    return (
        <StyledTitle>
            {props.text}
        </StyledTitle>
    );
}

export default Title;