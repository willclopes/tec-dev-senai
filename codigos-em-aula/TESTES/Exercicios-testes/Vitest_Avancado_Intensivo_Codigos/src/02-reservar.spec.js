import { describe, expect, it, vi, beforeEach, afterEach } from "vitest"
import { reservar } from "./02-reservar.js"

describe("reservar", () => {
    it("Reserva válida sem alterar original", () => {
        const lista = [{ id: 1, estoque: 5 }]
        expect(reservar(lista, 1, 2)).toEqual([{ id: 1, estoque: 3 }])
        expect(lista[0].estoque).toBe(5)
    })

    it("Reserva todo estoque", () => {
        expect(reservar([{ id: 1, estoque: 5 }], 1, 5))
            .toEqual([{ id: 1, estoque: 0 }])
    })

    it("Quantidade fracionária", () => {
        expect(() => reservar([], 1, 1.5)).toThrow("Quantidade inválida")
    })

    it("Produto ausente", () => {
        expect(() => reservar([], 1, 1)).toThrow("Produto inexistente")
    })

    it("Estoque insuficiente", () => {
        expect(() => reservar([{ id: 1, estoque: 2 }], 1, 3))
            .toThrow("Estoque insuficiente")
    })
})
