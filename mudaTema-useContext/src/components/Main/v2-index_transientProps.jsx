import React from 'react';
import { Container, Card, Titulo, Texto, Botao } from './styled';
import { TemaProvider, useTema } from '../contexts/ThemeContext';

function PainelControle() {
  const { tema, alternarTema, cliques } = useTema();

  return (
    <Card $tema={tema}>
      <Titulo>Context em Arquivo Separado</Titulo>
      <Texto>
        O tema atual é <strong>{tema}</strong>.
        <br />
        Você já trocou o tema <strong>{cliques}</strong> vezes.
      </Texto>
      <Botao onClick={alternarTema}>
        Alternar para {tema === 'light' ? 'Dark' : 'Light'}
      </Botao>
    </Card>
  );
}

function ConteudoPagina() {
  const { tema } = useTema();

  return (
    <Container $tema={tema}>
      <PainelControle />
    </Container>
  );
}

export function Main() {
  return (
    <TemaProvider>
      <ConteudoPagina />
    </TemaProvider>
  );
}