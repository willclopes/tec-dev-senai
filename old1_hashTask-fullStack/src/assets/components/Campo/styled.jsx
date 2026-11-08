import styled from "styled-components";

// É um <label>: clicar no texto leva o cursor para o input (bom para acessibilidade)
export const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;

  /* Estiliza qualquer input ou select que esteja dentro do Campo */
  input,
  select {
    width: 100%;
    padding: 12px 14px;
    border-radius: var(--raio-medio);
    border: 1.5px solid ${({ $temErro }) => ($temErro ? "var(--cor-erro)" : "var(--cor-borda)")};
    background: var(--cor-superficie-suave);
    color: var(--cor-texto);
    transition: all 0.2s ease;

    &::placeholder {
      color: var(--cor-texto-suave);
      opacity: 0.7;
    }

    /* Quando o campo está selecionado (foco) */
    &:focus {
      outline: none;
      border-color: var(--cor-primaria);
      background: var(--cor-superficie);
      box-shadow: 0 0 0 4px var(--cor-primaria-clara);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;

export const Rotulo = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--cor-texto);
`;

export const MensagemErro = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--cor-erro-texto);
`;