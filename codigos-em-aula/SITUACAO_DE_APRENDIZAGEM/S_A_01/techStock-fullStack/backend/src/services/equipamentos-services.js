import { v4 } from "uuid"
import { db } from "../database/connection.js"

export async function getAllEquipamentos(page = 1, limit = 10) {
    
    const pagina = Number(page)
    const limite = Number(limit)

    /* Fórmula do OFFSET: quantos itens o banco deve pular
     Ex: Página 1 -> (1 - 1) * 10 = pula 0
     Ex: Página 2 -> (2 - 1) * 10 = pula 10
    */
    
    const offset = (pagina - 1) * limite

    const [equipamentos] = await db.query(
        "SELECT * FROM equipamentos ORDER BY id DESC LIMIT ? OFFSET ?",
        [limite, offset]

    )

        //Consultas no banco para usar nos cards e no resumo

            const [contagem] = await db.query(`
        
        SELECT 
            COUNT(*) AS total,
            SUM(status = 'Disponível') AS disponiveis,
            SUM(status = 'Emprestado') AS emprestados,
            SUM(status = 'Manutenção' OR status = 'Em manutenção') AS manutencao,
            
            COUNT(DISTINCT categoria) AS totalCategorias,
           
            SUM(categoria = 'Notebook' OR categoria = 'Notebooks') AS notebooks,
            SUM(categoria = 'Monitor') AS monitores,
            SUM(categoria = 'Mouse') AS mouses,
            SUM(categoria = 'Acessório' OR categoria = 'Acessorio') AS acessorios,
            SUM(categoria = 'Teclado') AS teclados,
            SUM(categoria = 'Headset') AS headsets
        
        FROM equipamentos
    `)

        const dados = contagem[0]
        const total = Number(dados.total) || 0
        const disponiveis = Number(dados.disponiveis) || 0
        const emprestados = Number(dados.emprestados) || 0
        const manutencao = Number(dados.manutencao) || 0

        const pctDisponivel = total > 0 ? Math.round((disponiveis / total) * 100) : 0
        const pctEmprestado = total > 0 ? Math.round((emprestados / total) * 100) : 0
        const pctManutencao = total > 0 ? Math.round((manutencao / total) * 100) : 0

    const [resultadoTotal] = await db.query(
        "SELECT COUNT(*) AS total FROM equipamentos"
    )
    const totalItens = resultadoTotal[0].total

    const totalPaginas = Math.ceil(totalItens / limite)

    return {
        data: equipamentos,
        meta: {
            totalItens: totalItens,
            totalPaginas: totalPaginas,
            paginaAtual: pagina,
            itensPorPagina: limite
        },
        resumo: {
            total: total,
            disponiveis: disponiveis,
            emprestados: emprestados,
            manutencao: manutencao,
            totalCategorias: Number(dados.totalCategorias) || 0,
            pctDisponivel: pctDisponivel,
            pctEmprestado: pctEmprestado,
            pctManutencao: pctManutencao,
            notebooks: Number(dados.notebooks) || 0,
            monitores: Number(dados.monitores) || 0,
            mouses: Number(dados.mouses) || 0,
            acessorios: Number(dados.acessorios) || 0,
            teclados: Number(dados.teclados) || 0,
            headsets: Number(dados.headsets) || 0
    }
  }
}

/*

export async function getAllEquipamentos() {
    const [ equipamentos ] = await db.query("SELECT * FROM equipamentos ORDER BY id DESC")

    return equipamentos
}

*/




export async function getEquipamentoById(id) {
    const [ equipamento ] = await db.query("SELECT * FROM equipamentos WHERE id = ?", [id])
    
    return equipamento
}

export async function postEquipamento(body) {
    const {nome, categoria, numero_serie, status, data_aquisicao  } = body

    const equipamento = await db.query("INSERT INTO equipamentos (nome, categoria, numero_serie, status, data_aquisicao) VALUES (?, ?, ?, ?, ? )", [ nome, categoria, numero_serie, status, data_aquisicao])
    
    return equipamento
}

export async function deleteEquipamentoService(id) {
    await db.query("DELETE FROM equipamentos WHERE id = ?", [id])

    return "equipamento deleted!"
}

export async function putEquipamentoService(id, body){
    const { nome, categoria, numero_serie, status, data_aquisicao } = body
    
    const [result] = await db.query(
        "UPDATE equipamentos SET nome = ?, categoria = ?, numero_serie = ?, status = ?, data_aquisicao = ? WHERE id = ?",
        [nome, categoria, numero_serie, status, data_aquisicao, id]
    )

    if (result.affectedRows === 0) {
        return null
    }

    return "equipamento updated!"


}

export async function patchEquipamentoService(id, body){
    const index = equipamentos.findIndex(equipamento => equipamento.id === id)

    if(index === -1) {
        response.code(404).send({ message: "equipamento not found!" })
    }

    equipamentos[index] = {  ...equipamentos[index], ...body }

    return "equipamento updated!"
}