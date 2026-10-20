import React from 'react';
import { HeaderContainer, Logo, StyledLink } from './styled';
import { Nav } from './styled';
import { useNavigate } from 'react-router-dom';


export function Header() {
const navegate = useNavigate()
    
function handleClickHome() {    
        navegate('/home')
    }
    
 return (
    <HeaderContainer>
        <Logo>
        ⚡Ticker<span>Grid</span>
      </Logo>

      <Nav>
        <StyledLink onClick={handleClickHome}>合 Início</StyledLink>
        <StyledLink>⭐ Favoritos</StyledLink>
        <StyledLink>💱 Conversor</StyledLink>
      </Nav>
    </HeaderContainer>
  );
}
