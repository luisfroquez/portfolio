import { Center, Heading } from '@chakra-ui/react'
import Head from 'next/head'

const index = () => {
  return (
    <>
      <Head>
        <title>{"Roque's site"}</title>
      </Head>

      <Center w="100vw" h="100vh" bg="black">
        <Heading fontSize="5em" color="white">
          {"Roque's Site"}
        </Heading>
      </Center>
    </>
  )
}

export default index
