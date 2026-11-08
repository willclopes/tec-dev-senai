import styled from "styled-components";

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const LogoBadge = styled.div`
  width: 44px;
  height: 44px;
  background: var(--grad-sunset-banner);
  color: var(--text-dark);
  font-weight: 1000;
  font-size: 1.rem;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  box-shadow: var(--shadow-soft);
  
  /* O seu formato exclusivo */
  border-radius: 15px 15px 15px 5px;
  transform: rotate(-10deg);
  border: white solid 2px;
  transition: transform 0.2s ease; /* Adicionado para suavizar a sua animação de giro no hover */

  /* NECESSÁRIO PARA A BOLINHA VERDE */
  position: relative;
  overflow: hidden;

  /* A sua animação de hover */
  :hover & {
    transform: rotate(0deg) scale(1.06);
  }

  /* A BOLINHA CORAL (pseudo-elemento) */
  &::after {
    content: '';
    position: absolute;
    width: 15px; 
    height: 15px;
    background: var(--color-coral); /* cor coral da palette.css */
    border: 2px solid white; /* Separa a bolinha do fundo laranja */
    border-radius: 50%;
    
    /* Empurra para o canto inferior direito */
    bottom: -6px; 
    right: -6px;
  }
`;

/* EXPLICAÇAO BOLINHA - LOGO

O detalhe visual (a "bolinha" na borda inferior direita da Logo) é feito usando a técnica do pseudo-elemento ::after no CSS, 
em vez de ser uma borda comum.   

Como a imagem mostra um recorte perfeitamente circular sobreposto ao gradiente, 
cria-se um círculo usando border-radius: 50% e o empurramos para o canto inferior direito com position: absolute.


*/


export const LogoTitle = styled.h1`
  font-size: 1.35rem;
  font-weight: 1000;
  color: var(--text-dark);

  span {
    color: var(--color-coral);
  }
`;