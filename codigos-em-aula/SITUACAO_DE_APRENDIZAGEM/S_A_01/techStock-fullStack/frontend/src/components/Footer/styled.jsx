import styled from "styled-components";

export const Rodape = styled.footer`
  border-top: 1px solid var(--line);
  background: var(--surface);
`;

export const Conteudo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  max-width: 1300px;
  margin: 0 auto;
  padding: 25px 30px;

  @media (max-width: 600px) { flex-direction: column; text-align: center; }
`;

export const Texto = styled.p`
  color: var(--muted);
  font-size: 12px;
`;
