import { v4 } from 'uuid'
import { createEquipamentos, deleteEquipamentos, listAllEquipamentos, listEquipamentosById, patchEquipamentos, putEquipamentos } from '../controller/equipamentos-controller.js'

export async function usersRoutes(app) {
    // listar todos Equipamentos
    app.get('/', listAllEquipamentos)
    // listar um Equipamento(s)
    app.get('/:id', listEquipamentosById)
    // Cadastrar um Equipamento(s)
    app.post('/', createEquipamentos)
    // Deletar um Equipamento(s)
    app.delete('/:id', deleteEquipamentos)
    // Atualizar todo o Equipamento(s)
    app.put('/:id', putEquipamentos)
    // Atualizar parcialmente um Equipamento(s)
    app.patch('/:id', patchEquipamentos)
}