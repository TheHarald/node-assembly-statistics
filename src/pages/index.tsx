import Link from 'next/link'
import { User } from '@prisma/client'
import styled from "styled-components";
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import { useRouter } from 'next/router';
import Title from '@/components/Title/Title';
import { useEffect, useRef, useState } from 'react';
import Notification from '@/components/Notification/Notification';


type HomeProps = {
  users: User[]
}

const StyledFormContainer = styled.form`
  /* width: 320px; */
  display: flex;
  flex-direction: column;
  gap: 16px;
`


const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  height: 100vh;
  padding: 16px;
`

const StyledErrorMessage = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #F0142F;
`

export default function Home(props: HomeProps) {

  const { push } = useRouter()
  const loginRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [errorMessage, setErrorMessage] = useState<string>('');

  function handleLogIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (loginRef.current && passwordRef.current) {
      if (loginRef.current.value === 'root' && passwordRef.current.value === 'root') {
        push('/users')
      } else {
        setErrorMessage('Логин или пароль неверный')
        setTimeout(() => {
          setErrorMessage('')
        }, 5000)
      }
    }
  }

  return (
    <StyledHome>
      <StyledFormContainer onSubmit={handleLogIn}>
        <Title text='Авторизация' />
        <Input inputRef={loginRef} label='Логин' placeholder='Введите логин' />
        <Input inputRef={passwordRef} type='password' label='Пароль' placeholder='Введите пароль' />
        {errorMessage ? <StyledErrorMessage>
          {errorMessage}
        </StyledErrorMessage> : null}
        <Button text='Войти' />
        <Notification text='Для входа используйте логин root и пароль root' label='Подсказки для входа' />
      </StyledFormContainer>
    </StyledHome>
  )
}
