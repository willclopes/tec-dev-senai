import { describe, expect, it } from 'vitest'
import { calcularTotal } from './hotelaria.js'

describe('calcularTotal', () => {

    it("sem deconto", () => {
        expect(calcularTotal(200,3, false)).toBe(600)

    })
     it("10% deconto", () => {
        expect(calcularTotal(242,8, false)).toBe(1742.4)

        })

          it("15% deconto", () => {
        expect(calcularTotal(300,10, true)).toBe(2250)

        })

    })
