import styled from "styled-components";

export const Card = styled.div`
  padding: 25px;
  border-radius: 20px;
 
  /*
  border: 2px solid
    ${({ $tipo }) => `var(--dash-border-${$tipo})`};
*/

  border: 2px solid white;

  background: ${({ $tipo }) =>
    `var(--dash-card-${$tipo})`};

  box-shadow: var(--shadow);
  
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const Topo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  
`;

export const Legenda = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  color: var(--text);
`;

export const Icone = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    flex-shrink: 0;
    background: transparent;
    border-radius: 8px;
    font-size: 35px;
`;

export const Numero = styled.h2`
  margin: 10px 0;
  font-size: 40px;
  font-weight: 800;
  color: var(--text);
`;

export const LegendaCard = styled.p`
  margin: 0;
  font-size: 14px;
  color: var(--text);
  opacity: 0.8;
  font-weight: bold;
  font-style: italic;
`;

export const Etiqueta = styled.span`
  padding: 8px 14px;
  border-radius: 30px;
  background: var(--surface);
  color: var(--dash-action-text);
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 1px;
`;