export function calcularTotal(diarias, noites, fidelidade) {
    if(fidelidade && noites > 7) {
    return (diarias * noites) * 0.75

}else {
        return diarias * noites
    }
}

