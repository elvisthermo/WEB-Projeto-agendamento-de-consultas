import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { FiLogOut, FiSearch, FiChevronDown, FiEdit, FiTrash2, FiCheckCircle, FiColumns } from 'react-icons/fi';
import { BiDetail } from 'react-icons/bi';

import { Link, } from 'react-router-dom';
import { DateLocale } from 'yup';
import api from '../../services/api';

import { Container, Content, AnimationContent, TopNavigation, ContainerList, GroupFilters } from './styles';
import Profile from "../Profile";
import Swal from "sweetalert2";


interface Consultas {
  numero_consulta: String,
  data: String,
  hora: String,
  tipo_consulta: String,
  cliente_cpf: String,
  medico_crm: String,
  clinica_cnpj: String
}

const ListaPacientes: React.FC = () => {

  // const [consutas, setConsultas] = useState<Consultas[]>([]);

    const [medicos, setMedicos] = useState();
    const [consultas, setConsultas] = useState<Consultas[]>([]);
    const [clinicas, setClinicas] = useState();
    const [especialidades, setEspecialidades] = useState();
    const [clientes, setClientes] = useState();

  
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

      api.get('/cliente/').then((response) => {
        const clienteResponse = response.data;
        console.log(clienteResponse)
        setClientes(clienteResponse);
      });
  
    }, []);
  
  
    function getClinicaNome(cnpj) {
      const clinicaNome = clinicas && clinicas.map(clinica => {
        if (clinica.cnpj === cnpj) {
          return clinica.razao_social;
        }
      });
      return clinicaNome;
    }
  
    function getEspecialidade(crm) {
      const especialidade = medicos && medicos.map(medico => {
        if (medico.crm === crm) {
          return getEspecialidadeNome(medico.especialidade);
        }
      });
      return especialidade;
    }
  
    function getEspecialidadeNome(id) {
      const especialidadeNome = especialidades && especialidades.map(especialidade => {
        if (especialidade.id === id) {
          return especialidade.tipo;
        }
      });
      return especialidadeNome
    }
  
    function getMedicoNome(crm) {
      const medicoNome = medicos && medicos.map(medico => {
        if (medico.crm === crm) {
          return medico.nome;
        }
      })
      return medicoNome;
    }

    function getClienteNome(cpf) {
      const clienteNome = clientes && clientes.map(cliente => {
        if (cliente.cpf === cpf) {
          return cliente.nome;
        }
      })
      return clienteNome;
    }
  
  // const jsonTest: Consultas[] = [
  //   {
  //     id: 1,
  //     paciente: {
  //       nome: "Elvis",
  //       grupo_de_risco: false
  //     },
  //     medico: {
  //       nome: "Mfred"
  //     },
  //     modalidade: "Teleconsulta",
  //     data_hora: "25/03/2021",
  //     Status: "Pendente",
  //   },
  //   {
  //     id: 2,
  //     paciente: {
  //       nome: "Elvis",
  //       grupo_de_risco: false
  //     },
  //     medico: {
  //       nome: "Mfred"
  //     },
  //     modalidade: "Teleconsulta",
  //     data_hora: "25/03/2021",
  //     Status: "Pendente",
  //   },
  //   {
  //     id: 3,
  //     paciente: {
  //       nome: "Elvis",
  //       grupo_de_risco: false
  //     },
  //     medico: {
  //       nome: "Mfred"
  //     },
  //     modalidade: "Teleconsulta",
  //     data_hora: "25/03/2021",
  //     Status: "Pendente",
  //   },
  //   {
  //     id: 5,
  //     paciente: {
  //       nome: "Elvis",
  //       grupo_de_risco: false
  //     },
  //     medico: {
  //       nome: "Mfred"
  //     },
  //     modalidade: "Presencial",
  //     data_hora: "25/03/2021",
  //     Status: "Concluída",
  //   },
  //   {
  //     id: 6,
  //     paciente: {
  //       nome: "Elvis",
  //       grupo_de_risco: false
  //     },
  //     medico: {
  //       nome: "Mfred"
  //     },
  //     modalidade: "Presencial",
  //     data_hora: "25/03/2021",
  //     Status: "Pendente",
  //   },
  //   {
  //     id: 7,
  //     paciente: {
  //       nome: "MElvis",
  //       grupo_de_risco: true

  //     },
  //     medico: {
  //       nome: "Mfred"
  //     },
  //     modalidade: "Domicílio",
  //     data_hora: "25/03/2021",
  //     Status: "Pendente",
  //   }

  // ]

  // useEffect(() => {
  //   setConsultas(jsonTest);
  // }, []);

  async function popUpDeletar(id,tipo:String) {
    const { value: item } = await Swal.fire({
      titleText: 'Você deseja continuar com a exclusão',
      title:"sim",
      showCancelButton: true
    })
    if (item) {
      handleRemoveConsulta(id);
      Swal.fire(`${tipo} Cancelada`);
    }
  }

  function handleRemoveConsulta(id) {
    // api.delete(`/consulta/${id}/`).then(response=>{
    // console.log(response);
    // const consultaArrayRemove = [...consutas];
    // const findById = consultaArrayRemove.findIndex(item => item.id === id);

    // consultaArrayRemove.splice(findById, 1);
    // console.log(consultaArrayRemove)

    // setConsultas(consultaArrayRemove);
    // })
  }
  function handleFilterGroup(value) {
    // api.delete(`/consulta/${id}/`).then(response=>{
    // console.log(response);

    // const consultasFilter = consutas.filter(d => {
    //   console.log("valor", value);
    //   console.log(d.paciente.grupo_de_risco);
    //   if (d.paciente.grupo_de_risco == value) {

    //     return d;
    //   };
    // })

    // console.log(consultasFilter);

    // return setConsultas(consultasFilter);
  }

  function handleFilterType(value) {
    // api.delete(`/consulta/${id}/`).then(response=>{
    // console.log(response);

    // const consultasFilter = consutas.filter(d => {
    //   console.log(value);
    //   console.log(d);
    //   if (d.modalidade === value) {

    //     return d;
    //   };
    // })

    // console.log(consultasFilter);

    // return setConsultas(consultasFilter);
  }

  function handleRestArray() {
    // api.delete(`/consulta/${id}/`).then(response=>{
    // console.log(response);
    // console.log("reset:", jsonTest);
    // return setConsultas(jsonTest);

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
        <div className="second-header" style={{display: 'flex'}}>
        <div id="welcome-text">
          <h1>Consultas marcadas</h1>
        </div>

        <div className="filtro-content" style={{ display:' flex'}} >
        <h1>Filtrar consultas</h1>
        <GroupFilters>

        <div>
          <h3>Grupo:</h3>
          <select id="selectClinica" onChange={e => handleRestArray()}>
            <option onClick={e => handleRestArray()}>
              Todos
          </option>
            <option onClick={e => handleFilterGroup(true)}>
              Grupo de risco
          </option>
            <option onClick={e => handleFilterGroup(false)}>
              Fora do risco
          </option>
          </select>
          </div>
          <div>
          <h3>Modalidade:</h3>
          <select onChange={e => handleRestArray()}>
            <option onClick={e => handleRestArray()}>
              Todas
            </option>

            <option onClick={e => handleFilterType("Teleconsulta")}>
              Teleconsulta
            </option>
            <option onClick={e => handleFilterType("Domicílio")}>
              Domicílio
            </option>
            <option onClick={e => handleFilterType("Presencial")}>
              Presencial
            </option>
          </select>
          </div>
          <div>
            <h3>Urgência:</h3>
            <select onChange={e => handleRestArray()}>
              <option onClick={e => handleFilterType("Teleconsulta")}>
                ...
            </option>
              <option onClick={e => handleFilterType("Domicílio")}>
                Sim
            </option>
              <option onClick={e => handleFilterType("Presencial")}>
                Não
            </option>
            </select>
          </div>

          <div>

          <h3>Status:</h3>
          <select onChange={e => handleRestArray()}>
            <option onClick={e => handleFilterType("Teleconsulta")}>
              ...
            </option>
            <option onClick={e => handleFilterType("Domicílio")}>
              Pendente
            </option>
            <option onClick={e => handleFilterType("Presencial")}>
              Concluido
            </option>
          </select>
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
                  consultas.map(d => (
                    <tr className="table-row">
                      <td>{d.numero_consulta}</td>
                      <td >
                        <BiDetail size={20} />
                        <Link to={'/perfil/cliente'}> {getClienteNome(d.cliente_cpf)}
                        </Link>
                      </td>
                      <td >

                          <BiDetail size={20} />
                          <Link  to={'/perfil/medico'}>
                            {getMedicoNome(d.medico_crm)}

                          </Link>

                      </td>
                      <td>
                        {d.tipo_consulta}</td>
                      <td>
                        {d.data}
                      </td>
                      <td>{d.hora}</td>
                      <div className="buttons" style={{display: 'flex'}}>
                      <button className="myButton" id="remove" onClick={e => popUpDeletar(d.numero_consulta,'Consulta')}><FiTrash2 size={20} /><span className="tooltip-text">Remover</span></button>
                      <button className="myButton" id="edit" onClick={e => popUpDeletar(d.numero_consulta,'Consulta')}><FiEdit size={20} /><span className="tooltip-text">Editar</span></button>
                      <button className="myButton" id="confirm" onClick={e => popUpDeletar(d.numero_consulta,'Consulta')}><FiCheckCircle size={20} /><span className="tooltip-text">Concluir</span></button>
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
