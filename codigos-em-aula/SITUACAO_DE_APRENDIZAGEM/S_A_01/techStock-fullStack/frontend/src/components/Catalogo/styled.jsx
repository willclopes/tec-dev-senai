
import styled from "styled-components";

export const Painel = styled.section`
  min-width: 0;
  padding: 25px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: var(--shadow);


  
`;

export const Titulo = styled.h2`
  margin: 0 0 8px;
  font-size: 21px;
  font-weight: 800;
  color: var(--text);
`;

export const Descricao = styled.p`
  margin: 0 0 25px;
  font-size: 14px;
  color: var(--muted);
`;

export const TabelaContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  
`;

export const Tabela = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  th,
  td {
    padding: 15px 10px;

    border-bottom: 1px solid var(--line);

    font-size: 14px;
    text-align: center;
    width: 10%, 25%,;
  }

  th {
    color: var(--muted);
    background-color: #f5f0fc;
      
  }

  td {
    color: var(--text);
    
    
}

`;

export const Status = styled.span`
  display: inline-block;
  padding: 7px 10px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 700;
  white-space: nowrap;

  background: ${({ $status }) =>
    `var(--dash-status-${$status}-bg)`};

/*
  color: ${({ $status }) =>
    `var(--dash-status-${$status}-text)`};

  */
`;

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

    cursor: pointer;
  }
`;

export const BotaoPagina = styled.button`
  padding: 10px 15px;

  border: 1px solid var(--line);
  border-radius: 10px;

  background: var(--dash-action-bg);
  color: var(--dash-action-text);

  font-size: 12px;
  font-weight: 700;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;


export const Acoes = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  gap: 8px;
 
`;


export const BotaoAcao = styled.button`
  padding: 7px 11px;
  border-radius: 8px;
  background: var(--surface);
  font-size: 12px;
  font-weight: 700;

  cursor: pointer;

  border: 1px solid ${({ $tipo }) =>
    $tipo === "editar"
      ? "var(--dash-border-total)"
      : "var(--dash-border-emprestados)"};

  color: ${({ $tipo }) =>
    $tipo === "editar"
      ? "var(--dash-border-total)"
      : "var(--dash-border-emprestados)"};

  
  transition: transform 0.2s ease;

  &:hover {
  transform: scale(1.08);
  }

  &:active {
    transform: scale(0.80);


  }
`;


