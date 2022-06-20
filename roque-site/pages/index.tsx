import Head from 'next/head'
import { Suspense, useState } from 'react'
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
import CoolFrontend from '../components/Home/coolFrontend'
import Link from 'next/link'

const Home = () => {
  const [hover, setHover] = useState(false)
  const color = useColorModeValue('black', 'white')
  const bg = useColorModeValue('white', 'black')
  const lightingColor = 'white'

  const [isLTmd] = useMediaQuery('(min-width: 48em)')

  const canvasHeight = isLTmd ? '100%' : '500px'
  const canvasStyle = { background: bg, height: canvasHeight }

  const headingSize = hover ? '5rem' : '8rem'

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
        <VStack
          align="left"
          p={[4, 10]}
          h="100%"
          justifyContent="space-between"
        >
          <VStack
            spacing={0}
            align="left"
            w="300px"
            h="100%"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <Link href="/about">
              <Heading
                as="h2"
                fontSize={headingSize}
                lineHeight={headingSize}
                cursor="pointer"
                transition="0.5s"
                _hover={{ borderBottom: '1px white solid' }}
              >
                {hover ? 'About' : 'Hello,'}
              </Heading>
            </Link>
            <Link href="/lab">
              <Heading
                fontSize={headingSize}
                lineHeight={headingSize}
                cursor="pointer"
                transition="0.25s"
                _hover={{ borderBottom: '1px white solid' }}
              >
                {hover ? 'Work' : 'I am'}
              </Heading>
            </Link>
            <Link href="/contact">
              <Heading
                fontSize={headingSize}
                lineHeight={headingSize}
                cursor="pointer"
                _hover={{ borderBottom: '1px white solid' }}
              >
                {hover ? 'Contact' : 'Luis!'}
              </Heading>
            </Link>
          </VStack>

          <Text fontSize="1.25rem" lineHeight="1.25rem">
            {CoolFrontend()}
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

export default Home
