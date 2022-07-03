import React, { Component } from "react";

import Header from "../../components/header/Header";
import PrestServ from "../../components/prestServ/PrestServ";

import './Header.css';
import './PrestServ.css';
import './Reset.css';
import './Var.css';


class Home extends Component{
    render(){
        return(
            <>
               <Header/> 
               <PrestServ/>
            </>
        )
    }
}

export default Home