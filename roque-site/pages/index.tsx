import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Suspense } from 'react'
import {
  Center,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  useMediaQuery,
  VStack
} from '@chakra-ui/react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Zacata from '../components/3D/Zacata'

// const Zacata = dynamic(() => import('../components/3D/Zacata'))

const index = () => {
  const color = useColorModeValue('black', 'white')
  const bg = useColorModeValue('white', 'black')
  const lightingColor = 'gold'
  const headingSize = '8rem'

  const [isLTmd] = useMediaQuery('(min-width: 48em)')

  const canvasHeight = isLTmd ? '100%' : '500px'
  const canvasStyle = { background: bg, height: canvasHeight }
  return (
    <>
      <Head>
        <title>{"Roque's site"}</title>
      </Head>
      <Stack
        w="100%"
        h="100%"
        direction={isLTmd ? 'row' : 'column'}
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
          borderLeftWidth={isLTmd ? 1 : 0}
          borderColor={color}
        >
          <Canvas style={canvasStyle}>
            <OrbitControls
              autoRotate
              enableZoom={isLTmd}
              enableRotate={isLTmd}
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
