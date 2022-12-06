import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const [nome, setNome] = useState("?");
    const [idade, setIdade] = useState(0);
    const [nerd, setNerd] = useState(true);

    function forenecerInformacao(nome, idade, nerd){
        setNome(nome);
        setIdade(idade);
        setNerd(nerd);
        console.log(nome, idade, nerd);
    }

    return(
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong></span>
                <span> {nerd ? "Verdadeiro" : "Falso"}</span>
            </div>
            <IndiretaFilho quandoClicar={forenecerInformacao}></IndiretaFilho>
        </div>
    )
}