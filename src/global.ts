import { createGlobalStyle } from 'styled-components'

import { ThemeType } from './themes'

//min-height: 100vh;
const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  body, #root {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.font};
    font-family: 'Sen', sans-serif;

    margin: 0;
    padding: 0;
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;

    overflow-x: hidden;

    margin: 0;
    padding: 0;

    outline: 1px solid red;
  }
`;

export default GlobalStyle;
