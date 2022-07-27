//import axios from "axios";
import React, { Component } from "react";
import api  from '../../main';
class Prest_Serv extends Component{

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
            <div> 
                <h3>Prestadores:</h3>
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
                        
                ))}
            </div>
        );
    };
};

export default Prest_Serv