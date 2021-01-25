import React, { useState, useEffect} from 'react';
import Helmet from 'react-helmet';
import { FiLogOut, FiSearch, FiChevronDown} from 'react-icons/fi';

import { Link, } from 'react-router-dom';


import { Container, Content, AnimationContent, TopNavigation} from './styles';

import './styles.css';
import api from "../../services/api";

interface Medico {
  crm: String,
  nome: String,
  cpf: String,
  area_atuacao: String
}


const ListaMedicos: React.FC = () => {

  const [medicos,setMedicos] = useState();

  useEffect(()=>{

    api.get('/medico/').then((response) => {
      const medicosResponse = response.data;
      console.log(medicosResponse)
      setMedicos(medicosResponse);
    });
  },[]);

  function handleRemoveMedico(crm){
    api.delete(`/medico/${crm}/`).then(response=>{
      console.log(response);


      const medicoArrayRemove = [...medicos];
      const findByCrm = medicoArrayRemove.findIndex(item=> item.crm === crm);

      medicoArrayRemove.splice(findByCrm,1);
      console.log(medicoArrayRemove)

      setMedicos(medicoArrayRemove);
      alert("Medico removido");

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
          <h1>Médicos Cadastrados</h1>
        </div>
        <AnimationContent>
          <div id="table-container">
            <table className="table">
              <thead className="table-head">
                <tr>
                  <th>CRM<FiChevronDown/></th>
                  <th>Nome<FiChevronDown/></th>
                  <th>Especialidade<FiChevronDown/></th>
                  <th>CPF<FiChevronDown/></th>
                  <th>E-mail<FiChevronDown/></th>
                  <th>Contato<FiChevronDown/></th>
                </tr>
              </thead>
              <tbody className="table-body">
              {medicos &&
              medicos.map(medico =>
                (
                  <tr key={medico.crm} className="table-row">
                    <td className="crm">{medico.crm?medico.crm:"crm teste"}</td>
                    <td className="nome">{medico.nome}</td>
                    <td className="area_atuacao">{medico.area_atuacao}</td>
                    <td className="cpf">{}</td>
                    <td className="email">{}</td>
                    <td className="contato">{}</td>
                    <button className="myButton" onClick={() => handleRemoveMedico(medico.crm)}>Excluir</button>
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


export default ListaMedicos;
