import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        /* --primaryColor: #15518b; */
        --primaryColor: #2d2d2d;
        --secondaryColor: #383838;
        --tertiaryColor: #242424;
        --quaternaryColor: #f7f7f7;
        --borderRadius: 10px;
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