import React from "react";
import produtos from "../../data/produtos";
import "./TabelaProdutos.css"

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const produtosTable = produtos.map((produto) =>{
        return (
            <tr Key={produto.id}>
                
               
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco.toFixed(2).replace(".", ",")}</td>
                
            </tr>
        )
    })
    
    return( 
        <div className="TabelaProdutos">
            <style>
            </style>
            <table>
                <tr>
                    <th>ID-Produto</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>  
                     {produtosTable}   
            </table>        
        </div>
    );
}