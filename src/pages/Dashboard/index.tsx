import React from 'react';
import Helmet from 'react-helmet';
import {FiCalendar, FiList, FiEdit3, FiLogOut, FiSearch} from 'react-icons/fi';

import { Link, } from 'react-router-dom';


import { Container, Content, AnimationContent, TopNavigation} from './styles';

const Dashboard: React.FC = () => {
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
            <h1>Bem-vindo, {`Usuário!`}</h1>
            <p>O que você quer fazer?</p>
          </div>
          <div className="cardContainer">
            <div className="card">
              <h3 className="title">Agendar consulta</h3>
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
            <div className="card">
              <h3 className="title">Ver consultas marcadas</h3>
                <div className="bar">
                  <div className="emptybar"></div>
                  <div className="filledbar"></div>
                </div>
                <div className="circle">
                <div className="icon"><FiList/></div>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle className="stroke" cx="60" cy="60" r="50"/>
                  </svg>
                </div>
            </div>
            <div className="card">
              <h3 className="title">Editar informações</h3>
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
            <div className="card">
              <h3 className="title">??</h3>
              <div className="bar">
                <div className="emptybar"></div>
                <div className="filledbar"></div>
              </div>
              <div className="circle">
                <div className="icon"><FiCalendar/></div>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <circle className="stroke" cx="60" cy="60" r="50">
                  </circle>
                </svg>
              </div>
            </div>
          </div>
        </AnimationContent>
      </Content>

    </Container>

  )
};

export default Dashboard;
