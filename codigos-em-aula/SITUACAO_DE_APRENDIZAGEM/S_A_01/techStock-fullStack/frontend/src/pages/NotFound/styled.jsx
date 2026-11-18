
import styled from "styled-components";
import { Link } from "react-router-dom";


export const Quadro = styled.section`
  width: 100%;
  min-height: 100dvh;

  box-sizing: border-box;

  display: grid;

  grid-template-columns: minmax(0, 520px) 180px;

  gap: 30px;

  justify-content: center;

  align-items: center;

  padding: 40px 30px;

  background: var(--gradient-banner);
  border: 1px solid var(--surface);
  box-shadow: var(--shadow);

  overflow: hidden;

  
`;



export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;

  width: 100%;
  max-width: 520px;
  min-width: 0;
`;


export const Etiqueta = styled.span`

  padding: 7px 13px;
  border-radius: 30px;
  background: var(--surface);
  color: var(--green-dark);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;

`;


export const Numero = styled.h1`

  margin: 20px 0 10px;
  font-size: clamp(90px, 12vw, 150px);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -8px;
  background: var(--gradient-logo);
  background-clip: text;
  color: transparent;

`;


export const Titulo = styled.h2`

  margin: 0 0 12px;
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 850;
  line-height: 1.2;
  letter-spacing: -1px;
  color: var(--text);

`;

export const Descricao = styled.p`
  font-weight: 500;
  max-width: 460px;
  margin: 0 0 25px;
  font-size: 17px;
  line-height: 1.7;
  color: var(--muted);

`;


export const BotaoVoltar = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 24px;
  border-radius: 14px;
  background: var(--gradient-logo);
  color: var(--surface);
  font-size: 14px;
  font-weight: 800;
  box-shadow: var(--shadow);
  border: none;

  text-decoration: none;


  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.08);
  }

  &:active {
    transform: scale(0.80);
  }

`;



export const Exclamacao = styled.span`
  font-size: 590px;
  font-weight: bold;
  line-height: 1;
  color: var(--green);

  justify-self: center;
  align-self: center;

  margin: 0;

  transform: rotate(-20deg);

  
`;
