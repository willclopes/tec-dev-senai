import { Logo } from "../Logo";
import { Barra, BotaoNovo, Cabecalho, Faixa, LinkMenu, Navegacao } from "./styled";


export default function Header() {

return (
    <Cabecalho>
      <Faixa>
        <Barra>
         <Logo />
      

        <Navegacao>
            <LinkMenu to="/primeiraversao"> [Primeira Versão]</LinkMenu>
            <LinkMenu to="/dashboard"> 📊Dashboard</LinkMenu>
            <LinkMenu to="/relatorio">📑 Relatório</LinkMenu>
            <LinkMenu to="/consultas">🔍︎ Consultas</LinkMenu>
          </Navegacao>
    
    <BotaoNovo>+ Cadastrar Novo item</BotaoNovo>
        </Barra>
      </Faixa>
    </Cabecalho>
  );
}