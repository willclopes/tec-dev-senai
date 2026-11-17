import { Logo } from "../Logo";
import { Barra, BotaoNovo, Faixa, LinkMenu, Navegacao, ContainerFlutuante } from "./styled";


export function Header() {

return (
    
    
    <ContainerFlutuante>


   {/*<ContainerAntigo> */}
      <Faixa>
        <Barra>
         <Logo />
      

       <Navegacao>
          <LinkMenu to="/primeiraversao"> [Primeira Versão]</LinkMenu>
          <LinkMenu to="/dashboard"> 📊Dashboard</LinkMenu>
          <LinkMenu to="/relatorio">📑 Relatório</LinkMenu>
          <LinkMenu to="/consultas">🔍︎ Consultas</LinkMenu>
        </Navegacao>
    
    <BotaoNovo to="/dashboard#cadastro">+ Cadastrar Novo item</BotaoNovo>
        </Barra>
      </Faixa>
    
      {/*<ContainerAntigo> */}

    </ContainerFlutuante>
    
    
   
  
  );
}