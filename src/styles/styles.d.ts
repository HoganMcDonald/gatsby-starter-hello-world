import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      green: string
      blue: string
      purple: string
      darkgray: string
      gray: string
      lightgray: string
      white: string
      black: string
    }
    breakpoints: {
      tablet: string
      mobile: string
    }
  }
}
