import {
  ContainerPrincipal, IndicadoresCards, Grade, Painel, TituloPainel, DescricaoPainel, Formulario,
  CampoFormulario, BotaoCadastro, TabelaContainer, Tabela, Status, BotaoAcao, Paginacao } from "./styled.jsx";

import Cards from "../../components/Cards/index.jsx";
import Banner from "../../components/Banner/index.jsx";

export default function Dashboard() {
  return (
    <ContainerPrincipal>
    
        <Banner
        tituloSuperior="TECHSTOCK / INVENTÁRIO"
        title="Seu inventário em boas mãos."
        description="Organize, acompanhe e gerencie todos os equipamentos da empresa em um só lugar."
      />

    <IndicadoresCards>
        <Cards
            tipo="total"
            legenda="Total de ativos"
            numerocard={18}
            legendacard="Equipamentos cadastrados"
            icone="⌨"
          />

          <Cards
            tipo="disponiveis"
            legenda="Disponíveis"
            numerocard={10}
            legendacard="Prontos para utilização"
            icone="✔"
          />

          <Cards
            tipo="emprestados"
            legenda="Emprestados"
            numerocard={5}
            legendacard="Em utilização"
            icone="⇄"
          />

          <Cards
            tipo="manutencao"
            legenda="Em manutenção"
            numerocard={3}
            legendacard="Aguardando liberação"
            icone="🛠"
          />

      </IndicadoresCards>



      <Grade>

        {/* LADO ESQUERDO - FORMULARIO DOS CADASTROS - CADASTRO */}

        <Painel>

          <TituloPainel>Cadastrar equipamento</TituloPainel>

          <DescricaoPainel>
            Preencha os dados do novo equipamento.
          </DescricaoPainel>

         
         <Formulario>


            {/* inputs */}


            <BotaoCadastro type="button">
              + Cadastrar equipamento
            </BotaoCadastro>

          </Formulario>

        </Painel>

        {/* LADO DIRETO - LISTA */}

        <Painel>

          <TituloPainel>Catálogo de ativos</TituloPainel>

          <DescricaoPainel>
            Equipamentos cadastrados na empresa.
          </DescricaoPainel>
        

        </Painel>

      </Grade>

    </ContainerPrincipal>
  );
}
