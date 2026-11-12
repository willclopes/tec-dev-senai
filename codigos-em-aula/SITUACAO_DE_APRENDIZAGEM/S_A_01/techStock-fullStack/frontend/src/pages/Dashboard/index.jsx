
import {
  ContainerPrincipal,   Indicadores, Card, NumeroCard, LegendaCard, Grade, Painel, TituloPainel, DescricaoPainel, Formulario,
  CampoFormulario, BotaoCadastro, TabelaContainer, Tabela, Status, BotaoAcao, Paginacao } from "./styled.jsx";

export default function Dashboard() {
  return (
    <ContainerPrincipal>

     <Indicadores>

        <Card $tipo="total">
          <LegendaCard>Total e ativos</LegendaCard>
          <NumeroCard>18</NumeroCard>
          <LegendaCard>Equipamentos cadastrados</LegendaCard>
        </Card>

        <Card $tipo="disponiveis">
          <LegendaCard>Disponíveis</LegendaCard>
          <NumeroCard>10</NumeroCard>
          <LegendaCard>Prontos para utilização</LegendaCard>
        </Card>

        <Card $tipo="emprestados">
          <LegendaCard>Emprestados</LegendaCard>
          <NumeroCard>5</NumeroCard>
          <LegendaCard>Em utilização</LegendaCard>
        </Card>

        <Card $tipo="manutencao">
          <LegendaCard>Em manutenção</LegendaCard>
          <NumeroCard>3</NumeroCard>
          <LegendaCard>Aguardando liberação</LegendaCard>
        </Card>

      </Indicadores>

     

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
