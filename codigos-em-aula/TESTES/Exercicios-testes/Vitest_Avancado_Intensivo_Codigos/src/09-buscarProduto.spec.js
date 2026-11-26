import { describe, expect, it, vi, beforeEach, afterEach } from "vitest"
import { buscarProduto } from "./09-buscarProduto.js"

describe("buscarProduto", () => {
    afterEach(() => vi.unstubAllGlobals())

    it("Resposta bem-sucedida", async () => {
        const mock = vi.fn().mockResolvedValue({ ok: true,
            json: async () => ({ id: 1, nome: "Mouse" }) })
        vi.stubGlobal("fetch", mock)
        await expect(buscarProduto(1)).resolves.toEqual({ id: 1, nome: "Mouse" })
        expect(mock).toHaveBeenCalledWith("/produtos/1")
    })

    it("Produto não encontrado", async () => {
        vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
            ok: false, status: 404 }))
        await expect(buscarProduto(1)).rejects.toThrow("HTTP 404")
    })

    it("Erro do servidor", async () => {
        vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
            ok: false, status: 500 }))
        await expect(buscarProduto(1)).rejects.toThrow("HTTP 500")
    })

    it("Falha de rede", async () => {
        vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("Rede")))
        await expect(buscarProduto(1)).rejects.toThrow("Rede")
    })
})
