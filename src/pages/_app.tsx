import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import 'typeface-inter';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    transition: 0.3s;
  }
`

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
}
