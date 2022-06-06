import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import { theme } from '../theme/theme'
import { useEffect, useState } from 'react'
import LogoSpiner from '../components/Loader/LogoSpiner'

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
  }, [])

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        {isLoading ? <LogoSpiner /> : <Component {...pageProps} />}
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
