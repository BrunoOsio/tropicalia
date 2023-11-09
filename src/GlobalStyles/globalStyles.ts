import { createGlobalStyle } from "styled-components";
import { colors } from "./globalValues";
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* background-color: rgba(230, 0, 0, 0.1); */
  }

  body {
    background-color: ${colors.greenBackground};
    
  }
`