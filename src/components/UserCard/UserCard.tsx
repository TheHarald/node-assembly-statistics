import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Delete } from '@styled-icons/fluentui-system-filled/Delete'
import { FilePerson } from '@styled-icons/bootstrap/FilePerson'
import React from 'react';
import prisma from '@/lib/prisma';
type UserCardProps = {
    name: string,
    position: string,
    id: string,
};

const StyledUserCard = styled.article`
    background: #E6E9F4;
    border-radius: 8px;
    padding: 16px;
    display: flex;
    flex-direction: row;
    gap: 16px;  
    /* width: min-content; */
    transition: 0.3s;

    &:hover{    
        background: #D7DBEC;
        cursor: pointer;
    }
    @media (min-width: 320px) and (max-width: 900px) {
        width: 100%;
    }
    
`;

const StyledName = styled.h4`
    font-size: 24px;
    color: #007AFF;
    font-weight: 500;
    white-space: nowrap;
    @media (min-width: 320px) and (max-width: 900px) {
        font-size: 20px;
    }
`

const StyledPosition = styled.span`
    font-size: 18px;
    color: #9A9A9A;
    font-weight: 400;
    white-space: nowrap;
    @media (min-width: 320px) and (max-width: 900px) {
        font-size: 14px;
        white-space: normal;
    }
`

const StyledDeleteButton = styled(Delete)`
    color: #F12B43;
    width: 24px;
    height: 24px;
    margin-left: auto;
    &:hover{
        color: #F0142F;
        cursor: pointer;
    }
`

const StyledAvatar = styled(FilePerson)`
    color: #9A9A9A;
    width: 48px;
    height: 48px;
`

const StyledMainInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

function UserCard(props: UserCardProps) {

    const { push, asPath, replace } = useRouter()

    function handleClick() {
        push(`/users/${props.id}`)
    }

    function handleDelete(event: React.MouseEvent<SVGSVGElement>) {
        fetch(`/api/users/${props.id}`, { method: 'DELETE' }).then(response => response.json()).then(data => {
            console.log(data);
            replace(asPath)
        })
        event.stopPropagation()

    }

    return (
        <StyledUserCard onClick={handleClick}>
            <StyledAvatar></StyledAvatar>
            <StyledMainInfo>
                <StyledName>{props.name}</StyledName>
                <StyledPosition>{props.position}</StyledPosition>
            </StyledMainInfo>
            <StyledDeleteButton onClick={handleDelete}></StyledDeleteButton>
        </StyledUserCard>
    );
}

export default UserCard;