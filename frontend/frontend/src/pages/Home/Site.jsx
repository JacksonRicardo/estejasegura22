import React, { Component } from "react";

import { Routes, Route } from "react-router-dom";

import "./Header.css";
import "./PrestServ.css";
import "./FormOrcamento.css";
//import './Reset.css';
import "./Var.css";
import "./Style.css";


import Header from "../../components/header/Header";
import PrestServ from "../../components/prestServ/PrestServ";
import Login from "../../components/login/Login";
import Inicial from "../../components/inicial/Inicial";
import FormOrcamento from "../../components/form_orcamento/FormOrcamento";

class Home extends Component {
  render() {
    return (
      <body>
        <Header />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/PrestServ" element={<PrestServ />} />
          <Route path="/Inicial" element={<Inicial />} />
          <Route path="/FormOrcamento" element={<FormOrcamento />} />
        </Routes>
      </body>
    );
  }
}

export default Home;
