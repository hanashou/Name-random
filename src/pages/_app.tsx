import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { FC } from 'react'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return(
    <>
    <Head>
    <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
      <link rel="stylesheet" href="https://indestructibletype-fonthosting.github.io/renner.css" />
    </Head>
    <ChakraProvider
    theme={extendTheme({
      fonts: {
        heading: 'Renner*',
      },
    })}
    >
      <Box>
        <Component {...pageProps}/>
      </Box>
    </ChakraProvider>
    </>
  )
}

export default MyApp
