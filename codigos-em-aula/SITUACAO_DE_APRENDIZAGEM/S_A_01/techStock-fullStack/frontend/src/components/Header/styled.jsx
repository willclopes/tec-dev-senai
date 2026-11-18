import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const ContainerFlutuante = styled.header`
  max-width: 1300px;
  height: 95px;
  margin: 24px auto 25px;
  padding: 14px 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 16px 16px 16px 16px;
  box-shadow: var(--shadow);

  border: 3px solid var(--dash-border-manutencao);
  
  //border-top: 6px solid var(--dash-border-manutencao);

   
`;



export const ContainerAntigo = styled.header`
  width: 100%;
  
`;

export const Faixa = styled.div`
 // border-bottom: 1px solid var(--dash-border-manutencao);
  width: 100%;
  background: var(--surface);
  //border-radius: 20px;
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

    transition: transform 0.2s ease;

  &:hover {
  transform: scale(1.08);
  }

  &:active {
    transform: scale(0.80);
  }


  }

  a.active {
    color: var(--green-dark);
    background: var(--green-soft);
  }

`;

export const BotaoNovo = styled(NavLink)`
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
  cursor: pointer;
  text-decoration: none;
  
 transition: transform 0.2s ease;

  &:hover {
  transform: scale(1.08);
  }

  /* recurso para ativar o "background azul" Quando a página estiver selecionada */
  &:active {
    transform: scale(0.80);
  }
`;

export const LinkMenu = styled(NavLink)`
  color: var(--muted);
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: 0.2s;
  &:hover {
    color: var(--primary);
  }
`;