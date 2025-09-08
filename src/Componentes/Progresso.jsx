import { useState } from "react";

function barraProgresso(){

    const [progresso, setProgresso] = useState(0);

    function mudaBarra(acao){
        if(acao == 1 && progresso < 100){
            setProgresso(tamanho + 10)
        } else {
            if (tamanho > 0){
                setProgresso(tamanho - 10)
            }
        }
    }

    return(
        <>
        <button onClick={() => mudaBarra(1)}>+10%</button>
        <button onClick={() => mudaBarra(2)}>-10%</button>
        <p>{tamanho}</p>
        </>
    )
}

export default barraProgresso;