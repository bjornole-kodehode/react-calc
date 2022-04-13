import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&display=swap');

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        background-color: #3a4764;
        font-family: 'League Spartan', sans-serif;
        font-size: 1rem;
    }
`