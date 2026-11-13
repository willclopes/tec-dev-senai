import { v4 } from "uuid"
import { db } from "../database/connection.js"

export async function getAllEquipamentos() {
    const [ equipamentos ] = await db.query("SELECT * FROM equipamentos")

    return equipamentos
}

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
    equipamentos = equipamentos.filter(equipamento => equipamento.id !== id)

    return "equipamento deleted!"
}

export async function putEquipamentoService(id, body){
    const index = equipamentos.findIndex(equipamento => equipamento.id === id)

    if(index === -1) {
        response.code(404).send({ message: "equipamento not found!" })
    }

    equipamentos[index] = body

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