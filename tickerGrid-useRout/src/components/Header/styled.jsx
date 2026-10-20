import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding: 20px 4%; 
  background-color: #0f172a; 
  border-bottom: 1px solid #1e293b; 
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  font-family: 'Inter', sans-serif;
  border-radius: 10px;
  border: var(--neon-ciano) solid 3px;
`;


export const Logo = styled.h2`
  font-size: 1.6rem;
  font-weight: 800;
  color: #f8fafc; 
  text-decoration: none;
  letter-spacing: -0.5px;

  span {
    color: var(--neon-ciano);
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 24px; 
`

export const StyledLink = styled.button`
  color: #94a3b8; 
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  background-color: transparent;
  border: var(--neon-ciano) solid 2px;
  cursor: pointer;

  
  &:hover {
    color: #38bdf8;
    background-color: rgba(56, 189, 248, 0.1); 
  }
`;


