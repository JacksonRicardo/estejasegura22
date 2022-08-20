//import axios from "axios";
import React, { Component } from "react";
import api  from '../../main';

import { Link } from "react-router-dom";
class PrestServ extends Component{

    state = {
        prestadores: [],
    }

    async componentDidMount(){
        const response = await api.get()
        
        // console.log(response.data)

        this.setState({ prestadores: response.data });
    }

    render(){

        const { prestadores } = this.state

        return(
            <body> 
                {/* <h3>Prestadores:</h3>
                {prestadores.map(prestadores => (
                    <ul>
                        <li key = {prestadores.id}>
                            <strong>Nome: </strong> {prestadores.nome} <br/>
                            <strong>Gênero: </strong> {prestadores.genero} <br/>
                            <strong>Email: </strong> {prestadores.email} <br/>
                            <strong>Cnpj: </strong> {prestadores.cnpj} <br/>
                            <strong>Especialidade: </strong> {prestadores.especialidade} <br/>
                        </li>
                    </ul>
                        
                ))} */}

                <main className="principal">
                    <table className="tabela" class="bordered striped centered" >
                        <tr className="coluna">
                            <td className="topo-tabela">Nome</td>
                            <td className="topo-tabela">Especialidade</td>
                            <td className="topo-tabela">Gênero</td>
                            <td className="topo-tabela">Membro desde</td>
                            <td className="topo-tabela">Avaliação do Serviço</td> 
                            <td className="topo-tabela">Nota do Prestador</td> 
                        </tr>
                        {prestadores.map(prestadores => (  
                            <tr className="coluna" key = {prestadores.id}>                         
                                <td><Link to="/FormOrcamento">
                                    {prestadores.nome}</Link></td>
                                <td><a href="/models/{{prestadores.id}}">
                                    {prestadores.especialidade}</a></td>
                                <td><a href="/models/{prestadores.id}">
                                    {prestadores.genero}</a></td>
                                <td>08/2021<a href="/models/{prestadores.id}">
                                    {prestadores.membro_desde}</a></td>
                                <td><a href="/models/{prestadores.id}">
                                    {prestadores.avaliacao_servico}</a>*****</td>
                                <td>4,5<a href="/models/{{prestadores.id}}">
                                    {prestadores.avaliacao_prestadores}</a></td>
                            </tr>
                        ))} 
                    </table>
                </main>
            </body>
        );
    };
};

export default PrestServ