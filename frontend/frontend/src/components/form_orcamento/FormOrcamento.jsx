import React, { Component } from "react";

class FormOrcamento extends Component {
  render() {
    return (
      <body>
        <main>
          <div className="container">
            <div className="cards">
              <ol className="coluna">
                <a className="select" href="www.google.com">
                    <li>
                    <span className="negrito">
                        <p>Serviços</p>
                    </span>
                    </li>
                </a>
                <a className="select" href="{% url 'siteestejasegura:notif_prestador' %}">
                  <li>
                    <span className="negrito">
                      <p>Orçamentos pendentes</p>
                    </span>
                  </li>
                </a>
                <a className="select" href="www.google.com">
                  <li>
                    <span className="negrito">
                      <p>Realizados</p>
                    </span>
                  </li>
                </a>
                <a className="select" href="www.google.com">
                  <li>
                    <span className="negrito">
                      <p>Aguardando confirmação</p>
                    </span>
                  </li>
                </a>
              </ol>
              {/* </a> */}
            </div>
            <div>
              <form action="#" method="post">
                <div className="form">
                  <label for="descricao-servico">
                    <strong>Orçamento de Sicrano (N°:1234)</strong>
                  </label>
                  <br />
                  <textarea
                    name=""
                    id="descricao-servico"
                    cols="70"
                    rows="20"
                    placeholder="Informe os detalhes de sua solicitação..."
                  ></textarea>
                </div>
                <div className="button">
                  <button type="reset" className="button1">
                    Cancelar
                  </button>
                  <form method="post">
                    <button id="pesquisar" className="button2" type="submit" name="Enviar">
                      Finalizar
                    </button>
                    
                  </form>
                </div>
              </form>
            </div>
          </div>
        </main>
      </body>
    );
  }
}

export default FormOrcamento;
