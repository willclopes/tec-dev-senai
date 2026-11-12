import { deleteEquipamentoService, getAllEquipamentos, getEquipamentoById, patchEquipamentoService, postEquipamento, putEquipamentoService } from "../services/equipamentos-services.js"


export async function listAllEquipamentos(request, response){
    const equipamentos = await getAllEquipamentos()

    return response.code(200).send(equipamentos)
}

export async function listEquipamentosById(request, response){
        const equipamentos = await getEquipamentoById(request.params.id)

        if(!equipamentos) {
            response.code(404).send({ message: "Equipamentos not found!"})
        }

        response.code(200).send(equipamentos)
}

export async function createEquipamentos(request, response) {
        const newEquipamentos = await postEquipamento(request.body)

        response.code(201).send(newEquipamentos)
}

export async function deleteEquipamento(request, response){
        const message = await deleteEquipamentoService(request.params.id)

        response.code(202).send({ message: message })
    }

export async function putEquipamentos(request, response) {
        const message = await putEquipamentoService(request.params.id, request.body)

        response.code(200).send({ message:  message})
}

export async function patchEquipamentos(request, response){
        const message = await patchEquipamentoService(request.params.id, request.body)

        response.code(200).send({ message: message })
}