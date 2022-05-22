import { extendTheme } from '@chakra-ui/react'
import { ButtonStyles as Button } from './components/buttonStyles'

export const fonts = {
  body: 'Rajdhani, system-ui, sans-serif',
  heading: 'Rajdhani, Georgia, serif',
  mono: 'Menlo, monospace'
}

export const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em'
}

export const components = { Button }

export const theme = extendTheme({ fonts, breakpoints, components })
