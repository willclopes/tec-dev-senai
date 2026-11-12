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
    const { name, email, password } = body

    const equipamento = await db.query("INSERT INTO equipamentos (id, name, email, password, createdAt) VALUES (?, ?, ?, ?, ?)", [v4(), name, email, password, "arroz"])
    
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