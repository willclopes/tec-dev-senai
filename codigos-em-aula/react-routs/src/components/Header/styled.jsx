import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 5%;
  background-color: var(--bg-surface, #ffffff);
  border-bottom: 1px solid var(--border-light, #e2e8f0);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--text-primary, #0f172a);

  span {
    color: var(--primary-500, #6366f1);
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none; /* Esconde os links no mobile para simplificar */
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: var(--text-secondary, #475569);
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: var(--primary-500, #6366f1);
  }
`;

export const Button = styled.button`
  padding: 0.6rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.95rem;
  color: white;
  background: var(--gradient-primary, linear-gradient(135deg, #6366f1 0%, #d946ef 100%));
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.2s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;