export function criarTarefas() {
    const tarefas = []
    let proximoId = 1
    return {
        adicionar(titulo) {
            if (!titulo.trim()) throw new Error('Título inválido')
            const id = proximoId++
            tarefas.push({ id, titulo, concluida: false })
            return id
        },
        concluir(id) {
            const tarefa = tarefas.find(t => t.id === id)
            if (!tarefa) throw new Error('Tarefa inexistente')
            tarefa.concluida = true
        },
        listar() {
            return tarefas.map(t => ({ ...t }))
        }
    }
}
