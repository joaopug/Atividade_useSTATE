import { useState } from "react"

function barraProgresso() {

    const [progresso, setProgresso] = useState(0)

    function mudarBarra(acao) {
        if (acao == 1 && progresso < 100) {
            setProgresso(progresso + 10)
        } else {
            if (progresso > 0) {
                setProgresso(progresso - 10)
            }
        }
    }


    return (
        <>
            <button onClick={() => mudarBarra(1)}>+10%</button>
            <button onClick={() => mudarBarra(2)}>-10%</button>
        </>
    )
}

export default barraProgresso;