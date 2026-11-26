export async function tentarNovamente(operacao, limite = 3) {
    if (!Number.isInteger(limite) || limite < 1) {
        throw new Error('Limite inválido')
    }
    for (let i = 1; i <= limite; i++) {
        try {
            return await operacao()
        } catch (erro) {
            if (i === limite) throw erro
        }
    }
}
