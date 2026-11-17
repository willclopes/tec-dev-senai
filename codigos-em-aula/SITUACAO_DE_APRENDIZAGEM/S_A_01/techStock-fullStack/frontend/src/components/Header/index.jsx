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
            <LinkMenu to="/dashboard">MENU 1</LinkMenu>
            <LinkMenu to="/relatorio">MENU 2</LinkMenu>
            <LinkMenu to="/consultas">MENU 3</LinkMenu>
          </Navegacao>
    
    <BotaoNovo>+ Cadastrar Novo item</BotaoNovo>
        </Barra>
      </Faixa>
    </Cabecalho>
  );
}