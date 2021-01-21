import React, { useState, useEffect} from 'react';
import Helmet from 'react-helmet';
import {FiCalendar, FiList, FiUser, FiLogOut, FiSearch, FiChevronDown} from 'react-icons/fi';

import { Link, } from 'react-router-dom';


import { Container, Content, AnimationContent, TopNavigation} from './styles';

import './styles.css';
import api from "../../services/api";

interface Consultas {
  id: number,
  numero_consulta: String,
  // "data_hora": String,
  tipo_consulta: String,
  cliente_cpf: String,
  medico_crm: String,
  clinica_cnpj: String,
  modalidade:String

}


const ListaConsultas: React.FC = () => {

  const [consultas,setConsultas] = useState();

  useEffect(()=>{

    api.get('/consulta/').then((response) => {
      const consultasResponse = response.data;

      console.log(consultasResponse)
      setConsultas(consultasResponse);
    });
  },[]);

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
              {consultas &&
              consultas.map(consulta =>
                (
                  <tr key={consulta.id} className="table-row">
                    <td className="especialidade">consulta.especialida</td>
                    <td className="clinica">consulta.clinica</td>
                    <td className="medico">consulta.medico</td>
                    <td className="modalidade">consulta.</td>
                    <td className="horario"></td>
                  </tr>
                )
              )
              }
              </tbody>
            </table>
          </div>
        </AnimationContent>
      </Content>
    </Container>

  )
};

export default ListaConsultas;
