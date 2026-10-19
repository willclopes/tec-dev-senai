import React from 'react';
import { Container, Title, Subtitle, Message, HomeLink, ErrorImage } from './styled';
import { useNavigate } from 'react-router-dom';


export function Erro() {
  const navegate = useNavigate()

    function handleClick() {    
    navegate('/home')
  }


  return (
    <Container>
      <ErrorImage 
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg" 
        alt="Robo-quebrado - Erro 404" 
      />
      <Subtitle>❌ Página não encontrada</Subtitle>
      <Message>A página que você tentou acessar não existe ou foi removida.</Message>
      
      <HomeLink onClick={handleClick}>
        Voltar para a Home
      </HomeLink>
    </Container>
  );
};

