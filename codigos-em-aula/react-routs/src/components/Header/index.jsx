import React from 'react';
import { HeaderContainer, Logo, Nav, NavLink, Button } from './styled';

export default function Header() {
  return (
    <HeaderContainer>
      <Logo href="/">
        Meu<span>SENAI</span>
      </Logo>
      
      <Nav>
        <NavLink href="#home">Início</NavLink>
        <NavLink href="#sobre">Sobre</NavLink>
        <NavLink href="#servicos">Serviços</NavLink>
        <NavLink href="#contato">Contato</NavLink>
      </Nav>

      <Button>Começar</Button>
    </HeaderContainer>
  );
}