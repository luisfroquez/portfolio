import { Center, Heading } from '@chakra-ui/react'
import Head from 'next/head'

const About = () => {
  return (
    <>
      <Head>
        <title>{"Meet Roque!"}</title>
      </Head>

      <Center w="100%" h="100%">
        <Heading fontSize="11xl">{"ABOUT"}</Heading>
      </Center>
    </>
  )
}

export default About