import React from 'react';
import Helmet from 'react-helmet';
import {FiCalendar, FiEdit3, FiPlus, FiLogOut, FiSearch, FiUsers} from 'react-icons/fi';

import { Link } from 'react-router-dom';


import { Container, Content, AnimationContent, TopNavigation} from './styles';

import './styles.css';

const DashboardClinica: React.FC = () => {
  return (
    <Container>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
        <title>Bem-vindo!</title>
        <meta content="" name=""></meta>
      </Helmet>
      <Content>
      <TopNavigation>
            <div className="wrapper">
              <div id="clinica"> <Link to="/"><FiLogOut/>Sair</Link></div>
              <div id="pesquisa"> <Link to="/pesquisar"><FiSearch/>Pesquisar Clínicas</Link> </div>
            </div>
        </TopNavigation>
        <AnimationContent>
          <div className="bem-vindo">
            <h1>Bem-vindo, {`Clínica!`}</h1>
            <p>O que você quer fazer?</p>
          </div>
          <div className="cardContainer">
            <a href="/administrarConsultas" className="cardLink">
              <div className="card">
                <h3 className="title">Administrar consultas marcadas</h3>
                <div className="bar">
                  <div className="emptybar"></div>
                  <div className="filledbar"></div>
                </div>
                <div className="circle">
                  <div className="icon"><FiCalendar/></div>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg">

                  <circle className="stroke" cx="60" cy="60" r="50"/>
                </svg>
                </div>
              </div>
            </a>
            <a href="/" className="cardLink">
            <div className="card">
              <h3 className="title">Editar informações da clínica</h3>
                <div className="bar">
                  <div className="emptybar"></div>
                  <div className="filledbar"></div>
                </div>
                <div className="circle">
                <div className="icon"><FiEdit3/></div>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle className="stroke" cx="60" cy="60" r="50"/>
                  </svg>
                </div>
            </div>
            </a>
            <a href="/cadastrar/clinica" className="cardLink">
              <div className="card">
                <h3 className="title">Cadastrar médico</h3>
                <div className="bar">
                  <div className="emptybar"></div>
                  <div className="filledbar"></div>
                </div>
                <div className="circle">
                  <div className="icon"><FiPlus/></div>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle className="stroke" cx="60" cy="60" r="50"/>
                  </svg>
                </div>
              </div>
            </a>
            <a href="/" className="cardLink">
              <div className="card">
                <h3 className="title">Ver médicos cadastrados</h3>
                <div className="bar">
                  <div className="emptybar"></div>
                  <div className="filledbar"></div>
                </div>
                <div className="circle">
                  <div className="icon"><FiUsers/></div>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle className="stroke" cx="60" cy="60" r="50">
                    </circle>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </AnimationContent>
      </Content>

    </Container>

  )
};

export default DashboardClinica;
