import { createGlobalStyle } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    color: string;
    text: string;
  }
}

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    transition: all 0.3s ease;
  }
`;