import styled from "styled-components";

export const Rodape = styled.footer`
  margin-top: 48px;
  background: var(--cor-superficie-vidro);
  backdrop-filter: blur(10px);
  border-top: 1px solid var(--cor-borda);
`;

export const Interno = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 22px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`;

export const Texto = styled.p`
  font-size: 0.875rem;
  color: var(--cor-texto-suave);
`;