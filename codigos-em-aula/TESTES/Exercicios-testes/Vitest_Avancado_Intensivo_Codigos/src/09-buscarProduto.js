export async function buscarProduto(id) {
    const resposta = await fetch(`/produtos/${id}`)
    if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`)
    return await resposta.json()
}
