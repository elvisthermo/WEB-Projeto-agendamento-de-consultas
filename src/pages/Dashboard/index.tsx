import React from 'react';
import Helmet from 'react-helmet';
import {FiCalendar, FiList, FiEdit3, FiLogOut, FiSearch, FiPlus, FiUser} from 'react-icons/fi';

import { Link, } from 'react-router-dom';


import { Container, Content, AnimationContent, TopNavigation,ContentMenu,CardContainer,Card,Background,Footer,Icons} from './styles';


const Dashboard: React.FC = () => {
  return (
    <Container>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
        <title>Bem-vindo!</title>
        <meta content="" name=""></meta>
      </Helmet>
      <TopNavigation>
            <div className="wrapper">
              <div id="clinica"> <Link to="/" onClick={() => {localStorage.clear()}}><FiLogOut/>Sair</Link></div>
              <div id="pesquisa"> <Link to="/pesquisar"><FiSearch/>Pesquisar Clínicas</Link> </div>
            </div>
        </TopNavigation>
      <Content>
        {/* <AnimationContent> */}

        <ContentMenu className="bem-vindo">
            <h1>Bem-vindo, {localStorage.getItem('Name')}</h1>
            <p>O que você quer fazer?</p>
          </ContentMenu>
          <CardContainer className="cardContainer">

            <Link to="/agendar" className="cardLink">

              <Card className="card">
                <h3 className="title">Agendar Consulta</h3>
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
            <Link to="/listar/consultas" className="cardLink">
            <Card className="card">
              <h3 className="title">Ver consultas marcadas</h3>
                <div className="bar">
                  <div className="emptybar"></div>
                  <div className="filledbar"></div>
                </div>
                <div className="circle">
                <Icons className="icon"><FiList/></Icons>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle className="stroke" cx="60" cy="60" r="50"/>
                  </svg>
                </div>
            </Card>
            </Link>
            <Link to="/perifl" className="cardLink">
              <Card className="card">
                <h3 className="title">Ver perfil</h3>
                <div className="bar">
                  <div className="emptybar"></div>
                  <div className="filledbar"></div>
                </div>
                <div className="circle">
                  <Icons className="icon"><FiUser/></Icons>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle className="stroke" cx="60" cy="60" r="50"/>
                  </svg>
                </div>
              </Card>
            </Link>
            <Link to="/listar/medicos" className="cardLink">
              <Card className="card">
                <h3 className="title">Editar informações</h3>
                <div className="bar">
                  <div className="emptybar"></div>
                  <div className="filledbar"></div>
                </div>
                <div className="circle">
                  <Icons className="icon"><FiEdit3/></Icons>
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

      {/*<Footer>*/}
      {/*  <div>*/}
      {/*     <p>Desenvolvido por Castelo Vigilânte LTDA</p>*/}
      {/*  </div>*/}
      {/*</Footer>*/}
      <Background/>
    </Container>

  )
};

export default Dashboard;
