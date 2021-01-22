import React, { useState, useEffect} from 'react';
import Helmet from 'react-helmet';
import {FiLogOut, FiSearch, FiChevronDown,FiEdit,FiTrash2,FiCheckCircle} from 'react-icons/fi';

import { Link, } from 'react-router-dom';


import { Container, Content, AnimationContent, TopNavigation,ContainerList,ButtonRemove,ButtonEdit,ButtonConfirm} from './styles';

// import './styles.css';

const ListaPacientes: React.FC = () => {


  const data = [
    {nome: 'elvis', especialidade: "nutricionista", medico:"emanuel", modalidade:"teleconsulta", horario:"horario"},
    {nome: 'viniboy', especialidade: "cardiologia", medico:"januario", modalidade: "a domicilio", horario:"15/2, 4:20"}
  ].map((d, id) => ({ ...d, id }));

  useEffect(()=>{

  },[]);

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
          <h1>Gerenciar Consultas Marcadas</h1>
        </div>


          <h1>Filtrar consultas</h1>
          <h3>Grupo:</h3>
          <select>
            <option>
              Grupo de risco
            </option>
            <option>
              Fora do risco
            </option>
          <option>
            Todos
          </option>
          </select>

          <h3>Modalidade:</h3>
          <select>
            <option>
              web
            </option>
            <option>
              Teleconsulta
            </option>
            <option>
              Domicilio
            </option>
          </select>

        <AnimationContent>

          <ContainerList id="table-container">
            <table className="table">
              <thead className="table-head">
                <tr>
                  <th>N consulta:<FiChevronDown/></th>
                  <th>Cliente<FiChevronDown/></th>
                  <th>Médico<FiChevronDown/></th>
                  <th>Especialidade<FiChevronDown/></th>
                  <th>Modalidade<FiChevronDown/></th>
                  <th>Data<FiChevronDown/></th>
                  <th>Horário<FiChevronDown/></th>
                  <th>Status<FiChevronDown/></th>
                </tr>
              </thead>
              <tbody className="table-body">
                <tr className="table-row">
                  <td className="nome">{data[0].nome}</td>
                  <td className="especialidade">{data[0].especialidade}</td>
                  <td className="medico">{data[0].medico}</td>
                  <td className="modalidade">{data[0].modalidade}</td>
                  <td className="modalidade">{data[0].modalidade}</td>
                  <td className="horario">{data[0].horario}</td>
                  <td className="Status">{data[0].horario}</td>

                  <td><FiTrash2 size={20}/>Remover</td>
                  <td><FiEdit size={20}/>Editar</td>
                  <td><FiCheckCircle size={20}/>Concluir</td>


                </tr>
                <tr className="table-row">
                  <td className="nome">{data[1].nome}</td>
                  <td className="especialidade">{data[1].especialidade}</td>
                  <td className="medico">{data[1].medico}</td>
                  <td className="modalidade">{data[1].modalidade}</td>
                  <td className="horario">{data[1].horario}</td>
                  <button className="myButton">Remover</button>
                </tr>
                <tr className="table-row">
                  <td className="nome">{data[1].nome}</td>
                  <td className="especialidade">{data[1].especialidade}</td>
                  <td className="medico">{data[1].medico}</td>
                  <td className="modalidade">{data[1].modalidade}</td>
                  <td className="horario">{data[1].horario}</td>
                  <button className="myButton">Remover</button>
                </tr>
                <tr className="table-row">
                  <td className="nome">{data[1].nome}</td>
                  <td className="especialidade">{data[1].especialidade}</td>
                  <td className="medico">{data[1].medico}</td>
                  <td className="modalidade">{data[1].modalidade}</td>
                  <td className="horario">{data[1].horario}</td>
                  <button className="myButton">Remover</button>
                </tr>
                <tr className="table-row">
                  <td className="nome">{data[1].nome}</td>
                  <td className="especialidade">{data[1].especialidade}</td>
                  <td className="medico">{data[1].medico}</td>
                  <td className="modalidade">{data[1].modalidade}</td>
                  <td className="horario">{data[1].horario}</td>
                  <button className="myButton">Remover</button>
                </tr>
                <tr className="table-row">
                  <td className="nome">{data[1].nome}</td>
                  <td className="especialidade">{data[1].especialidade}</td>
                  <td className="medico">{data[1].medico}</td>
                  <td className="modalidade">{data[1].modalidade}</td>
                  <td className="horario">{data[1].horario}</td>
                  <button className="myButton">Remover</button>
                </tr>


                <tr className="table-row">
                  <td className="nome">{data[1].nome}</td>
                  <td className="especialidade">{data[1].especialidade}</td>
                  <td className="medico">{data[1].medico}</td>
                  <td className="modalidade">{data[1].modalidade}</td>
                  <td className="horario">{data[1].horario}</td>
                  <button className="myButton">Remover</button>
                </tr>

                <tr className="table-row">
                  <td className="nome">{data[1].nome}</td>
                  <td className="especialidade">{data[1].especialidade}</td>
                  <td className="medico">{data[1].medico}</td>
                  <td className="modalidade">{data[1].modalidade}</td>
                  <td className="horario">{data[1].horario}</td>
                  <button className="myButton">Remover</button>
                </tr>

                <tr className="table-row">
                  <td className="nome">{data[1].nome}</td>
                  <td className="especialidade">{data[1].especialidade}</td>
                  <td className="medico">{data[1].medico}</td>
                  <td className="modalidade">{data[1].modalidade}</td>
                  <td className="horario">{data[1].horario}</td>
                  <button className="myButton">Remover</button>
                </tr>

                <tr className="table-row">
                  <td className="nome">{data[1].nome}</td>
                  <td className="especialidade">{data[1].especialidade}</td>
                  <td className="medico">{data[1].medico}</td>
                  <td className="modalidade">{data[1].modalidade}</td>
                  <td className="horario">{data[1].horario}</td>
                  <button className="myButton">Remover</button>
                </tr>
              </tbody>
            </table>
          </ContainerList>
        </AnimationContent>
      </Content>
    </Container>

  )
};

export default ListaPacientes;
