import React, { memo, useState } from 'react'

const EjemploFuncional = () => {
    const names = ['Oscar', 'Enrique']

    const getName = () => {
        const random = Math.floor(Math.random() * names.length - 1)
        return names[random]
    }

    const [name, setName] = useState(null)

    const obtainName = () => {
        setName(getName())
    }

    const clearName = () => {
        setName('')
    }

    return (
        <div>
            <h1>Ejemplo de uso de react memo</h1>
            <button onClick={() => obtainName()}>Create Name</button>
            <nombresAleatorios name={name} clearName={clearName} />
        </div>
    )
}

export default EjemploFuncional

export const WrappedComponent = (props) => {
    console.log('Renderizando de nuevo')

    return (
        <div>
            <h2>{props.name}</h2>
            <button onClick={() => props.clearName()}>Borrar Nombre</button>
        </div>
    )
}

function namesAreEqual(prevProps, nextProps) {
    return prevProps.name !== nextProps.name
}

export const nombresAleatorios = memo(WrappedComponent, namesAreEqual)
