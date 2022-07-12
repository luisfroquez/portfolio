import {
  Box,
  Center,
  Heading,
  Text,
  useColorModeValue,
  VStack,
  Flex
} from '@chakra-ui/react'
import styles from '../../styles/modules/home/about.module.css'

const About = () => {
  const bgText = useColorModeValue('#00000005', 'gray.800')

  return (
    <Center
      as="div"
      id="about"
      minH="100vh"
      maxH="100vh"
      w="100%"
      flexDir="column"
      justifyContent="space-between"
      color="gray.100"
    >
      <Center h="100%" w="100%" mt="8em">
        <Box
          border="1px"
          borderColor="#40404180"
          w="60em"
          minH="22em"
          borderRadius="2.5em"
          flexDir="row"
          display="flex"
          p="2em"

        >
          <Box
            w="50%"
            h="100%"
            alignItems="center"
            justifyContent="flex-end"
            pos="relative"
          >
            <img
              className={styles.img}
              src="/Luis-Roque.png"
              alt="Foto de Luis Roque"
            />
          </Box>
          <Flex
            w="50%"
            h="fill"
            justifyContent="space-between"
            flexDir="column"
            p="1em"
          >
            <VStack
              align="flex-end"
              w="100%"
              spacing={0}
              pos="relative"
              h="6em"
              justify="flex-end"
            >
              <div className={styles.divName}>
                <Heading fontSize="2rem" lineHeight="2rem">
                  Luis Roque
                </Heading>
                <Text lineHeight="0.75rem" fontSize="0.75rem">
                  Graphic Designer + Web Developer
                </Text>
              </div>
              <Text
                fontSize="10rem"
                fontWeight="bold"
                color="gray.500"
                pos="absolute"
                bottom="-0.48em"
              >
                ABOUT
              </Text>
            </VStack>
            <VStack
              align="flex-end"
              w="20em"
              spacing="2em"
              justify="flex-start"
            >
              <Text lineHeight="0.75rem" fontSize="0.75rem">
                I'm a graphic designer in love with Web Development and
                enthusiastic about the Blockchain world.
              </Text>
              <Text lineHeight="0.75rem" fontSize="0.75rem">
                I'm currently working as a Software Developer at{' '}
                <b>BECHEM SUDAMERIKA.</b>
              </Text>
            </VStack>
          </Flex>
        </Box>
      </Center>
      <Center w="100%" mb="3em">
        <Center w="36em" minH="4em">
          <p>stack</p>
        </Center>
      </Center>
    </Center>
  )
}

export default About
