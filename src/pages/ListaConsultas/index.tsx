import React, { useState, useEffect} from 'react';
import Helmet from 'react-helmet';
import {FiCalendar, FiList, FiUser, FiLogOut, FiSearch, FiChevronDown} from 'react-icons/fi';

import { Link, } from 'react-router-dom';


import { Container, Content, AnimationContent, TopNavigation} from './styles';

import './styles.css';


const ListaConsultas: React.FC = () => {
  const meta = [
    {
      key: 'especialidade',
      text: 'Especialidade',
      sort: true,
    },
    {
      key: 'clinica',
      text: 'Clínica',
      sort: true,
    },
    {
      key: 'medico',
      text: 'Médico',
      sort: true,
    },
    {
      key: 'modalidade',
      text: 'Modalidade',
      sort: true,
    },
    {
      key: 'horario',
      text: 'Horário',
      sort: true,
    }
  ];

  const data = [
    {especialidade: 'puta', clinica: "clinica das puta", medico:"tio picles", modalidade:"teleconsulta", horario:"horario"},
    {especialidade: 'puta2', clinica: "clinica das puta2", medico:"tio picles2", modalidade:"teleconsulta2", horario:"horario2"}
  ].map((d, id) => ({ ...d, id }));

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
        <div id="welcome-text">
          <h1>Suas consultas</h1>
        </div>
        <AnimationContent>
          <div id="table-container">
            <table className="table">
              <thead className="table-head">
                <tr>
                  <th>Especialidade<FiChevronDown/></th>
                  <th>Clínica<FiChevronDown/></th>
                  <th>Médico<FiChevronDown/></th>
                  <th>Modalidade<FiChevronDown/></th>
                  <th>Horário<FiChevronDown/></th>
                </tr>
              </thead>
              <tbody className="table-body">
                <tr className="table-row">
                  <td className="especialidade">{data[0].especialidade}</td>
                  <td className="clinica">{data[0].clinica}</td>
                  <td className="medico">{data[0].medico}</td>
                  <td className="modalidade">{data[0].modalidade}</td>
                  <td className="horario">{data[0].horario}</td>
                </tr>
                <tr className="table-row">
                <td className="especialidade">{data[1].especialidade}</td>
                  <td className="clinica">{data[1].clinica}</td>
                  <td className="medico">{data[1].medico}</td>
                  <td className="modalidade">{data[1].modalidade}</td>
                  <td className="horario">{data[1].horario}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </AnimationContent>
      </Content>
    </Container>

  )
};

export default ListaConsultas;
