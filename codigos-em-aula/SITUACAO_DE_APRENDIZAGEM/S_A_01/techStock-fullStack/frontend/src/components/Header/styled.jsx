import styled from "styled-components";

export const Cabecalho = styled.header`
  width: 100%;
`;

export const Faixa = styled.div`
  border-bottom: 1px solid var(--line);
  background: var(--surface);
`;

export const Barra = styled.div`
  max-width: 1300px;
  min-height: 50px;
  margin: auto;
  padding: 17px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

 
`;

export const Navegacao = styled.nav`
  display: flex;
  gap: 8px;
  align-items: center;

  a {
    padding: 10px 17px;
    border-radius: 12px;
    color: var(--muted);
    font-weight: 700;
  }

  a.active {
    color: var(--green-dark);
    background: var(--green-soft);
  }

`;

export const BotaoNovo = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 21px;
  border-radius: 14px;
  color: var(--surface);
  background: var(--gradient-button);
  box-shadow: var(--shadow);
  font-weight: 800;
  white-space: nowrap;

  &:hover { transform: translateY(-px); }
`;

export const LinkMenu = styled.a`
  color: var(--muted);
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: 0.2s;
  &:hover {
    color: var(--primary);
  }
`;