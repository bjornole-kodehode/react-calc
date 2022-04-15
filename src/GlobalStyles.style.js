import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'League Spartan', sans-serif;
    }

    body {
        background-color: #3a4764;
    
        font-size: 1rem;
    }

    .test {
        font-size: 10px;
        margin: 0;
        margin-right: 10px;
        margin-top: 15px;
        display: flex;
        align-items: center;
    }
    .test2 {
        font-weight: 400;
    }

    input {
        height: 10px;
        width: 10px;
        appearance: none;
        background-color: #D03F32;
        border-radius: 50%;
        opacity: 0;
  
    }
    input:hover {
        cursor: pointer;    
    }
    .tri-state-toggle {
        display: flex;
        justify-content: center;
        border-radius: 50px;
        padding: 4px ;
        padding-left: .1px;
        background-color: #252D44;
        width: 45px;
    }
    #one {
        opacity: 1;
    }

    .test3 {
        display: flex;
        margin: 10px;
        align-items: center;
    }

    .test4 {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: 400;
        font-size: 15px;
    }
    `