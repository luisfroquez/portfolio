import { useEffect, useState } from 'react'
import {
  Button,
  HStack,
  Text,
  useColorMode,
  useColorModeValue,
  useMediaQuery
} from '@chakra-ui/react'
import { MenuItems } from './MenuItems'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import Link from 'next/link'
import { ColorModeToggle } from './ThemeToggle/ColorModeToggle'
import Socials from './Socials'

const Navbar = () => {
  const [isLarge, setIsLarge] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const color = useColorModeValue('black', 'white')
  const bg = useColorModeValue('white', 'black')
  const { colorMode } = useColorMode()

  //isLargerThan"md"
  const [isLTmd] = useMediaQuery('(min-width: 48em)')

  useEffect(() => {
    setIsLarge(isLTmd)
  }, [isLTmd])

  return (
    <HStack
      color={color}
      bg={bg}
      justifyContent="space-between"
      px={[4, 10]}
      py={[2, 5]}

      width="100%"
      alignItems="center"
    >
      <Link href="/">
        <Button fontWeight="normal" fontSize={['md', 'xl']}>
          LUIS<Text fontWeight="extrabold">ROQUE</Text>
        </Button>
      </Link>
      <HStack spacing={{ md: 5 }}>
        <HStack>
          <ColorModeToggle />
          <Socials isLarge={isLarge} />
        </HStack>
        {isLarge ? (
          MenuItems.map((m, i) => (
            <Link href={m.link} key={i}>
              <Button
                isActive={isActive}
                variant={colorMode === 'light' ? 'light' : 'dark'}
                fontSize="xl"
              >
                {m.name}
              </Button>
            </Link>
          ))
        ) : (
          <Button variant="primary">
            <HiOutlineMenuAlt4 />
          </Button>
        )}
      </HStack>
    </HStack>
  )
}

export default Navbar
