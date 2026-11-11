import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 1300px;
  margin: 28px auto 60px;
  padding: 0 30px;

`;


export const Quadro = styled.section`
  display: grid;
  grid-template-columns: 1fr 280px;
  align-items: center;
  gap: 30px;
  min-height: 450px;
  padding: 50px;
  border-radius: 28px;
  background: var(--gradient-banner);
  border: 1px solid var(--surface);
  box-shadow: var(--shadow);
  overflow: hidden;
`;

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  -webkit-background-clip: text;
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
  max-width: 460px;
  margin: 0 0 25px;
  font-size: 17px;
  line-height: 1.9;
  color: var(--muted);
`;

export const BotaoVoltar = styled.button`
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
  transition: transform 0.2s;
  border: none;

  &:hover {
    transform: translateY(-2px);
  }
`;




//-------------------------------------------------


export const Exclamacao = styled.span`
  font-size: 300px;
  font-weight: bold;
  margin-bottom: 150px;
  line-height: 1;
  color: var(--green);
  transform: rotate(-20deg);
`;
