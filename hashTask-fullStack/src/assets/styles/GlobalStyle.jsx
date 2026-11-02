import { createGlobalStyle } from "styled-components";

/* Explicação createGlobalStyle

A função chamada createGlobalStyle é uma biblioteca styled-components. 
Ela serve para criar estilos que valem para o site inteiro, e não só para um componente.

O styled.div, styled.button etc. criam estilos para um componente. 
Mas há coisas que precisam valer para a página toda:

- tirar as margens padrão do navegador (reset)
- definir a fonte do site
- definir o gradiente de fundo do body

Isso é o que o createGlobalStyle faz.

Ele funciona como o arquivo .css tradicional, só que escrito dentro do JavaScript.
Ele cria um componente que não mostra nada na tela, só injeta esse CSS na página. Basta colocá-lo uma vez no App.jsx:

*/

export const GlobalStyle = createGlobalStyle`
  /* Reset: tira as margens padrão do navegador e deixa o tamanho previsível */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: var(--fonte);
    color: var(--cor-texto);
    background: var(--gradiente-fundo);
    background-attachment: fixed; /* o gradiente fica parado ao rolar a página */
    min-height: 100vh;
    line-height: 1.5;
   }

  #root {
    min-height: 100vh;
  }

/* Explicação Root

  O #root é um seletor de id: ele estiliza o elemento HTML que tem id="root".
  É nessa div que o React desenha o site inteiro. O main.jsx faz a ligação: <div id="root"></div>

  Por que isso é necessário

  Sem essa regra, o #root tem só a altura do conteúdo. Numa página curta (como a de Assinatura), 
  o Footer ficaria no meio da tela, com espaço vazio embaixo.

  Com ela, o Layout pode usar min-height: 100vh e flex: 1 no conteúdo para empurrar o Footer para o final da tela. 
  Para isso funcionar, os “pais” também precisam ter altura mínima.

*/

a {
    color: inherit;
    text-decoration: none;
  }

  button, input, select {
    font-family: inherit;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
    border: none;
  }

  img {
    max-width: 100%;
  }
`;
