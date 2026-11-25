import {test, expect } from 'vitest'
import {sum, mult, subtracao, divisao, integral, derivada} from './sum.js'

test("soma 1 e 2 e retorna 3", () => {
    expect(sum(1,2)).toBe(3)

});

test("multiplica 10 e 3 e retorna 30", () => {
    expect(mult(10,3)).toBe(30)

})


test("subitrair 10 e 2 e retorna 8", () => {
    expect(subtracao(10,2)).toBe(8)

})


test("divisao 10 e 2 e retorna 5", () => {
    expect(divisao(10,2)).toBe(5)

})



test("integral de x^2 de 0 a 3 retorna 9", () => {
    // (3^(2+1)) / (2+1) = 27 / 3 = 9
    expect(integral(3, 2)).toBe(9);
});



test("derivada de x^2 no ponto 3 retorna 6", () => {
    expect(derivada(3, 2)).toBe(6);
});