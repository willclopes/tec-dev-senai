import { describe, expect, it, vi, beforeEach, afterEach } from "vitest"
import { criarTarefas } from "./08-criarTarefas.js"

describe("criarTarefas", () => {
    let tarefas
    beforeEach(() => { tarefas = criarTarefas() })

    it("Adiciona e conclui", () => {
        const id = tarefas.adicionar("Estudar")
        tarefas.concluir(id)
        expect(tarefas.listar()).toEqual([{
            id: 1, titulo: "Estudar", concluida: true
        }])
    })

    it("Estado inicial isolado", () => {
        expect(tarefas.listar()).toEqual([])
        expect(tarefas.adicionar("Nova")).toBe(1)
    })

    it("Título vazio", () => {
        expect(() => tarefas.adicionar(" ")).toThrow("Título inválido")
    })

    it("ID inexistente", () => {
        expect(() => tarefas.concluir(99)).toThrow("Tarefa inexistente")
    })

    it("Cópia protege estado", () => {
        tarefas.adicionar("Estudar")
        const copia = tarefas.listar()
        copia[0].titulo = "Alterado"
        expect(tarefas.listar()[0].titulo).toBe("Estudar")
    })
})
