import React from 'react';
import Helmet from 'react-helmet';
import {FiCalendar, FiEdit3, FiPlus, FiLogOut, FiSearch, FiUsers} from 'react-icons/fi';

import { Link } from 'react-router-dom';


import { Container, Content, AnimationContent, TopNavigation,ContentMenu,CardContainer,Card,Background,Footer,Icons} from './styles';

import './styles.css';

const DashboardClinica: React.FC = () => {
  return (
    <Container>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
        <title>Bem-vindo!</title>
        <meta content="" name=""></meta>
      </Helmet>
      <TopNavigation>
            <div className="wrapper">
              <div id="clinica"> <Link to="/"><FiLogOut/>Sair</Link></div>
              <div id="pesquisa"> <Link to="/pesquisar"><FiSearch/>Pesquisar Clínicas</Link> </div>
            </div>
        </TopNavigation>
      <Content>
        {/* <AnimationContent> */}
        
        <ContentMenu className="bem-vindo">
            <h1>Bem-vindo, {`Clínica!`}</h1>
            <p>O que você quer fazer?</p>
          </ContentMenu>
          <CardContainer className="cardContainer">
            
            <Link to="/administrarConsultas" className="cardLink">
              
              <Card className="card">
                <h3 className="title">Administrar consultas marcadas</h3>
                <div className="bar">
                  <div className="emptybar"></div>
                  <div className="filledbar"></div>
                </div>
                <div className="circle">
                  <Icons className="icon"><FiCalendar /></Icons>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle className="stroke" cx="60" cy="60" r="50"/>
                  </svg>
                </div>
              </Card>
           
           
            </Link>
            <Link to="/" className="cardLink">
            <Card className="card">
              <h3 className="title">Editar informações da clínica</h3>
                <div className="bar">
                  <div className="emptybar"></div>
                  <div className="filledbar"></div>
                </div>
                <div className="circle">
                <Icons className="icon"><FiEdit3/></Icons>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle className="stroke" cx="60" cy="60" r="50"/>
                  </svg>
                </div>
            </Card>
            </Link>
            <Link to="/cadastrar/medico" className="cardLink">
              <Card className="card">
                <h3 className="title">Cadastrar médico</h3>
                <div className="bar">
                  <div className="emptybar"></div>
                  <div className="filledbar"></div>
                </div>
                <div className="circle">
                  <Icons className="icon"><FiPlus/></Icons>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle className="stroke" cx="60" cy="60" r="50"/>
                  </svg>
                </div>
              </Card>
            </Link>
            <Link to="/listar/medicos" className="cardLink">
              <Card className="card">
                <h3 className="title">Ver médicos cadastrados</h3>
                <div className="bar">
                  <div className="emptybar"></div>
                  <div className="filledbar"></div>
                </div>
                <div className="circle">
                  <Icons className="icon"><FiUsers/></Icons>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle className="stroke" cx="60" cy="60" r="50">
                    </circle>
                  </svg>
                </div>
              </Card>
            </Link>
          </CardContainer>
        {/* </AnimationContent> */}
      </Content>

      <Footer>
        <div>
           <p>Desenvolvido por Castelo Vigilânte LTDA</p>
        </div>
      </Footer>
      <Background/>
    </Container>

  )
};

export default DashboardClinica;
