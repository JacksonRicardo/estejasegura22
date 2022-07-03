import React, { Component } from "react";
import api from '../../api'

class Prest_Serv extends Component{

    state = {
        prestadores: [],

    }

    async componentDidMount(){
        const response = await api.get('')
        console.log(response.data)

        this.setState({prestadores: response.data});
    }

    render(){
        return(
            <main className="principal">
                <table className="tabela">
                    <tr className="coluna">
                        <td className="topo-tabela">Nome</td>
                        <td className="topo-tabela">Especialidade</td>
                        <td className="topo-tabela">Gênero</td>
                        <td className="topo-tabela">Membro desde</td>
                        <td className="topo-tabela">Avaliação do Serviço</td>
                        <td className="topo-tabela">Avaliação do Prestador</td> 
                    </tr>
                        
                    <tr className="coluna">
                        <td><a href="siteestejasegura:form_login prestador.id"> 
                            prestador.nome</a></td>
                        <td><a href="/models/{{prestador.id}}">
                            prestador.especialidade </a></td>
                        <td><a href="/models/{{prestador.id}}">
                            prestador.genero </a></td>
                        <td>08/2021<a href="/models/{{prestador.id}}">
                            prestador.membro_desde </a></td>
                        <td><a href="/models/{{prestador.id}}">
                             prestador.avaliacao_servico </a> 
                            <img src="siteestejasegura/images/icons8-estrela-preenchida-25.png" alt=""/>
                            <img src="siteestejasegura/images/icons8-estrela-preenchida-25.png" alt=""/>
                            <img src="siteestejasegura/images/icons8-estrela-preenchida-25.png" alt=""/>
                            <img src="siteestejasegura/images/icons8-estrela-preenchida-25.png" alt=""/>
                            <img src="siteestejasegura/images/icons8-estrela-preenchida-25.png" alt=""/>
                            </td>
                        <td>4,5<a href="/models/{{prestador.id}}">
                            prestador.avaliacao_prestador</a></td>
                    </tr>
                        
                </table>
            </main>
        );
    };
};

export default Prest_Serv