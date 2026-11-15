
import styled from "styled-components";


// CONTAINER PRINCIPAL

export const ContainerPrincipal = styled.main`
  max-width: 1300px;

  margin: 25px auto 40px;

  padding: 0 30px;

  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 0 16px;
  }
`;


// CARDS DO DASHBOARD

export const IndicadoresCards = styled.section`
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 18px;

  margin-bottom: 25px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;


// PAINEL DE CADASTRO

export const Painel = styled.section`
  width: 100%;

  box-sizing: border-box;

  padding: 25px;

  background: var(--surface);

  border: 1px solid var(--line);

  border-radius: 20px;

  box-shadow: var(--shadow);

  margin-bottom: 25px;

  @media (max-width: 600px) {
    padding: 18px;
  }
`;


// TÍTULO DO PAINEL

export const TituloPainel = styled.h2`
  margin: 0 0 8px;

  font-size: 21px;

  font-weight: 800;

  color: var(--text);
`;


// DESCRIÇÃO DO PAINEL

export const DescricaoPainel = styled.p`
  margin: 0 0 25px;

  font-size: 13px;

  color: var(--muted);
`;


// FORMULÁRIO

export const Formulario = styled.form`
  display: flex;

  flex-direction: column;

  gap: 20px;
`;


// PRIMEIRA LINHA - TRÊS CAMPOS

export const LinhaCampos = styled.div`
  display: grid;

  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 15px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;


// CADA CAMPO DO FORMULÁRIO

export const CampoFormulario = styled.div`
  display: flex;

  flex-direction: column;

  gap: 8px;

  min-width: 0;

  label {
    font-size: 13px;
    font-weight: 600;
    color: var(--text);
  }

  input {
    width: 100%;

    padding: 12px;

    box-sizing: border-box;

    border: 1px solid var(--line);

    border-radius: 8px;

    background: var(--surface);

    color: var(--text);

    font-size: 14px;

    font-family: inherit;
  }

  input:focus {
    outline: 2px solid var(--dash-focus);
    outline-offset: 1px;
  }
`;


// SEGUNDA LINHA - TRÊS COLUNAS
// Categoria | Situação | Botão

export const LinhaOpcoes = styled.div`
  display: grid;

  /* Larguras compactas dos três elementos */
  grid-template-columns: 2fr 1.2fr 1fr;

  /* Espaçamento entre os elementos */
  gap: 15px;

  /* Alinha os elementos pela parte inferior */
  align-items: end;

  /* Tablets */
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;

    /* Botão ocupa a linha seguinte */
    ${"" /* O próprio botão será ajustado abaixo */}
  }

  /* Celulares */
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;


// CAIXA DOS RADIO BUTTONS

export const GrupoRadio = styled.fieldset`
  margin: 0;

  min-width: 0;

  /* Reduzimos o espaçamento interno */
  padding: 10px 30px;

  border: 1px solid var(--line);

  border-radius: 10px;

  background: var(--surface);

  legend {
    padding: 0 6px;

    font-size: 13px;

    font-weight: 700;

    color: var(--text);
  }

  label {
    display: flex;

    align-items: center;

    gap: 7px;

    font-size: 13px;

    color: var(--text);

    cursor: pointer;
  }

  input {
    margin: 0;

    accent-color: var(--dash-focus);
  }
`;


// CATEGORIAS - DUAS COLUNAS

export const OpcoesCategoria = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;

  /* Menos espaço entre as opções */
  gap: 10px;
`;


// SITUAÇÃO - UMA COLUNA

export const OpcoesSituacao = styled.div`
  display: flex;

  flex-direction: column;

  gap: 10px;
`;


// BOTÃO DE CADASTRO

export const BotaoCadastro = styled.button`
  /* Largura da coluna */
  width: 100%;

  /* Altura confortável */
  min-height: 44px;

  align-items: center;
  align-content: center;
  align-self: center;

  padding: 12px 15px;

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
