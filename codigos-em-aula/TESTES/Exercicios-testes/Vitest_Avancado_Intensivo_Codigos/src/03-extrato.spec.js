import { describe, expect, it, vi, beforeEach, afterEach } from "vitest"
import { extrato } from "./03-extrato.js"

describe("extrato", () => {
    it("Entradas e saídas", () => {
        expect(extrato(100, [{ tipo: "entrada", valor: 50 },
            { tipo: "saida", valor: 20 }])).toEqual({
            saldo: 130, entradas: 50, saidas: 20
        })
    })

    it("Sem movimentos", () => {
        expect(extrato(100, [])).toEqual({
            saldo: 100, entradas: 0, saidas: 0
        })
    })

    it("Saída maior que saldo", () => {
        expect(() => extrato(10, [{ tipo: "saida", valor: 11 }]))
            .toThrow("Saldo insuficiente")
    })

    it("Valor negativo", () => {
        expect(() => extrato(10, [{ tipo: "entrada", valor: -1 }]))
            .toThrow("Movimento inválido")
    })
})
