import React, { useCallback, useMemo } from 'react'

// useMemo() -> React.memo() -> Funciones creacionales de componentes que deben memoizar algo
// useCallback() -> React.useCallback() -> Memoizar valores listados en la dependencia. Funciones en línea

export const EjemploHooks = ({name}) => {    
    useCallback(
      () => {
        // Hacer algo
      },
      [name],
    )
    return (
        <div>EjemploHooks</div>
        )
}
    
// const Memoization = useMemo(() => EjemploHooks, [a,b])
