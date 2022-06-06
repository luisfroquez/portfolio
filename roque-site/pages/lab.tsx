import { Center, Heading } from '@chakra-ui/react'
import Head from 'next/head'

const Lab = () => {
  return (
    <>
      <Head>
        <title>{"Roque's Lab"}</title>
      </Head>

      <Center w="100%" h="100%">
        <Heading fontSize="10xl">{'LABORATORY'}</Heading>
      </Center>
    </>
  )
}

export default Lab
