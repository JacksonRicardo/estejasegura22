import React, { Component } from "react";

import { Link } from "react-router-dom";

import logo192 from "../images2/logo192.jpeg";
import bell_16 from "../images2/bell_16x16.jpg";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <Link to="/Inicial" /* target="_blank" */ rel="noreferrer">
            <img src={logo192} alt="logo Esteja Segura!" />
          </Link>
        </div>
        <div className="actions">
          <div className="search">
            <input
              type="text"
              placeholder="O que você precisa: descrição, serviços, prestadores..."
            />
            <a href="www.google.com">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  className="svg-inline--fa fa-search fa-w-16"
                  role="img"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  />
                </svg>
              </button>
            </a>
          </div>
          <nav>
            <Link to="/PrestServ">Prestadores de Serviços</Link>
            <Link to="/PrestServ">Melhores Avaliados</Link>
            <a href="www.google.com">Serviços</a>
            <a href="www.google.com">Como Funciona</a>
          </nav>
        </div>
        <div className="login">
          <a href="www.google.com">Bem vindo,</a>
          {/* <div>
                        <a href="https://www.google.com.br" target="_blank" rel="noreferrer">
                            <img className="sininho2" src={bell_16} alt="Sininho notificação"/>
                        </a>
                    </div>
                    <a href="{% url 'logout' %}?next=/siteestejasegura"> LogOut </a> */}
          <div>
            <a href="www.google.com.br">| Crie sua conta</a>
          </div>
          <div>|</div>
          <div>
            <a
              href="https://www.google.com.br"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="sininho2"
                src={bell_16}
                alt="Sininho notificação"
              />
            </a>
          </div>
          <div>|</div>
          <div>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
