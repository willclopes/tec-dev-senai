export function reservar(produtos, id, qtd) {
    if (!Number.isInteger(qtd) || qtd <= 0) {
        throw new Error('Quantidade inválida')
    }
    const produto = produtos.find(p => p.id === id)
    if (!produto) throw new Error('Produto inexistente')
    if (produto.estoque < qtd) {
        throw new Error('Estoque insuficiente')
    }
    return produtos.map(p => p.id === id
        ? { ...p, estoque: p.estoque - qtd }
        : { ...p })
}
