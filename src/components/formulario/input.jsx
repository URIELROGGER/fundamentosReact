import React, { useState } from "react";
import "./input.css"

// eslint-disable-next-line import/no-anonymous-default-export
export default propos =>  {
    const [valor, setValor] = useState('Inicial');

    function quandoMudar(e){
        setValor(e.target.value);
    }

    return(
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                displey: 'flex',
                flexDiretion: 'colunm'
            }}>
                <input value={valor} onChange={quandoMudar}/>
                <input value={valor} readOnly/>
                <input value={undefined}/>
            </div>
        </div>
    )
}