import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { FiLogOut, FiSearch, FiTrash2 } from 'react-icons/fi';

import { Link, } from 'react-router-dom';

import { Container, Content, AnimationContent, TopNavigation } from './styles';

import api from "../../services/api";

import Swal from 'sweetalert2';

import {getEspecialidade,getClinicaNome,getMedicoNome} from '../../Utils/Utils';

const ListaMedicos: React.FC = () => {

  const [medicos, setMedicos] = useState();
  const [consultas, setConsultas] = useState();
  const [clinicas, setClinicas] = useState();
  const [especialidades, setEspecialidades] = useState();

  useEffect(() => {

    api.get('/consulta/').then((response) => {
      const consultasResponse = response.data;

      console.log(consultasResponse)
      setConsultas(consultasResponse);
    });

    api.get('/clinica/').then((response) => {
      const clinicaResponse = response.data;
      console.log(clinicaResponse)
      setClinicas(clinicaResponse);
    });

    api.get('/medico/').then((response) => {
      const medicoResponse = response.data;
      console.log(medicoResponse)
      setMedicos(medicoResponse);
    });

    api.get('/especialidade/').then((response) => {
      const especialidadesResponse = response.data;
      console.log(especialidadesResponse)
      setEspecialidades(especialidadesResponse);
    });

  }, []);

  async function popUpDeletar(id: String, tipo: String) {
    const { value: item } = await Swal.fire({
      titleText: 'Você deseja continuar com a exclusão',
      title: "sim",
      showCancelButton: true
    })
    if (item) {
      handleRemoveConsulta(id);
      Swal.fire(`${tipo} Deletado`);
    }
  }

  function handleRemoveConsulta(id) {
    api.delete(`/consulta/${id}/`).then(response => {
      console.log(response);

      const consultaArrayRemove = [...consultas];
      const findById = consultaArrayRemove.findIndex(item => item.id === id);

      consultaArrayRemove.splice(findById, 1);
      console.log(consultaArrayRemove)

      setConsultas(consultaArrayRemove);
      alert("Consulta cancelada");

    })
  }

  return (
    <Container>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <title>Bem-vindo!</title>
        <meta content="" name=""></meta>
      </Helmet>
      <Content>
        <TopNavigation>
          <div className="wrapper">
            <div id="clinica"> <Link to="/" onClick={() => {localStorage.clear()}}><FiLogOut />Sair</Link></div>
            <div id="pesquisa"> <Link to="/pesquisar"><FiSearch />Pesquisar Clínicas</Link> </div>
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
                  <th>Clínica</th>
                  <th>Médico</th>
                  <th>Modalidade</th>
                  <th>Data</th>
                  <th>Hora</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {consultas &&
                  consultas.map(consulta =>
                  (
                    <tr key={consulta.id} className="table-row">
                      <td className="clinica">{getClinicaNome(consulta.clinica_cnpj,clinicas)}</td>
                      <td className="medico">{getMedicoNome(consulta.medico_crm,medicos)}</td>
                      <td className="modalidade">{consulta.tipo_consulta}</td>
                      <td className="horario">{consulta.data}</td>
                      <td className="horario">{consulta.hora}</td>
                      <div className="buttons" style={{ display: 'flex' }}>
                        <button className="myButton" id="remove" onClick={e => popUpDeletar(consulta.id, 'id')}><FiTrash2 size={20} /><span className="tooltip-text">Desmarcar</span></button>
                      </div>
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
