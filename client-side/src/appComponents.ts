import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        color: black;
        font-family: 'poppins', 'roboto', sans-serif;
    }
`
export const AppMain = styled.main`
    
`

export const IconContainer = styled.div`
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    font-size: 1.3em;
`