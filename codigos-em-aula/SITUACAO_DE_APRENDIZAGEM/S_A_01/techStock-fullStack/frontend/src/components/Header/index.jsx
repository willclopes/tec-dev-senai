import { Logo } from "../Logo";
import { Barra, BotaoNovo, Cabecalho, Faixa, LinkMenu, Navegacao } from "./styled";


export default function Header() {

return (
    <Cabecalho>
      <Faixa>
        <Barra>
         <Logo />
      

        <Navegacao>
            <LinkMenu href="/">Dashboard</LinkMenu>
            <LinkMenu href="/relatorio">Últimos Cadastros</LinkMenu>
            <LinkMenu href="/relatorio">Relatório</LinkMenu>
          </Navegacao>
    
    <BotaoNovo>+ Cadastrar NOVO item</BotaoNovo>
        </Barra>
      </Faixa>
    </Cabecalho>
  );
}