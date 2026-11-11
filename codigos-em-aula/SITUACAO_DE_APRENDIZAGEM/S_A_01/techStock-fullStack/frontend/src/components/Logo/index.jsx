import { LogoContainer, LogoImg, Nome, Subtitulo, TextoLogo } from "./styled";

export function Logo() {
  return (
    <LogoContainer aria-label="TechStock - voltar ao dashboard">
      <LogoImg>TS.I²</LogoImg>
      <TextoLogo>
        <Nome>tech<span>stock</span></Nome>
        <Subtitulo>INVENTÁRIO INTELIGENTE</Subtitulo>
      </TextoLogo>
    </LogoContainer>
  );
}