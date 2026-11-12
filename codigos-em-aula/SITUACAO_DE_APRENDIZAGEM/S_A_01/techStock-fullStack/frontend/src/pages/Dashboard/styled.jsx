
import styled from "styled-components";

export const ContainerPrincipal = styled.main`
  max-width: 1300px;
  margin: 25px auto;
  padding: 0 30px;

  @media (max-width: 600px) {
    padding: 0 16px;
  }
`;


export const Indicadores = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  margin-bottom: 25px;

`;



export const Card = styled.div`
  padding: 25px;
  border-radius: 20px;

  background: ${({ $tipo }) =>
    `var(--dash-card-${$tipo})`};

  box-shadow: var(--shadow);
`;

export const NumeroCard = styled.h2`
  margin: 10px 0;
  font-size: 36px;
  font-weight: 800;
  color: var(--text);
`;


export const LegendaCard = styled.p`
  margin: 0;
  font-size: 13px;
  color: var(--text);
`;

// DIVISÃO ENTRE CADASTRO E CATÁLOGO

export const Grade = styled.section`
  display: grid;
  grid-template-columns: 380px minmax(0, 1fr);
  gap: 25px;
  align-items: start;

 `;

export const Painel = styled.div`
  min-width: 0;
  padding: 25px;

  background: var(--surface);

  border: 1px solid var(--line);
  border-radius: 22px;

  box-shadow: var(--shadow);
`;


export const TituloPainel = styled.h2`
  margin: 0 0 8px;
  font-size: 21px;
  font-weight: 800;
  color: var(--text);
`;

// DESCRIÇÕES

export const DescricaoPainel = styled.p`
  margin: 0 0 25px;
  font-size: 13px;
  line-height: 1.5;
  color: var(--muted);
`;


export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;



export const CampoFormulario = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  label {
    font-size: 13px;
    font-weight: 700;
    color: var(--text);
  }

  input,
  select {
    width: 100%;
    box-sizing: border-box;

    padding: 12px 14px;

    border: 1px solid var(--line);
    border-radius: 12px;

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


export const BotaoCadastro = styled.button`
  padding: 14px;

  border: none;
  border-radius: 12px;

  background: var(--gradient-logo);
  color: var(--surface);

  font-size: 14px;
  font-weight: 800;

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

// CONTAINER DA TABELA

export const TabelaContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

// TABELA

export const Tabela = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  th,
  td {
    padding: 15px 10px;
    border-bottom: 1px solid var(--line);
    font-size: 13px;
  }

  th {
    color: var(--muted);
  }

  td {
    color: var(--text);
  }
`;

// ETIQUETAS DE SITUAÇÃO

export const Status = styled.span`
  display: inline-block;
  padding: 7px 10px;

  border-radius: 20px;

  font-size: 11px;
  font-weight: 700;

  white-space: nowrap;

  background: ${({ $status }) =>
    `var(--dash-status-${$status}-bg)`};

  color: ${({ $status }) =>
    `var(--dash-status-${$status}-text)`};
`;

// BOTÃO EDITAR

export const BotaoAcao = styled.button`
  padding: 8px 12px;

  border: none;
  border-radius: 9px;

  background: var(--dash-action-bg);
  color: var(--dash-action-text);

  font-size: 12px;
  font-weight: 700;

  cursor: pointer;
`;

// PAGINAÇÃO

export const Paginacao = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 10px;
  margin-top: 25px;

  span {
    font-size: 12px;
    color: var(--muted);
  }

  button {
    padding: 9px 13px;

    border: 1px solid var(--line);
    border-radius: 10px;

    background: var(--surface);
    color: var(--text);

    font-size: 12px;

    cursor: pointer;
  }
`;
