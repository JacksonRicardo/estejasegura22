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
                <h1> RODANDO... </h1>
                {/* {console.log(prestadores)} */}
                {prestadores.map(prestadores => (
                    <li key = {prestadores.id}>
                        <h2>
                            <strong>Nome: </strong>
                            {prestadores.nome}
                        </h2>
                        <p>
                            E-mail: {prestadores.email}
                        </p>
                    </li>
                ))}
            </div>
        );
    };
};

export default Prest_Serv