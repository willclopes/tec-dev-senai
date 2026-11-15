import styled from "styled-components";


export const ContainerBanner = styled.section`
  position: relative;
  overflow: hidden;
  padding: 40px 45px;
  border-radius: 24px;
  background: var(--gradient-banner);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  margin-bottom: 25px;
  border: 2px solid white;

  
`;



export const ConteudoBanner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;



export const EtiquetaBanner = styled.span`
  padding: 8px 14px;
  border-radius: 30px;
  background: var(--surface);
  color: var(--dash-action-text);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
`;


export const TituloBanner = styled.h1`
  margin: 0;
  font-size: clamp(26px, 3vw, 38px);
  font-weight: 800;
  line-height: 1.2;
  color: var(--text);
`;

export const DescricaoBanner = styled.p`
  margin: 0;
  max-width: 600px;
  font-size: 15px;
  line-height: 1.7;
  color: var(--muted);
  font-style: italic;
`;

