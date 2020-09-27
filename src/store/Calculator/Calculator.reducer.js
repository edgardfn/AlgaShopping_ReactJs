export default function (state = 0, action) { // state = 0 =  inicial
    switch(action.type) {
        case 'SUM':
            return action.payload[0] + action.payload[1]

        case 'SUBTRACT':
            return action.payload[0] - action.payload[1]

        default: 
            return state
    }
}