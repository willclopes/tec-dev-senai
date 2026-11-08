import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; background: var(--gradient-page); background-attachment: fixed;
    font-family: 'DM Sans', sans-serif; color: var(--ink); min-height: 100vh; }
  h1, h2, h3, h4, p { margin-top: 0; }
  h1, h2, h3, h4 { font-family: 'Outfit', sans-serif; letter-spacing: -.035em; }
  a { color: inherit; text-decoration: none; }
  button, input, select { font: inherit; }
  button { cursor: pointer; }
  input, select { outline-color: var(--coral); }
  ::selection { background: var(--lemon); color: var(--ink); }
`;