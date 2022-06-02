import { createGlobalStyle } from "styled-components";
import { ThemeType, theme } from "./theme";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
    *,
    *:after,
    *:before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: ${theme.fontFamily};
        font-size: 16px;
        background-color: #fbfbfb;
    }

    ${theme.breakpoint("sm")} {
        body {
         font-size: 90%;
        }
    }

    #__next {
        height: 100vh;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }

    img {
        max-width: 100%;
    }

    button {
        all: unset;
        cursor: pointer;
    }
`;
