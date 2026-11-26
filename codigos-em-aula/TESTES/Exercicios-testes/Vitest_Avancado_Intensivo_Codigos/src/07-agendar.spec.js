import { describe, expect, it, vi, beforeEach, afterEach } from "vitest"
import { agendar } from "./07-agendar.js"

describe("agendar", () => {
    beforeEach(() => vi.useFakeTimers())
    afterEach(() => vi.useRealTimers())

    it("Não executa antes do prazo", () => {
        const cb = vi.fn()
        agendar(cb, 1000)
        vi.advanceTimersByTime(999)
        expect(cb).not.toHaveBeenCalled()
        vi.advanceTimersByTime(1)
        expect(cb).toHaveBeenCalledTimes(1)
    })

    it("Cancelamento impede execução", () => {
        const cb = vi.fn()
        const cancelar = agendar(cb, 1000)
        cancelar()
        vi.advanceTimersByTime(2000)
        expect(cb).not.toHaveBeenCalled()
    })

    it("Executa somente uma vez", () => {
        const cb = vi.fn()
        agendar(cb, 1000)
        vi.advanceTimersByTime(5000)
        expect(cb).toHaveBeenCalledTimes(1)
    })
})
