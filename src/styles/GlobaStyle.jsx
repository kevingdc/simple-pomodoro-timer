import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    /* Variables */
    --white: #eeeeee;
    --white-highlighted: rgba(255, 255, 255, 0.5);
    --red: #ec4546;
    --light-red: #ef5a5a;

    font-size: 62.5%;
  }

  html, body, #root, #root>div {
    height: 100%
  }

  body {
    margin: 0;
    font-size: 1.6rem;
    font-family: "Roboto", sans-serif;
  }
`;

export default GlobalStyle;
