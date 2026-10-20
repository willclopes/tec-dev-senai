import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 24px 20px;
  background-color: #0f172a; 
  border-top: 1px solid #1e293b;
  font-family: 'Inter', sans-serif;
  margin-top: auto;
  border-radius: 10px;
  border: var(--neon-ciano) solid 3px; 
`;


export const FooterText = styled.p`
  color: #64748b;
  font-size: 0.875rem;
  margin: 0;
  text-align: center;
`;

export const Highlight = styled.span`
  color: var(--neon-ciano);
  font-weight: 600;
`;