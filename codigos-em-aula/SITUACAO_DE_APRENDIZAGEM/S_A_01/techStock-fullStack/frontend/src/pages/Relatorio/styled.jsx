
import styled from "styled-components";


export const ContainerPrincipal = styled.main`
  max-width: 1300px;
  margin: 25px auto;
  padding: 0 30px;
  
`;



export const Apresentacao = styled.section`
  padding: 35px;
  background: var(--gradient-banner);
  border-radius: 22px;
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  margin-bottom: 25px;
  
`;



export const Etiqueta = styled.span`
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
  color: var(--dash-action-text);
`;



export const TituloPagina = styled.h1`
  margin: 12px 0;
  font-size: 32px;
  font-weight: 800;
  color: var(--text);
`;

export const DescricaoPagina = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: var(--muted);
`;



export const Grade = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  margin-bottom: 25px; 
`;



export const Painel = styled.section`
  min-width: 0;
  padding: 25px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: var(--shadow);
`;

export const TituloPainel = styled.h2`
  margin: 0 0 8px;
  font-size: 20px;
  font-weight: 800;
  color: var(--text);
`;


export const DescricaoPainel = styled.p`
  margin: 0 0 25px;
  font-size: 13px;
  line-height: 1.5;
  color: var(--muted);
`;


export const Categoria = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;

  .detalhes {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    font-size: 13px;
    color: var(--text);
  }

  .trilho {
    width: 100%;
    height: 10px;
    background: var(--line);
    border-radius: 20px;
    overflow: hidden;
  }
`;


// PREENCHIMENTO DA BARRA

export const Barra = styled.div`
  /* Recebe a porcentagem do index.jsx */
  width: ${({ $percentual }) => $percentual};

  height: 100%;

  /* Gradiente roxo e coral */
  background: var(--gradient-logo);

  border-radius: 20px;
`;


// LINHA DAS SITUAÇÕES

export const LinhaSituacao = styled.div`
  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 15px;

  padding: 14px 0;

  border-bottom: 1px solid var(--line);

  /* Número da situação */
  strong {
    font-size: 18px;

    color: var(--text);
  }
`;


// ETIQUETA DA SITUAÇÃO

export const Status = styled.span`
    display: inline-block;
    padding: 8px 12px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 700;
    white-space: nowrap;
    background: ${({ $status }) =>
        `var(--dash-status-${$status}-bg)`};

    color: ${({ $status }) =>
        `var(--dash-status-${$status}-text)`};
`;


// CAIXA DE DESTAQUE

export const Destaque = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    padding: 25px;
    
    background: ${({ $tipo }) =>
    `var(--dash-card-${$tipo})`};


    border: 2px solid
        ${({ $tipo }) => `var(--dash-border-${$tipo})`};
  
    border-radius: 18px;

    

    span {
        font-size: 13px;
        font-weight: 700;
        color: var(--text);
    }

    small {
    font-size: 12px;
    color: var(--text);
    }
    transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;


// NÚMERO GRANDE DO DESTAQUE

export const NumeroDestaque = styled.strong`
  font-size: 42px;

  font-weight: 800;

  color: var(--text);
`;


// CONTAINER DA TABELA

export const TabelaContainer = styled.div`
  width: 100%;

  /* Permite rolagem horizontal somente se necessário */
  overflow-x: auto;
`;


// TABELA DOS EQUIPAMENTOS

export const Tabela = styled.table`
  width: 100%;

  border-collapse: collapse;

  text-align: left;

  /* Espaçamento das células */
  th,
  td {
    padding: 15px 12px;

    border-bottom: 1px solid var(--line);

    font-size: 13px;
  }

  /* Cabeçalho */
  th {
    font-weight: 700;

    color: var(--muted);
  }

  /* Dados */
  td {
    color: var(--text);
  }

  /* Remove a borda da última linha */
  tbody tr:last-child td {
    border-bottom: none;
  }
`;
