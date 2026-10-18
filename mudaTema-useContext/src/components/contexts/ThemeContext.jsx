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
  cyberpunk: {
    nome: 'Cyberpunk',
    fundoPagina: '#090b10',
    fundoCard: '#111622',
    texto: '#e2e8f0',
    borda: '#00ff9d',        
    corDestaque: '#ff0055',  
  },
};

const listaDeTemas = Object.keys(coresDosTemas);

export const TemaContext = createContext();

export function TemaProvider({ children }) {
  const [tema, setTema] = useState('dark');
  const [cliques, setCliques] = useState(0);

  const indiceAtual = listaDeTemas.indexOf(tema);
  const proximoIndice = (indiceAtual + 1) % listaDeTemas.length;
  const proximoTema = listaDeTemas[proximoIndice];

  /*
  Entendendo o truque do Giro Infinito (%)
    Repare nessas 3 linhas que usamos para alternar entre os temas sem precisar escrever vários if / else:

O operador % (resto da divisão) faz a fila dar a volta sozinha quando chega no final:
 - Se está no dark (índice 0): (0 + 1) % 3 = 1 (light).
 - Se está no light (índice 1): (1 + 1) % 3 = 2 (cyberpunk).
 - Se está no cyberpunk (índice 2): (2 + 1) % 3 -> 3 dividido por 3 dá resto 0 (volta para o dark!).
 
 Assim, se você quiser adicionar um 4º ou 5º tema no futuro, basta colar a nova paleta dentro 
de coresDosTemas e a lógica inteira se adapta automaticamente!

  */


  function alternarTema() {
    setTema(proximoTema);
    setCliques((cliquesAtuais) => cliquesAtuais + 1);
  }

  const temaSelecionado = coresDosTemas[tema];

  return (
    <TemaContext.Provider value={{ tema, proximoTema, alternarTema, cliques }}>
      <StyledThemeProvider theme={temaSelecionado}>
        {children}
      </StyledThemeProvider>
    </TemaContext.Provider>
  );
}

export function useTema() {
  return useContext(TemaContext);
}