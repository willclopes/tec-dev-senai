import { deleteEquipamentosService, getAllEquipamentos, getEquipamentosById, patchEquipamentosService, postEquipamentos, putEquipamentosService } from "../services/equipamentos-services.js"


export async function listAllEquipamentos(request, response){
    const equipamentos = await getAllEquipamentos()

    return response.code(200).send(equipamentos)
}

export async function listEquipamentosById(request, response){
        const equipamentos = await getEquipamentosById(request.params.id)

        if(!equipamentos) {
            response.code(404).send({ message: "Equipamentos not found!"})
        }

        response.code(200).send(equipamentos)
}

export async function createEquipamentos(request, response) {
        const newEquipamentos = await postEquipamentos(request.body)

        response.code(201).send(newEquipamentos)
}

export async function deleteEquipamentos(request, response){
        const message = await deleteEquipamentosService(request.params.id)

        response.code(202).send({ message: message })
    }

export async function putEquipamentos(request, response) {
        const message = await putEquipamentosService(request.params.id, request.body)

        response.code(200).send({ message:  message})
}

export async function patchEquipamentos(request, response){
        const message = await patchEquipamentosService(request.params.id, request.body)

        response.code(200).send({ message: message })
}