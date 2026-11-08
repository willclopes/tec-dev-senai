import styled, { keyframes } from "styled-components";

/* Explicação keyframes
    
    O keyframes é uma função do styled-components para criar animações em CSS. 
    Ela descreve como um elemento muda ao longo do tempo.

    São dois passos: primeiro descrever a animação, depois aplicá-la.
        1. Descrever o movimento (o “filme” da animação):
*/

// Passo 1 -  Animação: sobe e desce suavemente (usada nas bolhas)


/*
A animação precisa ser declarada antes do componente que a usa, porque const não pode ser usado antes de existir. 
Por isso o flutuar fica no topo do styled.jsx.

*/


const flutuar = keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-18px); }
`;



/*

    2. Aplicar no elemento:
    O ${flutuar} entra no lugar do nome da animação. O restante é o atalho animation do CSS:


*/

// Cada bolha tem posição, tamanho e cor diferentes
const bolhas = {
  "topo-esquerda": "top: -60px; left: -40px; width: 220px; height: 220px; background: var(--cor-bolha-rosa);",
  "meio-direita": "top: 30%; right: -50px; width: 260px; height: 260px; background: var(--cor-bolha-azul);",
  "baixo-esquerda": "bottom: -80px; left: 35%; width: 200px; height: 200px; background: var(--cor-bolha-ciano);",
};


export const Bolha = styled.div`
  position: absolute;
  border-radius: var(--raio-total);
  filter: blur(8px);
  animation: ${flutuar} 10s ease-in-out infinite; //começa e termina devagar, acelera no meio, repete para sempre
  ${({ $posicao }) => bolhas[$posicao]}


  /* OPÇÃO PARA DESLIGAR A ANIMAÇÃO
   Quem prefere menos movimento no computador não vê a animação
    @media (prefers-reduced-motion: reduce) {
    animation: none;
  */
`;



export const Faixa = styled.section`
  position: relative;
  overflow: hidden; /* esconde o que sair da faixa (as bolhas) */
  padding: 56px 32px;
  margin-bottom: 28px;
  border-radius: var(--raio-grande);
  background: var(--gradiente-banner);
  border: 1px solid var(--cor-vidro-forte);
  box-shadow: var(--sombra-media);
  text-align: center;

  @media (max-width: 600px) {
    padding: 40px 20px;
  }
`;



export const Conteudo = styled.div`
  position: relative; /* fica por cima das bolhas */
  max-width: 720px;
  margin: 0 auto;
`;

export const Etiqueta = styled.span`
  display: inline-block;
  padding: 6px 16px;
  margin-bottom: 16px;
  border-radius: var(--raio-total);
  background: var(--cor-vidro-forte);
  color: var(--cor-primaria);
  font-size: 0.85rem;
  font-weight: 700;
`;

export const Titulo = styled.h1`
  font-size: clamp(1.7rem, 4vw, 2.6rem); /* cresce e encolhe conforme a tela */
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -1px;
  color: var(--cor-texto);
`;

// Texto com gradiente colorido
export const Destaque = styled.span`
  background: var(--gradiente-primario);
  background-clip: text;
  color: transparent;
`;

export const Texto = styled.p`
  margin: 14px auto 0;
  max-width: 560px;
  color: var(--cor-texto-suave);
  font-size: 1.05rem;
`;

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 24px;
  //border: 3px solid var(--cor-primaria);
  //border-radius: 100px;
  

   
  `;

export const Chip = styled.span`
  padding: 8px 16px;
  border-radius: var(--raio-total);
  background: var(--cor-vidro-forte);
  border: 1px solid var(--cor-superficie);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--cor-texto);
  box-shadow: var(--sombra-suave);
  margin-top: 10px;
  margin-bottom: 10px;
  
  
`;