import { useState } from "react";

import {
  ContainerPrincipal,
  IndicadoresCards,
  Painel,
  TituloPainel,
  DescricaoPainel,
  Formulario,
  LinhaCampos,
  CampoFormulario,
  LinhaOpcoes,
  GrupoRadio,
  OpcoesCategoria,
  OpcoesSituacao,
  BotaoCadastro,
} from "./styled.jsx";

import Cards from "../../components/Cards/index.jsx";
import Banner from "../../components/Banner/index.jsx";
import Catalogo from "../../components/Catalogo/index.jsx";

import { equipamentosIniciais } from "../../../src/data/equipamentos.js"






export default function Dashboard() {

  const [equipamentos, setEquipamentos] = useState(
  equipamentosIniciais
);




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

      <Painel>

        <TituloPainel>
          Cadastrar equipamento
        </TituloPainel>

        <DescricaoPainel>
          Preencha os dados do novo equipamento.
        </DescricaoPainel>


        <Formulario>

          {/* PRIMEIRA LINHA - DADOS */}

          <LinhaCampos>

            <CampoFormulario>

              <label htmlFor="nome">
                Nome do equipamento
              </label>

              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="Ex.: Notebook Dell"
              />

            </CampoFormulario>


            <CampoFormulario>

              <label htmlFor="serie">
                Número de série
              </label>

              <input
                id="serie"
                name="numero_serie"
                type="text"
                placeholder="Ex.: TS-NB-001"
              />

            </CampoFormulario>


            <CampoFormulario>

              <label htmlFor="data">
                Data de aquisição
              </label>

              <input
                id="data"
                name="data_aquisicao"
                type="date"
              />

            </CampoFormulario>

          </LinhaCampos>


          {/* SEGUNDA LINHA - CATEGORIA, SITUAÇÃO E BOTÃO */}

          <LinhaOpcoes>

            {/* CATEGORIAS */}

            <GrupoRadio>

              <legend>
                Categoria
              </legend>

              <OpcoesCategoria>

                <label>
                  <input type="radio" name="categoria" value="Monitor" />
                  Monitor
                </label>

                <label>
                  <input type="radio" name="categoria" value="Headset" />
                  Headset
                </label>

                <label>
                  <input type="radio" name="categoria" value="Mouse" />
                  Mouse
                </label>

                <label>
                  <input type="radio" name="categoria" value="Teclado" />
                  Teclado
                </label>

                <label>
                  <input
                    type="radio"
                    name="categoria"
                    value="Notebook"
                    defaultChecked
                  />
                  Notebook
                </label>

                <label>
                  <input type="radio" name="categoria" value="Outro" />
                  Outro
                </label>

              </OpcoesCategoria>

            </GrupoRadio>


            {/* SITUAÇÃO */}

            <GrupoRadio>

              <legend>
                Situação
              </legend>

              <OpcoesSituacao>

                <label>
                  <input
                    type="radio"
                    name="status"
                    value="disponivel"
                    defaultChecked
                  />
                  Disponível
                </label>

                <label>
                  <input
                    type="radio"
                    name="status"
                    value="emprestado"
                  />
                  Emprestado
                </label>

                <label>
                  <input
                    type="radio"
                    name="status"
                    value="manutencao"
                  />
                  Manutenção
                </label>

              </OpcoesSituacao>

            </GrupoRadio>


            {/* BOTÃO AO LADO DOS RADIO BUTTONS */}

            <BotaoCadastro type="button">
              + Cadastrar equipamento
            </BotaoCadastro>

          </LinhaOpcoes>

        </Formulario>

      </Painel>

      {/* ====================================== */}
      {/* ÁREA DE CADASTRO  - FIM                */}
      {/* ====================================== */}


      <Catalogo
        titulo="Catálogo de ativos"
        descricao="Equipamentos cadastrados na empresa."
        equipamentos={equipamentos}
        mostrarAcoes={true}
      />


    </ContainerPrincipal>
  );
}
