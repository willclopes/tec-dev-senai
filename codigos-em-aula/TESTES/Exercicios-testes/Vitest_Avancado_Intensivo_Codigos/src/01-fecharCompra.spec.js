import { describe, expect, it, vi, beforeEach, afterEach } from "vitest"
import { fecharCompra } from "./01-fecharCompra.js"

describe("fecharCompra", () => {
    it("Sem cupom, frete pago", () => {
        expect(fecharCompra(100)).toEqual({
            desconto: 0, frete: 20, total: 120
        })
    })

    it("VIP reduz subtotal abaixo do limite", () => {
        expect(fecharCompra(220, "VIP")).toEqual({
            desconto: 33, frete: 20, total: 207
        })
    })

    it("Limite exato sem frete", () => {
        expect(fecharCompra(200)).toEqual({
            desconto: 0, frete: 0, total: 200
        })
    })

    it("Cupom de 10%", () => {
        expect(fecharCompra(300, "SAVE10")).toEqual({
            desconto: 30, frete: 0, total: 270
        })
    })

    it("Cupom desconhecido", () => {
        expect(() => fecharCompra(100, "X")).toThrow("Cupom inválido")
    })
})
