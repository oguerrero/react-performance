import React, { PureComponent } from 'react'

function MiComponente (props) {
    return (
        <h1>
            Componente memoizado
        </h1>
    )
}

function propsComparison (prevProps, nextProps) {
    
}

export const EjemploComponente = React.memo(MiComponente, propsComparison)