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

const AgendamentoConsultas: React.FC = () => {

  return (
    <Container>
      <Helmet>
        <title>Agendar Consultas</title>
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

        </AnimationContainer>
      </Content>
    </Container>

  );
};

export default AgendamentoConsultas;
