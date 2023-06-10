import React from 'react';
import styled from 'styled-components';
import { Warning } from '@styled-icons/entypo/Warning'

type NotificationProps = {
    label: string;
    text: string
};

const StyledNotification = styled.article`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px;
    gap: 12px;
    background: rgba(255, 189, 33, 0.1);
    border-radius: 8px;
`;

const StyledTitle = styled.h5`
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #FFB608;
`
const StyledInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
`

const StyledText = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #5A607F;
`

const StyledWarning = styled(Warning)`
    color: #FFBD21;
    width: 24px;
    height: 24px;
`

function Notification(props: NotificationProps) {
    return (
        <StyledNotification>
            <StyledWarning>

            </StyledWarning>
            <StyledInfoContainer>
                <StyledTitle>
                    {props.label}
                </StyledTitle>
                <StyledText>
                    {props.text}
                </StyledText>

            </StyledInfoContainer>
        </StyledNotification>
    );
}

export default Notification;