import React, { useRef, useCallback } from 'react';
import {
  FiArrowLeft, FiSearch
} from 'react-icons/fi';
import {Helmet} from 'react-helmet';


import { Link, } from 'react-router-dom';


import {
  Container, Content, AnimationContainer, Background, Background2
} from './styles';



import {
  TopNavigation
} from '../SignIn/styles';

import './style.css';

const PesquisaDeClinicas: React.FC = () => {

  return (
    <Container>
      <Helmet>
        <title>Pesquisar Clínicas</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial scale=1.0" />
      </Helmet>
      <Background />
      <Content>
        <TopNavigation>
            <div className="wrapper">
              <div id="clinica"> <Link to="/signin/clinica">Entrar como clínica</Link></div>
              <div id="pesquisa"> <Link to="/pesquisar"><FiSearch/>Pesquisar Clínicas</Link> </div>
            </div>
        </TopNavigation>
        <AnimationContainer>
          <div className="especialidade-medico">
          <div className="container">
            <div className="especialidade-medico-content">
              <div className="left-sidebar"><h1 className="underlined-left">Vamos começar!</h1></div>
              <div className="right-sidebar">
                <div className="header-wrapper">
                  <div className="header-container">
                    <h1 className="header">Que tipo de atendimento você está procurando?</h1>
                    <p className="sub-header"><strong>Com a carterinha do seu convênio em mãos, escolha o tipo de consulta abaixo:</strong></p>
                  </div>
                  <div className="options-container">
                    <div className="options-wrapper">

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="radio-container">
              <ul id="radio-wrapper">
                <li>
                  <input type="radio" id="f-option" name="selector"/>
                  <label htmlFor="f-option">Teleconsulta</label>

                  <div className="check"></div>
                </li>
                <li>
                  <input type="radio" id="s-option" name="selector"/>
                  <label htmlFor="s-option">À domicílio</label>
                  <div className="check"><div className="inside"></div></div>
                </li>
                <li>
                  <input type="radio" id="t-option" name="selector"/>
                  <label htmlFor="t-option">Presencial</label>

                  <div className="check"><div className="inside"></div></div>
                </li>
                </ul>
            </div>

            <div id="cover">
              <form className="form-pesquisa" method="get" action="">
                <div className="tb">
                  <div className="td"><input className="inputo" type="text" placeholder="Procurar clínicas..." required /></div>
                  <div className="td" id="s-cover">
                    <button type="submit">
                      <div id="s-circle"></div>
                      <span></span>
                    </button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
        <Link to="/">
            <FiArrowLeft />
            Voltar
          </Link>
        </AnimationContainer>
      </Content>
      <Background2 />
    </Container>

  );
};
export default PesquisaDeClinicas;
