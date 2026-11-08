import styled from "styled-components";

/*
 * Todos os estilos exclusivos da logo ficam aqui.
 * O Header, Footer e as páginas NÃO precisam repetir essas regras.
 * As cores e sombras vêm de src/styles/palette.css por var(--nome).
 */
export const LogoLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ $compact }) => ($compact ? "8px" : "11px")};
  width: fit-content;
  white-space: nowrap;

  /* A logo também pode ser acessada pelo teclado. */
  &:focus-visible {
    outline: 2px solid var(--coral);
    outline-offset: 5px;
    border-radius: 10px;
  }
`;

export const LogoMark = styled.span`
  display: grid;
  place-items: center;

  width: ${({ $compact }) => ($compact ? "32px" : "42px")};
  height: ${({ $compact }) => ($compact ? "32px" : "42px")};

  /* Canto inferior diferente para dar personalidade ao símbolo. */
  border-radius: 15px 15px 15px 6px;
  background: var(--gradient-brand);
  color: var(--ink);

  font:
    800 ${({ $compact }) => ($compact ? "12px" : "16px")} "Outfit",
    sans-serif;

  /* A leve inclinação já fazia parte da logo original. */
  transform: rotate(-20deg);
  box-shadow: var(--logo-shadow);
  
  :hover & {
    transform: rotate(0deg) scale(1.06);
  }
  
`;

export const LogoName = styled.span`
  font:
    800 ${({ $compact }) => ($compact ? "20px" : "27px")} "Outfit",
    sans-serif;
  letter-spacing: -0.055em;
  color: var(--ink);

  
`;