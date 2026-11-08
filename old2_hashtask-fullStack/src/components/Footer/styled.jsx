import styled from "styled-components";

export const FooterBar = styled.footer`
  border-top: 1px solid var(--line);
  background: var(--surface-56);
  padding: 23px 28px;
  color: var(--muted);
  font-size: 20px;
`;

export const FooterInner = styled.div`
  width: min(1320px, 100%);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  
`;