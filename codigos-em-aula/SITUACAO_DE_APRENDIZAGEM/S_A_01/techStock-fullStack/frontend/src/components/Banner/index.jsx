import { useEffect, useState } from "react"
import axios from "axios"
import { ListSection, MainContainer, RegisterSection } from "./styled"


export default function Banner() {
    const [equipamentos, setEquipamentos] = useState([])
    const [formData, setFormData] = useState({
        id: '',
        nome: '', 
        categoria: '', 
        numero_serie: '',
        status: '', 
        data_aquisicao: ''

    })

    const fetchEquipamentos = async () => {
        const response = await axios.get('http://127.0.0.1:3003/equipamentos')
        setEquipamentos(response.data)
        //console.log(response)
    }

    useEffect(() => {
        fetchEquipamentos();
    }, [])


    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData((prev) => ({ ...prev, [name]: value}))
    } 

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('enviado')
        const response = await axios.post('http://127.0.0.1:3003/equipamentos', formData)

        setEquipamentos([...equipamentos, formData])
        console.log(response)

    }


 
    


    return(
       <MainContainer>
            <h2>Sistema de Cadastro de Equipamentos</h2>

           
        <RegisterSection>

            <form onSubmit={handleSubmit}>
               <input 
                    type="text" 
                    placeholder="Nome" 
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    />

                    <input 
                    type="text" 
                    placeholder="categoria" 
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleInputChange}
                    />

                    <input 
                    type="text" 
                    placeholder="numero_serie" 
                    name="numero_serie"
                    value={formData.numero_serie}
                    onChange={handleInputChange}
                    />

                    <input 
                    type="text" 
                    placeholder="status" 
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    />

                    <input 
                    type="text" 
                    placeholder="data_aquisicao" 
                    name="data_aquisicao"
                    value={formData.data_aquisicao}
                    onChange={handleInputChange}
                    />               

                <button type="submit">Cadastrar</button>
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
                                        <td>{equipamento.data_aquisicao}</td>
                                        <td><button type="submit">✏️</button></td>
                                        <td><button type="submit">✖️ </button></td>
                                    </tr>
                            ))              
                       }
                    </tbody>
               </table>
           </ListSection>    
       </MainContainer>

    )
};