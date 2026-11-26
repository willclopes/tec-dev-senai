import { describe, expect, it, vi, beforeEach, afterEach } from "vitest"
import { tentarNovamente } from "./06-tentarNovamente.js"

describe("tentarNovamente", () => {
    it("Sucesso imediato", async () => {
        const op = vi.fn().mockResolvedValue("OK")
        await expect(tentarNovamente(op)).resolves.toBe("OK")
        expect(op).toHaveBeenCalledTimes(1)
    })

    it("Falha seguida de sucesso", async () => {
        const op = vi.fn().mockRejectedValueOnce(new Error("Falha"))
            .mockResolvedValueOnce("OK")
        await expect(tentarNovamente(op)).resolves.toBe("OK")
        expect(op).toHaveBeenCalledTimes(2)
    })

    it("Esgota tentativas", async () => {
        const op = vi.fn().mockRejectedValue(new Error("Offline"))
        await expect(tentarNovamente(op, 2)).rejects.toThrow("Offline")
        expect(op).toHaveBeenCalledTimes(2)
    })

    it("Limite zero", async () => {
        const op = vi.fn()
        await expect(tentarNovamente(op, 0)).rejects.toThrow("Limite inválido")
        expect(op).not.toHaveBeenCalled()
    })
})
