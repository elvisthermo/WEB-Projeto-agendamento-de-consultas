import React, { useState, useEffect, useRef } from 'react';
import Helmet from 'react-helmet';
import { FiLogOut, FiSearch, FiChevronDown, FiEdit, FiTrash2, FiCheckCircle, FiColumns } from 'react-icons/fi';
import { BiDetail } from 'react-icons/bi';

import { Link, useHistory} from 'react-router-dom';
import api from '../../services/api';

import { Container, Content, AnimationContent, TopNavigation, ContainerList, GroupFilters } from './styles';
import Swal from "sweetalert2";
import { Consultas } from '../../Interfaces/Consultas';
import { getClienteNome, getClinicaNome, getEspecialidade, getMedicoNome, getEspecialidadeNome } from '../../Utils/Utils';
import Modal, {
  ModalHeader,
  ModalBody,
  ModalFooter,
  useModal
} from '../../components/Modal';
import { Medico } from '../../Interfaces/Medicos';
import { loadCliente, loadConsultas, loadClinicas, loadEspecialidades, loadMedicos } from '../../services/requisicoes';
import { Especialidade } from '../../Interfaces/Especialidade';
import { Cliente } from '../../Interfaces/Clientes';

const ListaPacientes: React.FC = () => {

  const [medicos, setMedicos] = useState<Medico[]>([]);
  const [consultas, setConsultas] = useState<Consultas[]>([]);
  const [clinicas, setClinicas] = useState<Consultas[]>([]);
  const [especialidades, setEspecialidades] = useState<Especialidade[]>([]);
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const { isShowing, toggle } = useModal();


  useEffect(() => {
    async function loadApi() {
      const consultasList = await loadConsultas();
      const medicosList = await loadMedicos();
      const especialidadesList = await loadEspecialidades();
      const clientesList = await loadCliente();
      const clinicasList = await loadClinicas();


      setClinicas(clientesList);
      setConsultas(consultasList);
      setEspecialidades(especialidadesList);
      setMedicos(medicosList);
      setClientes(clientesList);


    }
    loadApi();

  }, []);

  { console.log(consultas) }

  async function popUpDeletar(id, tipo: String) {
    const { value: item } = await Swal.fire({
      titleText: 'Você deseja continuar com a exclusão',
      title: "sim",
      showCancelButton: true
    })
    if (item) {
      handleRemoveConsulta(id);
      Swal.fire(`${tipo} Cancelada`);
    }
  }

  async function popUpConcluir(id, tipo: String) {
    const { value: item } = await Swal.fire({
      titleText: 'Você deseja concluir a consulta',
      title: "sim",
      showCancelButton: true
    })
    if (item) {
      handleRemoveConsulta(id);
      Swal.fire(`${tipo} Cancelada`);
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
    })
  }


  function handleRestArray() {
    consultas.filter((d)=>{
      if(d.tipo_consulta){}
    })

  }

  return (
    <Container>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <title>Gerenciar consultas</title>
        <meta content="" name=""></meta>
      </Helmet>
      <Content>
        <TopNavigation>
          <div className="wrapper">
            <div id="clinica"> <Link to="/"><FiLogOut />Sair</Link></div>
            <div id="pesquisa"> <Link to="/pesquisar"><FiSearch />Pesquisar Clínicas</Link> </div>
          </div>
        </TopNavigation>
        <div className="second-header" style={{ display: 'flex' }}>
          <div id="welcome-text">
            <h1>Consultas marcadas</h1>
          </div>

          <div className="filtro-content" style={{ display: ' flex' }} >
            <h1>Filtrar consultas</h1>
            <GroupFilters>
              <div className="div-select">
                <h3>Grupo:</h3>
                <select onChange={e => handleRestArray()}>
                  <option onClick={e => handleRestArray()}>
                    ...
          </option>
                  <option>
                    Grupo de risco
          </option>
                  <option>
                    Fora do risco
          </option>
                </select>
              </div>
              <div className="div-select">
                <h3>Modalidade:</h3>
                <select onChange={e => handleRestArray()}>
                  <option onClick={e => handleRestArray()}>
                    ...
            </option>
                  <option>
                    Teleconsulta
            </option>
                  <option>
                    Domicílio
            </option>
                  <option>
                    Presencial
            </option>
                </select>
              </div>
              <div className="div-select">
                <h3>Urgência:</h3>
                <select onChange={e => handleRestArray()}>
                  <option>
                    ...
            </option>
                  <option>
                    Sim
            </option>
                  <option>
                    Não
            </option>
                </select>
              </div>
              <div className="div-select">
              </div>
            </GroupFilters>
          </div>
        </div>
        <AnimationContent>

          <ContainerList>
            <table>
              <thead className="table-head">
                <tr className="table-row">
                  <th>Nconsulta:<FiChevronDown /></th>
                  <th>Cliente<FiChevronDown /></th>
                  <th>Médico<FiChevronDown /></th>
                  <th>Modalidade<FiChevronDown /></th>
                  <th>Data<FiChevronDown /></th>
                  <th>Horário<FiChevronDown /></th>
                  {/* <th>Status<FiChevronDown /></th>
                  <th>Urgência<FiChevronDown /></th> */}
                </tr>
              </thead>
              <tbody className="table-body">

                {consultas &&
                  consultas.map((d: Consultas) => (
                    <tr className="table-row">
                      <td>{d.numero_consulta}</td>
                      <td >
                        <BiDetail size={20} />
                        <Link to={'/perfil/cliente'}> {getClienteNome(d.cliente_cpf, clientes)}
                        </Link>
                      </td>
                      <td >

                        <BiDetail size={20} />
                        <Link to={'/perfil/medico'}>
                          {getMedicoNome(d.medico_crm, medicos)}

                        </Link>

                      </td>
                      <td>
                        {d.tipo_consulta}</td>
                      <td>
                        {d.data}
                      </td>
                      <td>{d.hora}</td>
                      <div className="buttons" style={{ display: 'flex' }}>
                        <button className="myButton" id="remove" onClick={e => popUpDeletar(d.numero_consulta, 'Consulta')}><FiTrash2 size={20} />
                          <span className="tooltip-text">Remover</span>
                        </button>

                        <button className="myButton" id="edit" onClick={toggle}><FiEdit size={20} />
                          <span className="tooltip-text">Editar</span>
                        </button>
                        <div>
                          <Modal {...{ isShowing, toggle }}>
                            <ModalHeader {...{ toggle }}>
                              <h1>Atualizar dados da consulta</h1>
                            </ModalHeader>
                            <ModalBody consulta={d} medicos={medicos}>

                            </ModalBody>
                            <ModalFooter>
                              <button onClick={toggle}>
                                Cancel
                              </button>
                            </ModalFooter>
                          </Modal>
                        </div>
                        <button className="myButton"

                          id="confirm" onClick={e => popUpConcluir(d.numero_consulta, 'Consulta')}>
                          <FiCheckCircle size={20} />
                          <span className="tooltip-text">Concluir</span>
                        </button>
                      </div>
                    </tr>
                  ))
                }

              </tbody>
            </table>
          </ContainerList>
        </AnimationContent>
      </Content>
    </Container>

  )
};

export default ListaPacientes;
