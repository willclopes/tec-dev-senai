import { useEffect, useState } from "react"
import axios from "axios"
import { ListSection, MainContainer, RegisterSection } from "./styled"

import Swal from "sweetalert2"


export default function PrimeiraVersao() {
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
            
        
        
        //Pede os dados ao servidor e aguarda a resposta
        const response = await axios.get(`http://127.0.0.1:3003/equipamentos?page=${pagina}&limit=10`)
            //Salva apenas a lista de equipamentos (response.data) no estado do React
        setEquipamentos(response.data.data)
        //console.log(response)
        setTotalPaginas(response.data.meta.totalPaginas)
        setResumo(response.data.resumo)
    }


/* explicação

O axios é uma biblioteca que faz a ponte de comunicação (requisições HTTP) entre o seu código React (frontend)e o servidor onde os dados estão salvos (backend/API).

async e await: Como o servidor leva alguns milissegundos para responder, o await faz o código esperar a resposta chegar antes de passar para a linha de baixo.

.data
Quando o axios recebe a resposta do servidor, ele entrega um pacote completo (response). o .data guarda especificamente o conteúdo útil enviado pelo seu backend — neste caso, a lista (array) de equipamentos.

*/

        //Dispara a função uma única vez quando a página carrega
    useEffect(() => {
        fetchEquipamentos(paginaAtual);
    }, [paginaAtual])


/*

handleInputChange e handleSubmit trabalham em conjunto para capturar o que é digitado nos campos do formulário e enviar esses dados para o servidor quando o botão de cadastro é clicado.

handleInputChange (Memória temporária no React): Captura cada tecla digitada nos inputs e guarda no estado formData. Até esse momento, os dados estão apenas na memória do navegador (se você recarregar a página com F5, o que foi digitado some).
handleSubmit (Ponte para a persistência e tela): Empacota o formData e o envia via axios.post para o seu servidor backend (na porta 3003), além de atualizar a lista visual na tela com o setEquipamentos.

*/


    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData((prev) => ({ ...prev, [name]: value}))
    } 

/* explicação
    
- e.target: O parâmetro e representa o evento de digitação, e o e.target identifica exatamente 
    qual elemento input disparou a ação na tela.

- const { name, value } = e.target: Extrai duas propriedades diretamente do input onde o usuário digitou: 
    o nome do campo definido no HTML (como nome ou categoria) e o texto atual (value).
        <input 
        type="text" 
        placeholder="categoria" 
        name="categoria"             // <-- O 'name' nasce aqui (fixo)
        value={formData.categoria}   // <-- O 'value' reflete o texto atual digitado no campo do formulário
        onChange={handleInputChange} // <-- Escuta cada tecla digitada
        />

- setEquipamentos([...equipamentos, formData]): Atualiza a tabela na tela imediatamente, 
    copiando todos os itens que já existiam na lista (...equipamentos) e adicionando o novo formData ao final do array.

*/



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
    


    return(
       <MainContainer>
            <h2>Sistema de Cadastro de Equipamentos</h2>

            <h3> ---- Cards ---- </h3>
            
            <h3>total de equipamentos: {resumo.total} </h3>
            <h3>total Disponível: {resumo.disponiveis}</h3>
            <h3>total Emprestados: {resumo.emprestados}</h3>
            <h3>total Em Manutenção: {resumo.manutencao}</h3>

            <h3> ---- relatorios ---- </h3>

            <h3>Ativos Cadastrados: {resumo.total}</h3>
            <h3>Taxa de Disponibilidade: {resumo.pctDisponivel}%</h3>
            <h3>Quantas Categorias Cadastradas: {resumo.totalCategorias}</h3>
            
            <h3> ---- Situação dos equipamentos ---- </h3>
            
            
           <h3>Porcentagem Disponível: {resumo.pctDisponivel}%</h3>
           <h3>Porcentagem Emprestados: {resumo.pctEmprestado}%</h3>
           <h3>Porcentagem Em Manutenção: {resumo.pctManutencao}%</h3>


            <h3> ---- Quantidade de equipamentos cadastrados por categoria ---- </h3>

            <h3>Notebooks Cadastrados: {resumo.notebooks}</h3>
            <h3>Monitor Cadastrados: {resumo.monitores}</h3>
            <h3>Mouse Cadastrados: {resumo.mouses}</h3>
            <h3>Acessorio Cadastrados: {resumo.acessorios}</h3>
            <h3>Teclado Cadastrados: {resumo.teclados}</h3>
            <h3>Headset Cadastrados: {resumo.headsets}</h3>

           
        <RegisterSection>

            <form onSubmit={handleSubmit}>
               <input 
                    type="text" 
                    placeholder="Nome" 
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    />

                   
                <select 
                    name="categoria" 
                    value={formData.categoria} 
                    onChange={handleInputChange}
>
                    <option value="">Selecione uma categoria...</option>
    
                        <option value="Notebook">Notebook</option>
                        <option value="Monitor">Monitor</option>
                        <option value="Mouse">Mouse</option>
                        <option value="Acessório">Acessório</option>
                        <option value="Teclado">Teclado</option>
                        <option value="Headset">Headset</option>
                </select>
                      
                    <input 
                    type="text" 
                    placeholder="numero_serie" 
                    name="numero_serie"
                    value={formData.numero_serie}
                    onChange={handleInputChange}
                    />

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
               
                    
                    <input 
                    type="date" 
                    placeholder="data_aquisicao" 
                    name="data_aquisicao"
                    value={formData.data_aquisicao}
                    onChange={handleInputChange}
                    />               

                <button type="submit">{formData.id ? "Atualizar" : "Cadastrar"}</button>
            </form>
            </RegisterSection>






            <ListSection>
                <table>
                    <thead>
                        <tr>
                            <th>id | </th>
                            <th>nome | </th>
                            <th>categoria | </th>
                            <th>numero_serie | </th>
                            <th>status | </th>
                            <th>data_aquisicao  </th>
                            <th>Editar |  </th>
                            <th>Deletar |  </th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            equipamentos.map((equipamento) => (
                                 <tr key={equipamento.id}>
                                        <td>{equipamento.id}</td>
                                        <td>{equipamento.nome}</td>
                                        <td>{equipamento.categoria}</td>
                                        <td>{equipamento.numero_serie}</td>
                                        <td>{equipamento.status}</td>
                                        {equipamento.data_aquisicao.split('-').reverse().join('/')}
                                        
                                        <td>
                                            <button type="button" onClick={() => handleEdit(equipamento)}>
                                            ✏️
                                            </button>
                                        </td>
                                        
                                        
                                        
                                        
                                        <td>
                                            <button type="button" onClick={() => handleDelete(equipamento.id)}>
                                                ✖️                                            
                                            </button>
                                        </td>
                                    </tr>
                            ))              
                       }
                    </tbody>
               </table>
           </ListSection> 

<div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>

                            <button 
                                type="button" 
                                onClick={() => setPaginaAtual(paginaAtual - 1)}
                                disabled={paginaAtual === 1}
                            >
                                Anterior
                            </button>

                        <span> Página {paginaAtual} de {totalPaginas} </span>

                     <button 
                            type="button" 
                            onClick={() => setPaginaAtual(paginaAtual + 1)}
                            disabled={paginaAtual >= totalPaginas}
                         >
                            Próxima
                    </button>
                </div>
            </div>




       </MainContainer>

    )
};