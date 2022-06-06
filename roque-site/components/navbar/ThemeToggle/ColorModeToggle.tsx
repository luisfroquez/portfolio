import {
  useColorMode,
  useColorModeValue,
  Button,
  Tooltip
} from '@chakra-ui/react'
import { MoonIcon } from '../../Icons/MoonIcon'
import { SunIcon } from '../../Icons/SunIcon'

export const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const color = useColorModeValue('black', 'white')
  const bg = useColorModeValue('white', 'black')
  const SwitchIcon = colorMode === 'light' ? <MoonIcon /> : <SunIcon />
  const label = colorMode === 'light' ? 'OFF' : 'ON'

  return (
    <Tooltip label={`Lights ${label}`} background={bg} color={color} placement="left" shadow="none">
      <Button onClick={toggleColorMode} variant={colorMode === 'light' ? 'light' : 'dark'} _focus={{border:"none"}} mr={1}>{SwitchIcon}</Button>
    </Tooltip>
  )
}
