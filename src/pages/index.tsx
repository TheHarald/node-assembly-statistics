import Link from 'next/link'
import { User } from '@prisma/client'
import styled from "styled-components";


type HomeProps = {
  users: User[]
}

const StyledTitle = styled.h1`
  font-size: 40px;
  color: red;
`

export default function Home(props: HomeProps) {
  return (
    <>
      <StyledTitle>Home</StyledTitle>
      <Link href={'/users'}>Прейти к пользователям</Link>
    </>
  )
}
