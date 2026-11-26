export async function pagarPedido(valor, gateway) {
    if (!Number.isFinite(valor) || valor <= 0) {
        throw new Error('Valor inválido')
    }
    const resposta = await gateway.pagar(valor)
    if (!resposta.aprovado) throw new Error('Pagamento recusado')
    return resposta.id
}
