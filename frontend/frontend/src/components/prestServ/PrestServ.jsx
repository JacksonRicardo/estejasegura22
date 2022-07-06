import axios from "axios";
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
                <h1> Prestadores </h1>
                {/* {console.log(prestadores)} */}
                {prestadores.map(prestadores => (
                <ul key = {prestadores.id}> 
                    <li><strong>Nome: </strong>{prestadores.nome}</li>
                    <li><strong>Gênero: </strong>{prestadores.genero}</li>
                    <li><strong>E-mail: </strong>{prestadores.email}</li>
                    <li><strong>CNPJ: </strong>{prestadores.cnpj}</li>
                    <li><strong>Especilalidade: </strong>{prestadores.especialidade}</li>
                </ul>
                ))}
            </div>
        );
    };
};

export default Prest_Serv