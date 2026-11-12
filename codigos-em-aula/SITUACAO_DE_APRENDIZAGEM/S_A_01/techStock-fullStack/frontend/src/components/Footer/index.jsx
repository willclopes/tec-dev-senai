import { Logo } from "../Logo/index.jsx";
import { Rodape, Conteudo, Texto } from "./styled.jsx";

export default function Footer() {
  return (
    <Rodape>
      <Conteudo>
        <Logo />
        <Texto>Feito para a TechSolutions · 2026 · Tec Dev Sistemas Web · SENAI  🌿</Texto>
      </Conteudo>
    </Rodape>
  );
}
