import React, { Component } from "react";

import Header from "../../components/header/Header";
import PrestServ from "../../components/prestServ/PrestServ";


import './PrestServ.css';

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