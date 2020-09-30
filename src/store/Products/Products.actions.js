export function toggleProduct (id) { // ação de selecionar ou não um produto para ir para a lista.
    return { // retorna uma ação
        type: 'TOGGLE_PRODUCT',
        payload: id
    }
}