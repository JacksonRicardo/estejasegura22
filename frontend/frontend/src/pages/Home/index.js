import React, { Component } from "react";

import Header from "../../components/header";
import PrestServ from "../../components/prestServ";

import './style.css';

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