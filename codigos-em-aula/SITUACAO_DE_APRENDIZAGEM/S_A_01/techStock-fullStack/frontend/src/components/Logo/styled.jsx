import styled from "styled-components";

export const LogoContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`;

export const LogoImg = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 16px 16px 16px 5px;
  background: var(--gradient-logo);
  color: var(--surface);
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -2px;
  box-shadow: var(--shadow);

`;

export const TextoLogo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`;

export const Nome = styled.strong`
  font-size: 24px;
  letter-spacing: -1.5px;
  font-weight: 850;

  span {
    color: var(--green);
  }
`;

export const Subtitulo = styled.small`
  margin-top: 4px;
  font-size: 9px;
  letter-spacing: 1.75px;
  color: var(--muted);
  font-weight: 800;
`;
