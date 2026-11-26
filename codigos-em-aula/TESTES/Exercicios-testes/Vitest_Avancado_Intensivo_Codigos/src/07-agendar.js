export function agendar(callback, atraso) {
    const timer = setTimeout(callback, atraso)
    return () => clearTimeout(timer)
}
