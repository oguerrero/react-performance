import React from 'react'
import useCounter from '../hooks/useCounter'

export const Ejercicio1 = () => {
    const counter = useCounter(0)

    return (
        <div>
            Ejercicio1 
            {counter}
            <button onClick={() => counter.increment}>+</button>
            <button onClick={() => counter.decrement}>-</button>
            <button onClick={() => counter.reset}>RESET</button>
        </div>
    )
}
