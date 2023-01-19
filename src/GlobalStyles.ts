import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
                box-sizing: border-box;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        *, *::before, *::after {
                box-sizing: inherit;
        }

        ul {
                list-style: none;
        }

        body {
                background: #fefefe;
                height: 100vh;
                margin: 0 auto;
                max-width: 500px;
                overscroll-behavior: none;
                width: 100%;
        }
`;
