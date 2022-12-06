import "./App.css";
import React from "react";
import Primeiro from './components/basicos/Primeiro';
import ComParemetro from './components/basicos/ComParametro';

import Mega from "./components/mega/Mega";
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/input";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import Frgmento from './components/basicos/Fragmento';
import Familia from "./components/basicos/Familia";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import IndiretaPai from "./components/comunicacao/IndiretaPai";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card titulo="#13 - Mega Desafio" color="#424242">
                    <Mega></Mega>
                </Card>
                <Card titulo="#12 - Contador" color="#424242">
                    <Contador numeroInicial={10}></Contador>
                </Card>

                <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
                    <Input></Input>
                </Card>

                <Card titulo="#10 - Comunicação Indireta" color="#59323C">
                    <IndiretaPai></IndiretaPai>
                </Card>

                <Card titulo="#09 - Comunicação Direta" color="#59323C">
                    <DiretaPai></DiretaPai>
                </Card>

                <Card titulo="#08 - Renderização Condicional" color="#982395">
                    <ParOuImpar numero={21}></ParOuImpar>
                    <UsuarioInfo usuario={ { nome: 'Fernando'}}></UsuarioInfo>
                </Card>

                <Card titulo="#07 - Repetição Desafio" color="#FF4C70">
                    <TabelaProdutos></TabelaProdutos>
                </Card>

                <Card titulo="#06 - Repetição" color="#FF4C65">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#05 - Desafio aleatorio" color="#00C8F8">
                    <Familia sobrenome="Silva">
                         <FamiliaMembro nome="Pedro"/>
                         <FamiliaMembro nome="Ana" />
                         <FamiliaMembro nome="Gustavo"/>
                    </Familia>
                </Card>

                <Card titulo="#04 - Desafio aleatorio" color="#FA6900">
                    <Aleatorio min={1} max={60}/>
                </Card>

                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Frgmento />
                </Card>

                <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                    <ComParemetro
                        titulo="Situação do aluno"
                        aluno="Pedro Silva "
                        nota={9.3}
                    />
                </Card>

                <Card titulo="#01 - Primeiro Componente" color="#588C73">
                    <Primeiro></Primeiro>
                </Card>
            </div>
            
            
        </div>
    );
}