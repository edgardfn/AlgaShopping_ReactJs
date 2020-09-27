/* Actio Creator = uma função que retorna uma ação */

export function sum (a, b) {
    return {
        type: 'SUM',
        payload: [a, b]
    }
}

// AÇÃO É ALGO QUE É DISPAPARADO PELO COMPONENTES.

export function subtract (a, b) {
    return {
        type: 'SUBTRACT',
        payload: [a, b]
    }
}
