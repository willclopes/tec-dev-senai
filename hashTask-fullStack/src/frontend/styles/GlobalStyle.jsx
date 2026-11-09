import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    min-width: 320px;
    color: var(--ink);
    background: var(--gradient-page);
    background-attachment: fixed;
    font-family: "DM Sans", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  button, input, select { font: inherit; }
  button { cursor: pointer; }
  a { text-decoration: none; color: inherit; }
  h1, h2, h3, h4, p { margin-top: 0; }
  h1, h2, h3, h4 { font-family: "Space Grotesk", Arial, sans-serif; letter-spacing: -0.035em; }
  button:focus-visible, a:focus-visible, input:focus-visible, select:focus-visible {
    outline: 3px solid var(--blue);
    outline-offset: 3px;
  }
  ::selection { background: var(--lime); color: var(--ink); }

  .container { width: min(1280px, calc(100% - 56px)); margin: 0 auto; }
  .page-main { padding: 28px 0 64px; min-height: calc(100vh - 175px); }
  .eyebrow {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: .18em;
    font-weight: 800;
  }
  .screen-reader-only {
    position: absolute; width: 1px; height: 1px;
    overflow: hidden; clip: rect(0, 0, 0, 0);
  }
  @media (max-width: 700px) {
    .container { width: min(100% - 28px, 1280px); }
    .page-main { padding-top: 18px; }
  }
`;
