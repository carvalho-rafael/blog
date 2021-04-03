import {ThemeProvider} from 'styled-components'
import GlobalStyle from "../styles/globalStyle"
import { Theme } from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
      <GlobalStyle />
      </ThemeProvider>
      </>
  )
}

export default MyApp
