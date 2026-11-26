import { describe, expect, it, vi, beforeEach, afterEach } from "vitest"
import { finalizarPedido } from "./10-finalizarPedido.js"

describe("finalizarPedido", () => {
    let gateway, notificador, itens
    beforeEach(() => {
        gateway = { pagar: vi.fn().mockResolvedValue({
            aprovado: true, id: "P1" }) }
        notificador = { enviar: vi.fn().mockResolvedValue(undefined) }
        itens = [{ preco: 25, qtd: 2 }]
    })

    it("Fluxo completo", async () => {
        await expect(finalizarPedido(itens, gateway, notificador))
            .resolves.toEqual({ id: "P1", total: 50 })
        expect(gateway.pagar).toHaveBeenCalledWith(50)
        expect(notificador.enviar).toHaveBeenCalledWith("P1")
        expect(gateway.pagar.mock.invocationCallOrder[0])
            .toBeLessThan(notificador.enviar.mock.invocationCallOrder[0])
    })

    it("Pedido vazio não aciona serviços", async () => {
        await expect(finalizarPedido([], gateway, notificador))
            .rejects.toThrow("Pedido inválido")
        expect(gateway.pagar).not.toHaveBeenCalled()
        expect(notificador.enviar).not.toHaveBeenCalled()
    })

    it("Pagamento recusado não notifica", async () => {
        gateway.pagar.mockResolvedValue({ aprovado: false })
        await expect(finalizarPedido(itens, gateway, notificador))
            .rejects.toThrow("Pagamento recusado")
        expect(notificador.enviar).not.toHaveBeenCalled()
    })

    it("Notificação falha sem repetir pagamento", async () => {
        notificador.enviar.mockRejectedValue(new Error("Offline"))
        await expect(finalizarPedido(itens, gateway, notificador))
            .rejects.toThrow("Offline")
        expect(gateway.pagar).toHaveBeenCalledTimes(1)
    })
})
