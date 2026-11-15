
/*
 * CONSULTA - STYLED.JSX
 *
 * Estilos da página Consulta.
 *
 * Visual simples e com as cores do TechStock.
 */

import styled from "styled-components";


// ==========================================
// CONTAINER PRINCIPAL
// ==========================================

export const ContainerPrincipal = styled.main`
  max-width: 1300px;

  margin: 25px auto 40px;

  padding: 0 30px;

  box-sizing: border-box;

  /* Ajuste para celulares */
  @media (max-width: 600px) {
    padding: 0 16px;
  }
`;


// ==========================================
// PAINEL DOS FILTROS
// ==========================================

export const PainelFiltros = styled.section`
  width: 100%;

  box-sizing: border-box;

  padding: 25px;

  background: var(--surface);

  border: 1px solid var(--line);

  border-radius: 20px;

  box-shadow: var(--shadow);

  /* Espaço antes do Catálogo */
  margin-bottom: 25px;

  @media (max-width: 600px) {
    padding: 18px;
  }
`;


// ==========================================
// TÍTULO
// ==========================================

export const TituloFiltros = styled.h2`
  margin: 0 0 8px;

  font-size: 21px;

  font-weight: 800;

  color: var(--text);
`;


// ==========================================
// DESCRIÇÃO
// ==========================================

export const DescricaoFiltros = styled.p`
  margin: 0 0 25px;

  font-size: 13px;

  color: var(--muted);
`;


// ==========================================
// FORMULÁRIO
// ==========================================

export const FormularioBusca = styled.form`
  display: flex;

  flex-direction: column;

  gap: 20px;
`;


// ==========================================
// LINHA DOS TRÊS FILTROS
// ==========================================

export const GradeFiltros = styled.div`
  display: grid;

  /* Primeira coluna maior para a pesquisa */
  grid-template-columns: 2fr 1fr 1fr;

  gap: 15px;

  /* Tablets */
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  /* Celulares */
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;


// ==========================================
// CAMPOS DOS FILTROS
// ==========================================

export const CampoFiltro = styled.div`
  display: flex;

  flex-direction: column;

  gap: 8px;

  min-width: 0;

  /* Nome do campo */
  label {
    font-size: 13px;

    font-weight: 600;

    color: var(--text);
  }

  /* Campos de texto e seleção */
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

  /* Destaque quando o campo recebe foco */
  input:focus,
  select:focus {
    outline: 2px solid var(--dash-focus);

    outline-offset: 1px;
  }
`;


// ==========================================
// ÁREA DOS BOTÕES
// ==========================================

export const Botoes = styled.div`
  display: flex;

  /* Alinha os botões à direita */
  justify-content: flex-end;

  gap: 12px;

  &::before {
    content: "";

    /* Ocupa o espaço vazio à esquerda */
    flex: 1;

    /* Espessura da linha */
    height: 2px;

    /* Mesmo gradiente do botão Buscar */
    background: var(--gradient-logo);

    /* Deixa a linha discreta */
    opacity: 0.5;

    border-radius: 10px;

    align-self: center

  }
`;


// ==========================================
// BOTÃO DE BUSCAR
// ==========================================

export const BotaoBuscar = styled.button`
  padding: 12px 20px;

  border: none;

  border-radius: 10px;

  /* Gradiente tropical */
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


// ==========================================
// BOTÃO LIMPAR
// ==========================================

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
