import React, { useState, useEffect} from 'react';
import Helmet from 'react-helmet';
import {FiLogOut, FiSearch, FiChevronDown} from 'react-icons/fi';

import { Link, } from 'react-router-dom';


import { Container, Content, AnimationContent, TopNavigation} from './styles';

import './styles.css';

const ListaClinicas: React.FC = () => {
  const data = [
    {especialidade: 'puta', clinica: "clinica das puta", endereco:"rua dos bobos, 22", modalidade:"teleconsulta", horario:"horario"},
    {especialidade: 'puta2', clinica: "clinica das puta2", endereco:"rua dos bobos, 22", modalidade:"teleconsulta2", horario:"horario2"}
  ].map((d, id) => ({ ...d, id }));

  return (
    <Container>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
        <title>Primeiro passo do agendamento</title>
        <meta content="" name=""></meta>
      </Helmet>
      <Content>
      <TopNavigation>
            <div className="wrapper">
              <div id="clinica"> <Link to="/"><FiLogOut/>Sair</Link></div>
              <div id="pesquisa"> <Link to="/pesquisar"><FiSearch/>Pesquisar Clínicas</Link> </div>
            </div>
        </TopNavigation>
        <div id="welcome-text">
          <h1></h1>
        </div>
        <AnimationContent>
          <div id="table-container">
            <table className="table">
              <thead className="table-head">
                <tr>
                  <th>Clínica<FiChevronDown/></th>
                  <th>Endereço<FiChevronDown/></th>
                </tr>
              </thead>
              <tbody className="table-body">
                <tr className="table-row">
                  <td className="clinica">{data[0].clinica}</td>
                  <td className="endereço">{data[0].endereco}</td>
                  <button className="myButton">Selecionar</button>
                </tr>
                <tr className="table-row">
                  <td className="clinica">{data[1].clinica}</td>
                  <td className="endereço">{data[1].endereco}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </AnimationContent>
      </Content>
    </Container>

  )
};

export default ListaClinicas;
