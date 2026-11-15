
import styled from "styled-components";


// CONTAINER PRINCIPAL

export const ContainerPrincipal = styled.main`
  /* Limita a largura da página */
  max-width: 1300px;

  /* Centraliza horizontalmente */
  margin: 25px auto;

  /* Espaçamento nas laterais */
  padding: 0 30px;

  /* Ajuste para telas pequenas */
  @media (max-width: 600px) {
    padding: 0 16px;
  }
`;


// APRESENTAÇÃO DO RELATÓRIO

export const Apresentacao = styled.section`
  /* Espaçamento interno */
  padding: 35px;

  /* Gradiente tropical */
  background: var(--gradient-banner);

  /* Cantos arredondados */
  border-radius: 22px;

  /* Borda discreta */
  border: 1px solid var(--line);

  /* Sombra suave */
  box-shadow: var(--shadow);

  /* Espaçamento inferior */
  margin-bottom: 25px;

  @media (max-width: 600px) {
    padding: 25px;
  }
`;


// ETIQUETA ACIMA DO TÍTULO

export const Etiqueta = styled.span`
  font-size: 11px;

  font-weight: 800;

  letter-spacing: 1px;

  color: var(--dash-action-text);
`;


// TÍTULO PRINCIPAL

export const TituloPagina = styled.h1`
  margin: 12px 0;

  font-size: 32px;

  font-weight: 800;

  color: var(--text);
`;


// DESCRIÇÃO DA PÁGINA

export const DescricaoPagina = styled.p`
  margin: 0;

  font-size: 14px;

  line-height: 1.6;

  color: var(--muted);
`;


// DIVISÃO DOS DOIS PAINÉIS

export const Grade = styled.section`
  /* Coloca os painéis lado a lado */
  display: grid;

  /* Duas colunas proporcionais */
  grid-template-columns: 1fr 1fr;

  /* Espaço entre eles */
  gap: 25px;

  /* Espaço abaixo */
  margin-bottom: 25px;

  /* Empilha os painéis em telas menores */
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;


// PAINEL BRANCO

export const Painel = styled.section`
  /* Evita que o conteúdo ultrapasse a largura */
  min-width: 0;

  /* Espaçamento interno */
  padding: 25px;

  /* Fundo branco */
  background: var(--surface);

  /* Borda */
  border: 1px solid var(--line);

  /* Cantos arredondados */
  border-radius: 22px;

  /* Sombra */
  box-shadow: var(--shadow);
`;


// TÍTULO DOS PAINÉIS

export const TituloPainel = styled.h2`
  margin: 0 0 8px;

  font-size: 20px;

  font-weight: 800;

  color: var(--text);
`;


// DESCRIÇÃO DOS PAINÉIS

export const DescricaoPainel = styled.p`
  margin: 0 0 25px;

  font-size: 13px;

  line-height: 1.5;

  color: var(--muted);
`;


// CADA CATEGORIA DO GRÁFICO

export const Categoria = styled.div`
  /* Organiza as informações verticalmente */
  display: flex;

  flex-direction: column;

  gap: 8px;

  /* Espaço entre categorias */
  margin-bottom: 20px;

  /* Nome e quantidade */
  .detalhes {
    display: flex;

    justify-content: space-between;

    align-items: center;

    gap: 12px;

    font-size: 13px;

    color: var(--text);
  }

  /* Fundo da barra */
  .trilho {
    width: 100%;

    height: 10px;

    background: var(--line);

    border-radius: 20px;

    /* Impede a barra de ultrapassar os cantos */
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
