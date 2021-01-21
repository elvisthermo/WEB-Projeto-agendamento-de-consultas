import React, { useState, useEffect} from 'react';
import Helmet from 'react-helmet';
import {FiLogOut, FiSearch, FiChevronDown} from 'react-icons/fi';

import { Link, } from 'react-router-dom';


import { Container, Content, AnimationContent, TopNavigation} from './styles';

import './styles.css';

const ListaPacientes: React.FC = () => {
  const meta = [
    {
      key: 'nome',
      text: 'Nome',
      sort: true,
    },
    {
      key: 'especialidade',
      text: 'Especialidade',
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
    {nome: 'elvis', especialidade: "nutricionista", medico:"tio picles", modalidade:"teleconsulta", horario:"horario"},
    {nome: 'viniboy', especialidade: "cardiologia", medico:"tio picles2", modalidade: "a domiciolio", horario:"15/2, 4:20"}
  ].map((d, id) => ({ ...d, id }));

  return (
    <Container>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
        <title>Gerenciar consultas</title>
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
          <h1>Seus pacientes</h1>
        </div>
        <AnimationContent>
          <div id="table-container">
            <table className="table">
              <thead className="table-head">
                <tr>
                  <th>Nome<FiChevronDown/></th>
                  <th>Especialidade<FiChevronDown/></th>
                  <th>Médico<FiChevronDown/></th>
                  <th>Modalidade<FiChevronDown/></th>
                  <th>Horário<FiChevronDown/></th>
                </tr>
              </thead>
              <tbody className="table-body">
                <tr className="table-row">
                  <td className="nome">{data[0].nome}</td>
                  <td className="especialidade">{data[0].especialidade}</td>
                  <td className="medico">{data[0].medico}</td>
                  <td className="modalidade">{data[0].modalidade}</td>
                  <td className="horario">{data[0].horario}</td>
                  <button className="myButton">Remover</button>
                </tr>
                <tr className="table-row">
                  <td className="nome">{data[1].nome}</td>
                  <td className="especialidade">{data[1].especialidade}</td>
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

export default ListaPacientes;
