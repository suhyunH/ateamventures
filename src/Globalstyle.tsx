import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");
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
    border-radius: 4px;
    padding: 0 8px;
}

`

export default GlobalStyle;