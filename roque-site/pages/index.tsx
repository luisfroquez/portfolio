import {
  Center,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  useMediaQuery,
  VStack
} from '@chakra-ui/react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import { Suspense, useState } from 'react'
import Zacata from '../components/3D/Zacata'

const index = () => {
  const color = useColorModeValue('black', 'white')
  const bg = useColorModeValue('white', 'black')
  const lightingColor = 'white'
  const headingSize = '8rem'
  //isLargerThan"md"
  const [isLarger] = useMediaQuery('(min-width: 48em)')
  const canvasHeight = isLarger ? '100%' : '500px'

  const canvasStyle = { background: bg, height: canvasHeight }
  return (
    <>
      <Head>
        <title>{"Roque's site"}</title>
      </Head>
      <Stack
        w="100%"
        h="100%"
        direction={isLarger ? 'row' : 'column'}
        spacing={0}
        borderBottomWidth={1}
        borderColor={color}
      >
        <VStack align="left" p={[4, 10]} h="100%">
          <Heading fontSize={headingSize} lineHeight={headingSize}>
            Hello.
          </Heading>
          <Heading fontSize={headingSize} lineHeight={headingSize}>
            I am
          </Heading>
          <Heading fontSize={headingSize} lineHeight={headingSize}>
            Luis!
          </Heading>
          <Text as="h2" fontSize="xl" lineHeight={headingSize} pl={2}>
            a cool frontend desingveloper
          </Text>
        </VStack>

        <Center
          w="100%"
          h={canvasHeight}
          bg={bg}
          overflow="visible"
          borderLeftWidth={isLarger ? 1 : 0}
          borderColor={color}
        >
          <Canvas style={canvasStyle}>
            <OrbitControls
              autoRotate
              enableZoom={isLarger}
              enableRotate={isLarger}
            />

            <directionalLight
              position={[1, 1, 1]}
              intensity={150}
              color={lightingColor}
            />
            <directionalLight
              position={[0, 1, 0]}
              intensity={50}
              color={lightingColor}
            />
            <directionalLight
              position={[1, 0, 0]}
              intensity={50}
              color={lightingColor}
            />
            <directionalLight
              position={[0, 0, -1]}
              intensity={50}
              color={lightingColor}
            />
            <directionalLight
              position={[0, -1, 0]}
              intensity={50}
              color={lightingColor}
            />
            <directionalLight
              position={[-1, 0, 0]}
              intensity={50}
              color={lightingColor}
            />
            <Suspense fallback={null}>
              <Zacata />
            </Suspense>
          </Canvas>
        </Center>
      </Stack>
    </>
  )
}

export default index
