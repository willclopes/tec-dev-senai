import React, { useState, createContext, useContext } from 'react';
import { Container, Card, Titulo, Texto, Botao } from './styled';

const TemaContext = createContext();

function PainelControle() {
  const { tema, alternarTema, cliques } = useContext(TemaContext);

  return (
    <Card tema={tema}>
      <Titulo>Estudando useContext</Titulo>
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

export default function Main() {
  const [tema, setTema] = useState('dark');
  const [cliques, setCliques] = useState(0);

  function alternarTema() {
    setTema((temaAtual) => (temaAtual === 'light' ? 'dark' : 'light'));
    setCliques((cliquesAtuais) => cliquesAtuais + 1);
  }

  return (
    <TemaContext.Provider value={{ tema, alternarTema, cliques }}>
      <Container tema={tema}>
        <PainelControle />
      </Container>
    </TemaContext.Provider>
  );
}