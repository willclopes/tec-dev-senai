import React from 'react';
import { FooterContainer, FooterText, Highlight } from './styled';

export function Footer() {

    return(

        <FooterContainer>

        <FooterText>
        © 2026 <Highlight>CryptoPulse</Highlight>. Desenvolvido com React e Styled-Components.
        </FooterText>
        
        <FooterText>
        Dados fornecidos em tempo real via API Pública.
      </FooterText>
    
    </FooterContainer>
  );
}