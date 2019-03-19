import React from 'react'
import { createGlobalStyle } from 'styled-components'

const global = createGlobalStyle`
  body {
    margin: 0;
  }
`

export default () => (
  <>
    <h1>Hello world!</h1>
    <h2>Hello world!</h2>
    <h3>Hello world!</h3>
    <h4>Hello world!</h4>
  </>
)
