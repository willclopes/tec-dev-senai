import { useState } from "react";

import {Banner} from "../../components/Banner";
import {Catalogo} from "../../components/Catalogo";

import { equipamentosIniciais } from "../../../src/data/equipamentos.js"

import {
  ContainerPrincipal, PainelFiltros, TituloFiltros, DescricaoFiltros, FormularioBusca, GradeFiltros, CampoFiltro, Botoes,
  BotaoBuscar, BotaoLimpar, } from "./styled.jsx";


const filtrosIniciais = {
  busca: "",
  categoria: "todas",
  status: "todos",
  dataInicio: "",
  dataFim: "",
  ordem: "padrao",
};


export function Consultas() {

    const [filtros, setFiltros] = useState(filtrosIniciais);

    const [resultados, setResultados] = useState(
    equipamentosIniciais
  );


      const [equipamentos, setEquipamentos] = useState(
      equipamentosIniciais
    );


    function limparFiltros() {

        // Limpa os campos do formulário.
             setFiltros(filtrosIniciais);

            // Volta a mostrar todos os equipamentos.
            setResultados(equipamentosIniciais);
  }
        
    
    return (       

        <ContainerPrincipal>

        <Banner
            tituloSuperior="TECHSTOCK / CONSULTA"
            title="Encontre o que você precisa."
            description="Pesquise e filtre os equipamentos cadastrados de forma rápida e organizada."
      />

       

    <PainelFiltros>
            <TituloFiltros> Consultar equipamentos </TituloFiltros>

        <DescricaoFiltros>
          Utilize os filtros abaixo para encontrar equipamentos.
        </DescricaoFiltros>

        <FormularioBusca 
        //onSubmit={buscarEquipamentos}
        >

            <GradeFiltros>

                <CampoFiltro>

              <label htmlFor="busca">
                Nome ou número de série
              </label>

              <input
                id="busca"
                type="text"
                placeholder="Ex.: Notebook Dell"
                value={filtros.busca}
                //onChange=
                
              />
            </CampoFiltro>

            <CampoFiltro>

              <label htmlFor="categoria">
                Categoria
              </label>

              <select
                id="categoria"
                value={filtros.categoria}
                onChange={(event) =>
                  setFiltros({
                    ...filtros,
                    categoria: event.target.value,
                  })
                }
              >
                <option value="todas">
                  Todas as categorias
                </option>

                <option value="Monitor">Monitor</option>
                <option value="Headset">Headset</option>
                <option value="Mouse">Mouse</option>
                <option value="Teclado">Teclado</option>
                <option value="Notebook">Notebook</option>
                <option value="Outro">Acessórios</option>

              </select>

            </CampoFiltro>


                <CampoFiltro>

              <label htmlFor="status">
                Situação
              </label>

              <select
                id="status"
                value={filtros.status}
                onChange={(event) =>
                  setFiltros({
                    ...filtros,
                    status: event.target.value,
                  })
                }
              >
                <option value="todos">
                  Todas as situações
                </option>

                <option value="disponivel">
                  Disponível
                </option>

                <option value="emprestado">
                  Emprestado
                </option>

                <option value="manutencao">
                  Em manutenção
                </option>

              </select>

            </CampoFiltro>



        </GradeFiltros>

            <Botoes>

            <BotaoLimpar
              type="button"
              //onClick={limparFiltros}
            >
              Limpar filtros
            </BotaoLimpar>


            <BotaoBuscar type="submit">
              Buscar equipamentos
            </BotaoBuscar>

          </Botoes>

        </FormularioBusca>



    </PainelFiltros>



        <Catalogo
    titulo="Resultados da pesquisa"
    descricao="Equipamentos encontrados na consulta."
    equipamentos={equipamentos}
/>


    </ContainerPrincipal>

    )
}