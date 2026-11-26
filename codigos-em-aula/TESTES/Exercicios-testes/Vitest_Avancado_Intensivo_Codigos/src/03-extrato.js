export function extrato(saldo, movimentos) {
    let entradas = 0
    let saidas = 0
    for (const { tipo, valor } of movimentos) {
        if (!Number.isFinite(valor) || valor <= 0 ||
            !['entrada', 'saida'].includes(tipo)) {
            throw new Error('Movimento inválido')
        }
        if (tipo === 'entrada') {
            saldo += valor
            entradas += valor
        } else {
            if (valor > saldo) throw new Error('Saldo insuficiente')
            saldo -= valor
            saidas += valor
        }
    }
    return { saldo, entradas, saidas }
}
