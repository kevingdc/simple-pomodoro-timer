import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    /* Variables */
    --white: #eeeeee;
    --white-shadow: rgb(205, 205, 205);
    --white-hover: rgb(235, 235, 235);
    --red: #ec4546;
    --heading-red-bg: #cc4d4c;
    --light-red: #ef5a5a;
    --border-radius: 4px;
    --cubic-bezier: cubic-bezier(0.215, 0.61, 0.355, 1);

    font-size: 62.5%;
  }

  html, body, #root, #root>div {
    height: 100%
  }

  body {
    margin: 0;
    font-size: 1.6rem;
    font-family: "Roboto", sans-serif;
    color: var(--white);
  }
`;

export default GlobalStyle;
