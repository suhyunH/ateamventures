import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
body {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    font-family: "Noto Sans KR", sans-serif;
    font-stretch: normal;
    font-style: normal;
  }
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li{
    list-style: none;
}
button{
    align-items: center;
    border-radius: 2px;
    border: none;
    padding: 4px 8px;
}

`

export default GlobalStyle;