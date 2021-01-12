import React, { useState, useEffect} from 'react';
import Helmet from 'react-helmet';
import {FiCalendar, FiList, FiUser, FiLogOut, FiSearch} from 'react-icons/fi';

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
    {especialidade: 'puta', clinica: "clinica das puta", medico:"tio picles", modalidade:"teleconsulta", horario:"horario"}
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
                  <th>Especialidade</th>
                  <th>Clínica</th>
                  <th>Médico</th>
                  <th>Modalidade</th>
                  <th>Horário</th>
                </tr>
              </thead>
              <tbody className="table-body">
                <tr className="table-row">
                  <td>{data[0].especialidade}</td>
                  <td>{data[0].clinica}</td>
                  <td>{data[0].medico}</td>
                  <td>{data[0].modalidade}</td>
                  <td>{data[0].horario}</td>
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
