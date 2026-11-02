import styled from "styled-components";

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

// O quadradinho colorido com as Inicias HT
export const Simbolo = styled.div`
  width: 48px;
  height: 40px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: var(--gradiente-primario);
  color: var(--cor-texto-claro);
  font-weight: 800;
  font-size: 1.05rem;
  letter-spacing: -1px;
  box-shadow: var(--sombra-botao);
  transform: rotate(-6deg); /* para deixar a logo levemente inclinado */
  transition: transform 0.3s ease;

  /* Efeito Ao passar o mouse na logo, o quadrado endireita e cresce um pouco */
  ${Container}:hover & {
    transform: rotate(0deg) scale(1.06);
  }
`;

/* Explicação ${Container}

${Container} é um seletor de componente: o styled-components permite usar um componente estilizado dentro do CSS de outro

Por que não usar só &:hover?
Porque &:hover só reage quando o mouse está em cima do próprio quadradinho.

Com ${Container}:hover &, ele endireita quando o mouse passa em qualquer parte da logo (inclusive no texto HashTask). 
É um efeito de um elemento reagindo ao hover de outro.

Regra para guardar
Para estilizar um filho quando o pai sofre algum evento, o pai vai com ${Pai} e o filho fica com o &, assim:
${Pai}:hover & { ... }
Para estilizar o próprio elemento, use &:hover { ... }.

*/



export const Nome = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--cor-texto);
  letter-spacing: -0.5px;

  /* A palavra "Task" fica em gradiente */
  span {
    background: var(--gradiente-primario);
    background-clip: text; // define até onde o plano de fundo (seja uma cor, imagem ou gradiente) deve se estender dentro de um elemento.
    color: transparent;
  }
`;