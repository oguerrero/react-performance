## ¿Cuando usar el hook useMemo()?

- Componente funcional que recibe unas props y siempre devuelve lo mismo

- Cuando un componente se re-renderiza demasiadas veces

- Un componente recibe las mismas props y re-renderiza

- Componentes grandes / muy grandes que continen muchos elementos UI que dependen de props

***

Ejercicio 2

Partiendo del hook personalizado useList que se creó en la sesión, ampliadlo con lo siguiente:

Una función clear para limpiar(vaciar) la lista de elementos

Otra función sort para ordenar los elementos.

Una última función que se encargue de invertir los elementos.