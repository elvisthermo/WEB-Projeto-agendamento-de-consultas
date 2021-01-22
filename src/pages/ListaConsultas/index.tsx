import React, { useState, useEffect} from 'react';
import Helmet from 'react-helmet';
import { FiLogOut, FiSearch, FiChevronDown} from 'react-icons/fi';

import { Link, } from 'react-router-dom';


import { Container, Content, AnimationContent, TopNavigation} from './styles';

import './styles.css';
import api from "../../services/api";

interface Consultas {
  id: Number,
  numero_consulta: String,
  data_hora: Date,
  tipo_consulta: String,
  cliente_cpf: String,
  medico_crm: String,
  clinica_cnpj: String,
  especialidade:String

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

  function handleRemoveConsulta(id){
    api.delete(`/consulta/${id}/`).then(response=>{
      console.log(response);


      const consultaArrayRemove = [...consultas];
      const findById = consultaArrayRemove.findIndex(item=> item.id === id);

      consultaArrayRemove.splice(findById,1);
      console.log(consultaArrayRemove)

      setConsultas(consultaArrayRemove);
      alert("Consulta cancelada");

    })
  }

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
                    <td className="especialidade">{consulta.especialidade?consulta.especialidade:"especialidade teste"}</td>
                    <td className="clinica">{consulta.clinica_cnpj}</td>
                    <td className="medico">{consulta.medico_crm}</td>
                    <td className="modalidade">{consulta.tipo_consulta}</td>
                    <td className="horario">{consulta.data_hora}</td>
                    <button className="myButton" onClick={() => handleRemoveConsulta(consulta.id)} >Desmarcar</button>
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
