import { createGlobalStyle } from 'styled-components'; import './palette.css';



export const GlobalStyles = createGlobalStyle`
  * { 
    margin: 0; 
    padding: 0; 
    box-sizing: border-box; 
    font-family: 'Plus Jakarta Sans', sans-serif; 
}

  body { 
    background: var(--grad-page-bg); 
    background-attachment: fixed; 
    color: var(--text-dark); 
    min-height: 100vh; 
}

  button { 
    cursor: pointer; 
    border: none; 
    outline: none; 
    transition: all 0.2s ease; 
}
  a { 
    text-decoration: none; 
    color: inherit; 
    }
`;