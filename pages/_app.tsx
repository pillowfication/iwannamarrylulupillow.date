import React, { useEffect } from 'react'
import Head from 'next/head'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import theme from '../src/theme'

const useStyles = makeStyles(() => ({
  main: {
    paddingTop: '4rem',
    paddingBottom: '6rem'
  }
}))

interface Props {
  Component: React.ComponentClass
  pageProps?: object
}

const App = ({ Component, pageProps }: Props): React.ReactElement => {
  const classes = useStyles()

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    jssStyles?.parentElement?.removeChild(jssStyles)
  }, [])

  return (
    <>
      <Head>
        <title>I wanna marry Lulu Pillow</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth='lg' className={classes.main} component='main'>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
