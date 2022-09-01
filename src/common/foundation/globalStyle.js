import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        margin: 7vh 0 0 20vw;
        font-family: 'Montserrat', sans-serif;
    }
`;

export default GlobalStyle;