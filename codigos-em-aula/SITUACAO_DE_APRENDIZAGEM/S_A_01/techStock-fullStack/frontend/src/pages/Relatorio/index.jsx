import {Banner} from "../../components/Banner/index.jsx";
import {
  ContainerPrincipal, Apresentacao, Etiqueta, TituloPagina, DescricaoPagina, Grade,
  Painel, TituloPainel, DescricaoPainel, Categoria, Barra, LinhaSituacao, Status,
  Destaque, NumeroDestaque, TabelaContainer, Tabela } from "./styled.jsx";


export function Relatorio(tipo) {
  return (
    <ContainerPrincipal>

     
        <Banner
        tituloSuperior="TECHSTOCK / RELATÓRIOS"
        title="Os números contam a história."
        description="Acompanhe a distribuição, a disponibilidade e a situação dos equipamentos da empresa."
      />





      <Grade>


        <Painel>

            <TituloPainel>
                Total de equipamentos Cadastrados
            </TituloPainel>

            <DescricaoPainel>
                Distribuição dos Ativos por Categoria.
            </DescricaoPainel>


            <LinhaSituacao>
                <Status>Notebook</Status>         
                <strong>10</strong>
            </LinhaSituacao>

            <LinhaSituacao>
                <Status>Monitor</Status>         
                <strong>10</strong>
            </LinhaSituacao>


            <LinhaSituacao>
                <Status>Headset</Status>         
                <strong>10</strong>
            </LinhaSituacao>


           <LinhaSituacao>
                <Status>Mouse</Status>         
                <strong>10</strong>
            </LinhaSituacao>


            <LinhaSituacao>
                <Status>Teclado</Status>         
                <strong>10</strong>
            </LinhaSituacao>


            <LinhaSituacao>
                <Status>Acessório</Status>         
                <strong>10</strong>
            </LinhaSituacao>



        <Destaque $tipo={"disponiveis"}>
            <span> Taxa de disponibilidade </span>
            <NumeroDestaque> 56% </NumeroDestaque>
        </Destaque>
          
    </Painel>

        

        <Painel>

        
          <TituloPainel>
            Situação dos Empréstimos
          </TituloPainel>

          <DescricaoPainel>
            Distribuição dos Ativos por Empréstimos.
          </DescricaoPainel>


         
            <LinhaSituacao>
                <Status>Notebook</Status>         
                <strong>10</strong>
            </LinhaSituacao>

            <LinhaSituacao>
                <Status>Monitor</Status>         
                <strong>10</strong>
            </LinhaSituacao>


            <LinhaSituacao>
                <Status>Headset</Status>         
                <strong>10</strong>
            </LinhaSituacao>


           <LinhaSituacao>
                <Status>Mouse</Status>         
                <strong>10</strong>
            </LinhaSituacao>


            <LinhaSituacao>
                <Status>Teclado</Status>         
                <strong>10</strong>
            </LinhaSituacao>


            <LinhaSituacao>
                <Status>Acessório</Status>         
                <strong>10</strong>
            </LinhaSituacao>



          <Destaque $tipo={"emprestados"}>

            <span>
              Taxa de Empréstimos
            </span>

            <NumeroDestaque>
              44%
            </NumeroDestaque>

          </Destaque>

          

        </Painel>

      </Grade>



    </ContainerPrincipal>
  );
}
