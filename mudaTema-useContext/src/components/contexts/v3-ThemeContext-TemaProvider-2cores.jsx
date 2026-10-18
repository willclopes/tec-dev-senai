import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const coresDosTemas = {
  dark: {
    nome: 'dark',
    fundoPagina: '#121214',
    fundoCard: '#202024',
    texto: '#ffffff',
    borda: '#323238',
    corDestaque: '#8257e5',
  },
  light: {
    nome: 'light',
    fundoPagina: '#f0f2f5',
    fundoCard: '#ffffff',
    texto: '#1f2937',
    borda: '#e5e7eb',
    corDestaque: '#8257e5',
  },
};

export const TemaContext = createContext();

export function TemaProvider({ children }) {
  const [tema, setTema] = useState('dark');
  const [cliques, setCliques] = useState(0);

  function alternarTema() {
    setTema((temaAtual) => (temaAtual === 'light' ? 'dark' : 'light'));
    setCliques((cliquesAtuais) => cliquesAtuais + 1);
  }

  const temaSelecionado = coresDosTemas[tema];

  return (
    <TemaContext.Provider value={{ tema, alternarTema, cliques }}>
      <StyledThemeProvider theme={temaSelecionado}>
        {children}
      </StyledThemeProvider>
    </TemaContext.Provider>
  );
}

export function useTema() {
  return useContext(TemaContext);
}