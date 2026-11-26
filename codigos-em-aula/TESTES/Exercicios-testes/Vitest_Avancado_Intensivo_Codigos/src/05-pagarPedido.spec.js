import { describe, expect, it, vi, beforeEach, afterEach } from "vitest"
import { pagarPedido } from "./05-pagarPedido.js"

describe("pagarPedido", () => {
    it("Pagamento aprovado", async () => {
        const pagar = vi.fn().mockResolvedValue({ aprovado: true, id: "P1" })
        await expect(pagarPedido(100, { pagar })).resolves.toBe("P1")
        expect(pagar).toHaveBeenCalledWith(100)
        expect(pagar).toHaveBeenCalledTimes(1)
    })

    it("Pagamento recusado", async () => {
        const pagar = vi.fn().mockResolvedValue({ aprovado: false })
        await expect(pagarPedido(100, { pagar }))
            .rejects.toThrow("Pagamento recusado")
    })

    it("Valor inválido", async () => {
        const pagar = vi.fn()
        await expect(pagarPedido(0, { pagar })).rejects.toThrow("Valor inválido")
        expect(pagar).not.toHaveBeenCalled()
    })

    it("Gateway indisponível", async () => {
        const pagar = vi.fn().mockRejectedValue(new Error("Offline"))
        await expect(pagarPedido(100, { pagar })).rejects.toThrow("Offline")
    })
})
