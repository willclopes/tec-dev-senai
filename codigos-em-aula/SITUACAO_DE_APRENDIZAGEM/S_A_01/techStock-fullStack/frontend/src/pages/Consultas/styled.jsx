import styled from "styled-components";



export const ContainerPrincipal = styled.main`
  max-width: 1300px;
  margin: 25px auto 40px;
  padding: 0 30px;
  box-sizing: border-box;
  
`;


export const PainelFiltros = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 25px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 20px;
  box-shadow: var(--shadow);

  margin-bottom: 25px;

 
`;

export const TituloFiltros = styled.h2`
  margin: 0 0 8px;
  font-size: 21px;
  font-weight: 800;
  color: var(--text);
`;



export const DescricaoFiltros = styled.p`
  margin: 0 0 25px;
  font-size: 13px;
  color: var(--muted);
`;


export const FormularioBusca = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;



export const GradeFiltros = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 15px;
 `;


export const CampoFiltro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;

  label {
    font-size: 13px;
    font-weight: 600;
    color: var(--text);
  }

  input,
  select {
    width: 100%;
    height: 45px;
    box-sizing: border-box;
    padding: 10px 12px;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: var(--surface);

    color: var(--text);
    font-size: 14px;
    font-family: inherit;
  }

  input:focus,
  select:focus {
    outline: 2px solid var(--dash-focus);

    outline-offset: 1px;
  }
`;


export const Botoes = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;

  &::before {
    content: "";

    flex: 1;
    height: 2px;
    background: var(--gradient-logo);
    opacity: 0.5;
    border-radius: 10px;
    align-self: center

  }
`;


export const BotaoBuscar = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 10px;

  background: var(--gradient-logo);
  color: var(--surface);
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
  transform: scale(1.08);
  }

  &:active {
    transform: scale(0.50);
  }
`;

export const BotaoLimpar = styled.button`
  padding: 12px 20px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--surface);
  color: var(--text);
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
  transform: scale(1.08);
  }

  &:active {
    transform: scale(0.50);
  }
`;
