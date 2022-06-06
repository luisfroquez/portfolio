import { Center, Heading } from '@chakra-ui/react'
import Head from 'next/head'

const Contact = () => {
  return (
    <>
      <Head>
        <title>{"Let's get in touch!"}</title>
      </Head>

      <Center w="100%" h="100%">
        <Heading fontSize="11xl">{"CONTACT"}</Heading>
      </Center>
    </>
  )
}

export default Contact