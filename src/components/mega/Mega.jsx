import React from "react";


// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <div>
            <h2>Numeros da Mega!</h2>
            <div>

            </div>
            <div>
                <label htmlFor="numerosInput">Quantidade de numeros:</label>
                <input id="numerosInput" type="number" value={props.passo}
                onChange={e => props.setPasso(+e.target.value)} />
            </div>
        </div>
    )
}