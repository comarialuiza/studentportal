import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        --primaryColor: #15518b;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    img {
        display: block;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

    body, html, #root {
        height: 100%;
    }

    body {
        font: 14px 'Roboto', sans-serif;
    }
`;