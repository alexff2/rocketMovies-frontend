import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Roboto Slab', serif;
  }

  body {
    background-color: ${({theme}) => theme.COLORS.background1};
    color: ${({theme}) => theme.COLORS.text1};
  }
`