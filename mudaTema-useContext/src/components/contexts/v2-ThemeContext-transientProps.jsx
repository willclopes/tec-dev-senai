import React, { createContext, useState, useContext } from 'react';

// 1. Criamos o Contexto
export const TemaContext = createContext();

// 2. Criamos o Provedor (Provider) com estados normais em memória
export function TemaProvider({ children }) {
  const [tema, setTema] = useState('dark');
  const [cliques, setCliques] = useState(0);

  function alternarTema() {
    setTema((temaAtual) => (temaAtual === 'light' ? 'dark' : 'light'));
    setCliques((cliquesAtuais) => cliquesAtuais + 1);
  }

  return (
    <TemaContext.Provider value={{ tema, alternarTema, cliques }}>
      {children}
    </TemaContext.Provider>
  );
}

// 3. Hook personalizado para facilitar a importação nos componentes
export function useTema() {
  return useContext(TemaContext);
}