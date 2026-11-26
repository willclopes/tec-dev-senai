export async function consultarUsuario(id, repositorio) {
    if (!Number.isInteger(id) || id <= 0) {
        throw new Error('ID inválido')
    }
    const usuario = await repositorio.buscar(id)
    if (!usuario) throw new Error('Usuário não encontrado')
    return { id: usuario.id, nome: usuario.nome }
}
