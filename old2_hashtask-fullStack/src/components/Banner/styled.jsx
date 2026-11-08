import styled from "styled-components";

export const Container = styled.section`
  /* A aparência muda conforme a página, sem duplicar o componente Banner. */
  background: ${({ $variant }) => {
    if ($variant === "auth") return "var(--gradient-banner-auth)";
    if ($variant === "tarefas") return "var(--gradient-banner-tarefas)";
    if ($variant === "cripto") return "var(--gradient-banner-cripto)";
    if ($variant === "favoritos") return "var(--gradient-banner-favoritos)";
    if ($variant === "conversor") return "var(--gradient-banner-conversor)";
    if ($variant === "assinatura") return "var(--gradient-banner-assinatura)";
    if ($variant === "admin") return "var(--gradient-banner-admin)";
    return "var(--gradient-banner)";
  }};
  min-height: 244px;
  border-radius: 34px;
  position: relative;
  padding: clamp(25px, 5vw, 52px);
  overflow: hidden;
  display: flex;
  align-items: center;
  border: 1px solid var(--surface-80);
  
 
  &::before {
    content: "";
    position: absolute;
    width: 340px;
    height: 300px;
    border: 2px solid var(--surface-65);
    border-radius: 115px 115px 115px 6px;
    right: 10%;
    top: 10px;
    transform: rotate(-7deg);
  }
  &::after {
    content: "♯.";
    position: absolute;
    right: 12%;
    bottom: 30px;
    color: var(--surface-70);
    font-size: 320px;
    line-height: 1;
    transform: rotate(-7deg);
  }
`;
export const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 700px;
  span {
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-weight: 800;
    font-size: 11px;
    margin-bottom: 15px;
  }
  h1 {
    font-size: clamp(37px, 5vw, 69px);
    line-height: 1.02;
    margin-bottom: 16px;
    max-width: 680px;
    font-weight: 800;
  }
  p {
    margin: 0;
    line-height: 1.6;
    font-size: 15px;
    max-width: 540px;
  }
`;