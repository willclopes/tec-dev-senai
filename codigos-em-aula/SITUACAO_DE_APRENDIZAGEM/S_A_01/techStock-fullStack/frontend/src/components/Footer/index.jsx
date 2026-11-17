import { Logo } from "../Logo/index.jsx";
import { Conteudo, Texto, ContainerFlutuante } from "./styled.jsx";

export function Footer() {
  return (
    <ContainerFlutuante>
    {/* <RodapeAntigo> */}
      <Conteudo>
        <Logo />
        <Texto>Feito para a TechSolutions · 2026 · Tec Dev Sistemas Web · SENAI  🎓</Texto>
      </Conteudo>
  
  
  {/* </RodapeAntigo> */}
  </ContainerFlutuante>

);
}
