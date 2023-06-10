import { GetStaticProps } from 'next'
import Link from 'next/link'
import { User } from '@prisma/client'
import styled from "styled-components";
import prisma from '@/lib/prisma';
import UserCard from '@/components/UserCard/UserCard';
import { useRouter } from 'next/dist/client/router';
import { useBack } from '@/hooks/useBack';
import NavigationButton from '@/components/NavigationButton/NavigationButton';
import Title from '@/components/Title/Title';
import SearchInput from '@/components/SearchInput/SearchInput';
import { useState } from 'react';
import VRBunner from '@/components/VRBanner/VRBunner';



type UsersPageProps = {
    users: User[]
}

const StyledUserCardsContainer = styled.section`
    display: flex;
    flex-direction: row;
    gap: 16px;
    flex-wrap: wrap;
    @media (min-width: 320px) and (max-width: 900px) {
        gap: 8px;
        flex-direction: column;
    }
`

const StyledUsersPage = styled.section`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 24px;
    @media (min-width: 320px) and (max-width: 900px) {
        padding: 16px;
    }
    
`

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const StyledMainContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 32px;
    @media (min-width: 320px) and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

`


export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
    const users = await prisma.user.findMany()
    return {
        props: {
            users
        }
    }
}


export default function UsersPage(props: UsersPageProps) {

    const { handleBack } = useBack()
    const [searchField, setSearchField] = useState<string>("");

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchField(event.target.value)
        console.log(searchField)
    }

    return (
        <StyledUsersPage>
            <NavigationButton onClick={handleBack} text="Назад" />
            <Title text="Пользователи" />
            <StyledMainContainer>
                <StyledContainer>
                    <SearchInput value={searchField} onChange={handleChange} />
                    <StyledUserCardsContainer>
                        {props.users.filter(user => user.name.toLowerCase().includes(searchField.toLowerCase())).map(user => {
                            return <UserCard id={user.id} key={user.id} name={user.name} position={user.position} />
                        })}
                    </StyledUserCardsContainer>
                </StyledContainer>
                <StyledContainer>
                    <VRBunner />
                </StyledContainer>
            </StyledMainContainer>
        </StyledUsersPage>
    )
}
