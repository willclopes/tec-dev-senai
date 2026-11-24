import { Logo } from "../Logo/index.jsx";
import { Conteudo, Texto, ContainerFlutuante } from "./styled.jsx";

export function Footer() {
  return (
    <ContainerFlutuante>
    {/* <RodapeAntigo> */}
      <Conteudo>
        <Logo />
        <Texto>Feito para a TechStock · 2026 · Tec Dev Sistemas Web · SENAI · WILLIAN  🎓</Texto>
      </Conteudo>
  
  
  {/* </RodapeAntigo> */}
  </ContainerFlutuante>

);
}
