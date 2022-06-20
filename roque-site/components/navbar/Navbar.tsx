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
  const color = useColorModeValue('black', 'white')
  const bg = useColorModeValue('white', 'black')
  const { colorMode } = useColorMode()

  //isLargerThan"md"
  const [isLTmd] = useMediaQuery('(min-width: 48em)')

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
        <Button fontWeight="normal" fontSize={['md', 'xl']} p={0}>
          LUIS<Text fontWeight="extrabold">ROQUE</Text>
        </Button>
      </Link>
      <HStack spacing={{ md: 5 }}>
        <HStack>
          <ColorModeToggle />
          <Socials isLarge={isLTmd} />
        </HStack>
        {isLTmd ? (
          MenuItems.map((m, i) => (
            <Link href={m.link} key={i}>
              <Button
                isActive={false}
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
