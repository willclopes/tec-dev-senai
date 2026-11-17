import { BotaoVoltar,  Conteudo,  Descricao, Etiqueta, Exclamacao,  MainContainer, Numero, Quadro, Titulo } from "./styled";


export function NotFound() {
  return (
    <MainContainer>
      <Quadro>
        <Conteudo>
          
          <Etiqueta>✦ PÁGINA NÃO ENCONTRADA</Etiqueta>
          <Numero>404</Numero>

          <Titulo>Ops! Parece que você se perdeu.</Titulo>

        <Descricao>
            Não encontramos a página que você está procurando.
            Talvez o endereço esteja incorreto ou a página não exista mais.
        </Descricao>

          <BotaoVoltar to="/dashboard"> ↩ Voltar ao Dashboard</BotaoVoltar>
     </Conteudo>

        
        <Exclamacao>!</Exclamacao>


       </Quadro> 
    </MainContainer>

    )
}
