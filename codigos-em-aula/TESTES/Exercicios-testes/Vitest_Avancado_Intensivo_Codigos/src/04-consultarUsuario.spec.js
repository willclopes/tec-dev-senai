import { describe, expect, it, vi, beforeEach, afterEach } from "vitest"
import { consultarUsuario } from "./04-consultarUsuario.js"

describe("consultarUsuario", () => {
    it("Usuário encontrado e chamada correta", async () => {
        const buscar = vi.fn().mockResolvedValue({
            id: 1, nome: "Ana", senha: "segredo"
        })
        await expect(consultarUsuario(1, { buscar }))
            .resolves.toEqual({ id: 1, nome: "Ana" })
        expect(buscar).toHaveBeenCalledWith(1)
    })

    it("Usuário ausente", async () => {
        const buscar = vi.fn().mockResolvedValue(null)
        await expect(consultarUsuario(1, { buscar }))
            .rejects.toThrow("Usuário não encontrado")
    })

    it("ID inválido não consulta", async () => {
        const buscar = vi.fn()
        await expect(consultarUsuario(0, { buscar }))
            .rejects.toThrow("ID inválido")
        expect(buscar).not.toHaveBeenCalled()
    })

    it("Falha do repositório", async () => {
        const buscar = vi.fn().mockRejectedValue(new Error("Offline"))
        await expect(consultarUsuario(1, { buscar }))
            .rejects.toThrow("Offline")
    })
})
