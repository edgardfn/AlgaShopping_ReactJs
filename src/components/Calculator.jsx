import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { sum, subtract } from '../store/Calculator/Calculator.actions'

function Calculator () {
    const dispatch = useDispatch() // disparar ações ao clicar nos botões.
    const result = useSelector(state => state.calculator) // configurar o redux.
    
    const [a, setA] = useState(0) // criar um estado local
    const [b, setB] = useState(0)

    return <>
        <input 
            type="number" 
            placeholder="a"
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
        />
        <input 
            type="number" 
            placeholder="b"
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
        />

        <button
            onClick={() =>{
                dispatch(sum(a, b)) // dispara a ação e cai no reducer
            }}
        >somar</button>
        <button
            onClick={() => dispatch(subtract(a, b))}
        >subtrair</button>

        <div>
            {result}
        </div>
    </>
}

export default Calculator



