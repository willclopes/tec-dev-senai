export async function finalizarPedido(itens, gateway, notificador) {
    if (!itens.length || itens.some(i =>
        !Number.isFinite(i.preco) || i.preco <= 0 ||
        !Number.isInteger(i.qtd) || i.qtd <= 0)) {
        throw new Error('Pedido inválido')
    }
    const soma = itens.reduce((total, i) => total + i.preco * i.qtd, 0)
    const total = Math.round(soma * 100) / 100
    const resposta = await gateway.pagar(total)
    if (!resposta.aprovado) throw new Error('Pagamento recusado')
    await notificador.enviar(resposta.id)
    return { id: resposta.id, total }
}
