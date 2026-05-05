import { useEffect } from "react"
import { useState } from "react"

export default function Usuarios () {
    const [contador, setContador] = useState(0)

    useEffect(() => {
        document.title = 'contagem ' + contador
    }, [contador])

    return (
        <div>
            <h1>Usuarios</h1>
            <h1>{contador}</h1>

            <button onClick={() => {setContador(contador + 1)}}>
                somar
            </button>
        </div>
    )
}