import { useEffect, useState } from "react"
import axios from "axios"
import Swal from "sweetalert2"

import {
  ContainerPrincipal, IndicadoresCards, Painel, TituloPainel, DescricaoPainel, Formulario, LinhaCampos, 
  CampoFormulario, LinhaOpcoes, GrupoRadio, OpcoesCategoria, OpcoesSituacao, BotaoCadastro, } from "./styled.jsx";

import {Cards} from "../../components/Cards/index.jsx";
import {Banner} from "../../components/Banner/index.jsx";
import {Catalogo} from "../../components/Catalogo/index.jsx";

export function Dashboard() {
  const [equipamentos, setEquipamentos] = useState([])
  const [formData, setFormData] = useState({
      id: '',
      nome: '', 
      categoria: '', 
      numero_serie: '',
      status: '', 
      data_aquisicao: ''
  })

  const [paginaAtual, setPaginaAtual] = useState(1)
  const [totalPaginas, setTotalPaginas] = useState(1) 

  const [resumo, setResumo] = useState({})

  const fetchEquipamentos = async (pagina = paginaAtual) => {
      const response = await axios.get(`http://127.0.0.1:3003/equipamentos?page=${pagina}&limit=10`)
      setEquipamentos(response.data.data)
      setTotalPaginas(response.data.meta.totalPaginas)
      setResumo(response.data.resumo)
  }

  useEffect(() => {
      fetchEquipamentos(paginaAtual);
  }, [paginaAtual])

  const handleInputChange = (e) => {
      const {name, value} = e.target
      setFormData((prev) => ({ ...prev, [name]: value}))
  } 

  const handleSubmit = async (e) => {
      e.preventDefault()

      if (formData.id){
          await axios.put(`http://127.0.0.1:3003/equipamentos/${formData.id}`, formData)
      } else {
          await axios.post('http://127.0.0.1:3003/equipamentos', formData)
      }

      await fetchEquipamentos()
      setFormData({
          id: '',
          nome: '',
          categoria: '',
          numero_serie: '',
          status: '',
          data_aquisicao: ''
      })

      Swal.fire({
          title: formData.id ? "Atualizado com sucesso!" : "Cadastrado com sucesso!",
          text: `O equipamento "${formData.nome}" foi salvo no sistema.`,
          icon: "success",
          iconColor: "var(--green)", 
          background: "var(--gradient-success)", 
          color: "var(--text)", 
          backdrop: "rgba(52, 35, 63, 0.45)", 
          timer: 900,
          showConfirmButton: false
      })
  }

  const handleEdit = (equipamento) => {
      setFormData(equipamento)
  }
     
  const handleDelete = async (id) => {
      const resultado = await Swal.fire({
          title: "Tem certeza?",
          text: "Essa ação não poderá ser desfeita!",
          icon: "warning",
          iconColor: "var(--coral)", 
          background: "var(--gradient-warning)", 
          color: "var(--text)", 
          backdrop: "rgba(12, 9, 13, 0.45)", 
          showCancelButton: true,
          confirmButtonColor: "var(--coral)", 
          cancelButtonColor: "var(--muted)",  
          confirmButtonText: "Sim, excluir!",
          cancelButtonText: "Cancelar"
      })

      if (resultado.isConfirmed) {
          await axios.delete(`http://127.0.0.1:3003/equipamentos/${id}`)
          await fetchEquipamentos()

          Swal.fire({
              title: "Excluído!",
              text: "O equipamento foi removido com sucesso.",
              icon: "success",
              iconColor: "var(--green)",
              background: "var(--gradient-success)",
              color: "var(--text)",
              timer: 900,
              showConfirmButton: false
          })
      }
  }

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
          numerocard={resumo.total}
          legendacard="Equipamentos cadastrados"
          icone="⌨"
        />
        <Cards
          tipo="disponiveis"
          legenda="Disponíveis"
          numerocard={resumo.disponiveis}
          legendacard="Prontos para utilização"
          icone="✔"
        />
        <Cards
          tipo="emprestados"
          legenda="Emprestados"
          numerocard={resumo.emprestados}
          legendacard="Em utilização"
          icone="⇄"
        />
        <Cards
          tipo="manutencao"
          legenda="Em manutenção"
          numerocard={resumo.manutencao}
          legendacard="Aguardando liberação"
          icone="🛠"
        />
      </IndicadoresCards>

      <Painel id="cadastro">
        <TituloPainel>Cadastrar equipamento</TituloPainel>
        <DescricaoPainel>
          Preencha os dados do novo equipamento.
        </DescricaoPainel>

        <Formulario onSubmit={handleSubmit}>
          <LinhaCampos>
            <CampoFormulario>
              <label htmlFor="nome">Nome do equipamento</label>
              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="Ex.: Notebook Dell"
                value={formData.nome}
                onChange={handleInputChange}
              />
            </CampoFormulario>

            <CampoFormulario>
              <label htmlFor="serie">Número de série</label>
              <input
                id="serie"
                name="numero_serie"
                type="text"
                placeholder="Ex.: NB-001"
                value={formData.numero_serie}
                onChange={handleInputChange}
              />
            </CampoFormulario>

            <CampoFormulario>
              <label htmlFor="data">Data de aquisição</label>
              <input
                id="data"
                name="data_aquisicao"
                type="date"
                value={formData.data_aquisicao}
                onChange={handleInputChange}
              />
            </CampoFormulario>
          </LinhaCampos>

          <LinhaOpcoes>
            <GrupoRadio>
              <legend>Categoria</legend>

              <OpcoesCategoria>
                <label>
                  <input 
                  type="radio" 
                  name="categoria" 
                  value="Monitor" 
                  checked={formData.categoria === "Monitor"} 
                  onChange={handleInputChange} 
                  />
                  Monitor
                </label>

                <label>
                  <input 
                  type="radio" 
                  name="categoria"
                  value="Headset" 
                  checked={formData.categoria === "Headset"} 
                  onChange={handleInputChange}
                  />
                  Headset
                </label>

                <label>
                  <input 
                  type="radio" 
                  name="categoria" 
                  value="Mouse" 
                  checked={formData.categoria === "Mouse"} 
                  onChange={handleInputChange}
                  />
                  Mouse
                </label>

                <label>
                  <input 
                  type="radio" 
                  name="categoria" 
                  value="Teclado" 
                  checked={formData.categoria === "Teclado"} 
                  onChange={handleInputChange}
                  />
                  Teclado
                </label>

                <label>
                  <input
                    type="radio"
                    name="categoria"
                    value="Notebook"
                    checked={formData.categoria === "Notebook"} 
                    onChange={handleInputChange}
                  />
                  Notebook
                </label>

                <label>
                  <input 
                  type="radio" 
                  name="categoria" 
                  value="Acessório" 
                  checked={formData.categoria === "Acessório"} 
                  onChange={handleInputChange}
                  />
                  Outro
                </label>
              </OpcoesCategoria>
            </GrupoRadio>

            <GrupoRadio>
              <legend>Situação</legend>

              <OpcoesSituacao>
                <label>
                  <input
                    type="radio"
                    name="status"
                    value="Disponível"
                    checked={formData.status === "Disponível"} 
                    onChange={handleInputChange}
                  />
                  Disponível
                </label>

                <label>
                  <input
                    type="radio"
                    name="status"
                    value="Emprestado"
                    checked={formData.status === "Emprestado"} 
                    onChange={handleInputChange}
                  />
                  Emprestado
                </label>

                <label>
                  <input
                    type="radio"
                    name="status"
                    value="Manutenção"
                    checked={formData.status === "Manutenção"} 
                    onChange={handleInputChange}
                  />
                  Manutenção
                </label>
              </OpcoesSituacao>
            </GrupoRadio>

            <BotaoCadastro type="submit">
              {formData.id ? "✎ᝰ Atualizar equipamento" : "+ Cadastrar equipamento"}
            </BotaoCadastro>
          </LinhaOpcoes>
        </Formulario>
      </Painel>

   
      <Catalogo
        titulo="Catálogo de ativos"
        descricao="Equipamentos cadastrados na empresa."
        equipamentos={equipamentos}
        mostrarAcoes={true}
        onEdit={handleEdit}
        onDelete={handleDelete}
        paginaAtual={paginaAtual}
        totalPaginas={totalPaginas}
        onPaginaAnterior={() => setPaginaAtual(paginaAtual - 1)}
        onPaginaProxima={() => setPaginaAtual(paginaAtual + 1)}
      />
    </ContainerPrincipal>
  );
}