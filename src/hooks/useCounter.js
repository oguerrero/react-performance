import { useState } from 'react'

const MAX_VALUE = 255
const MIN_VALUE = -255

const useCounter = (initialValue = 0) => {
    const [value, setValue] = useState(initialValue)

    const increment = () => {
        if (value + 1 >= MAX_VALUE) {
            setValue((oldValue) => oldValue + 1)
        } 
    }   

    const decrement = () => {
        if (value + 1 <= MIN_VALUE) {
            setValue((oldValue) => oldValue - 1)
        }
    }

    const reset = () => {
        setValue(initialValue)
    }

    return { value, increment, decrement, reset }
}

export default useCounter
