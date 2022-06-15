import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import { theme } from '../theme/theme'
import React, { useEffect, useState } from 'react'
const LogoSpiner = dynamic(() => import('../components/Loader/LogoSpiner'))

function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setIsMounted(true)
      }, 3000)
    }
  }, [])

  // useEffect(() => {
  //   setIsMounted(true)
  // }, [])

  return (
    <ChakraProvider theme={theme}>
      {isMounted ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <LogoSpiner />
      )}
    </ChakraProvider>
  )
}

export default MyApp
