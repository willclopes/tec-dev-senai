export function fecharCompra(subtotal, cupom = '') {
    const taxas = { VIP: 0.15, SAVE10: 0.10, '': 0 }
    if (!Object.hasOwn(taxas, cupom)) {
        throw new Error('Cupom inválido')
    }
    const arred = n => Math.round(n * 100) / 100
    const desconto = arred(subtotal * taxas[cupom])
    const liquido = arred(subtotal - desconto)
    const frete = liquido >= 200 ? 0 : 20
    return { desconto, frete, total: arred(liquido + frete) }
}
