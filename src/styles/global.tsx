import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        --white: #fff;
        --manualColor: #15518b;
        --mainBg: #A5B9B9;
        --accentColor: #CCA4A6;
        --primaryColor: #2d2d2d;
        --secondaryColor: #383838;
        --tertiaryColor: #242424;
        --quaternaryColor: #f7f7f7;
        --borderRadius: 10px;
        --padding: 12px;
        --paddingLarge: 20px;
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