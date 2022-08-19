import React, { Component } from "react";

import Header from "../../components/header/Header";
import PrestServ from "../../components/prestServ/PrestServ";
import Login from "../../components/login/Login";

import './Header.css';
import './PrestServ.css';
//import './Reset.css';
import './Var.css';
class Home extends Component{
    render(){
        return(
            <>
                <Header/>
                {/* <PrestServ/> */}
                <Login/>
            </>
        )
    }
}

export default Home