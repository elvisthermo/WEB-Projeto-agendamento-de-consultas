import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { FiLogOut, FiSearch, FiChevronDown, FiEdit, FiTrash2, FiCheckCircle } from 'react-icons/fi';
import { BiDetail } from 'react-icons/bi';

import { Link, } from 'react-router-dom';
import { DateLocale } from 'yup';
import api from '../../services/api';


import { Container, Content, AnimationContent, TopNavigation, ContainerList, ButtonRemove, ButtonEdit, ButtonConfirm,GroupFilters } from './styles';
import Profile from "../Profile";

// import './styles.css';

interface Consultas {
  id: Number,
  paciente: {
    nome: String,
    grupo_de_risco: Boolean
  }
  medico: {
    nome: String
  }
  modalidade: String,
  data_hora: String,
  Status: String
}

const AdministrarConsultas: React.FC = () => {

  const [modalidade, setModalidade] = useState("");
  const [consutas, setConsultas] = useState<Consultas[]>([]);

  const data = [
    { nome: 'elvis', especialidade: "nutricionista", medico: "emanuel", modalidade: "teleconsulta", horario: "horario" },
    { nome: 'viniboy', especialidade: "cardiologia", medico: "januario", modalidade: "a domicilio", horario: "15/2, 4:20" }
  ].map((d, id) => ({ ...d, id }));


  const jsonTest: Consultas[] = [
    {
      id: 1,
      paciente: {
        nome: "Elvis",
        grupo_de_risco: false
      },
      medico: {
        nome: "Mfred"
      },
      modalidade: "Teleconsulta",
      data_hora: "25/03/2021",
      Status: "Pendente",
    },
    {
      id: 2,
      paciente: {
        nome: "Elvis",
        grupo_de_risco: false
      },
      medico: {
        nome: "Mfred"
      },
      modalidade: "Teleconsulta",
      data_hora: "25/03/2021",
      Status: "Pendente",
    },
    {
      id: 3,
      paciente: {
        nome: "Elvis",
        grupo_de_risco: false
      },
      medico: {
        nome: "Mfred"
      },
      modalidade: "Teleconsulta",
      data_hora: "25/03/2021",
      Status: "Pendente",
    },
    {
      id: 5,
      paciente: {
        nome: "Elvis",
        grupo_de_risco: false
      },
      medico: {
        nome: "Mfred"
      },
      modalidade: "Presencial",
      data_hora: "25/03/2021",
      Status: "Concluída",
    },
    {
      id: 6,
      paciente: {
        nome: "Elvis",
        grupo_de_risco: false
      },
      medico: {
        nome: "Mfred"
      },
      modalidade: "Presencial",
      data_hora: "25/03/2021",
      Status: "Pendente",
    },
    {
      id: 7,
      paciente: {
        nome: "MElvis",
        grupo_de_risco: true

      },
      medico: {
        nome: "Mfred"
      },
      modalidade: "Domicílio",
      data_hora: "25/03/2021",
      Status: "Pendente",
    }

  ]

  useEffect(() => {
    setConsultas(jsonTest);


  }, []);


  function handleRemoveConsulta(id) {
    // api.delete(`/consulta/${id}/`).then(response=>{
    // console.log(response);


    const consultaArrayRemove = [...consutas];
    const findById = consultaArrayRemove.findIndex(item => item.id === id);

    consultaArrayRemove.splice(findById, 1);
    console.log(consultaArrayRemove)

    setConsultas(consultaArrayRemove);
    alert("Consulta cancelada");

    // })
  }



  function handleFilterGroup(value) {
    // api.delete(`/consulta/${id}/`).then(response=>{
    // console.log(response);

    const consultasFilter = consutas.filter(d => {
      console.log("valor", value);
      console.log(d.paciente.grupo_de_risco);
      if (d.paciente.grupo_de_risco == value) {

        return d;
      };
    })

    console.log(consultasFilter);

    return setConsultas(consultasFilter);
  }

  function handleFilterType(value) {
    // api.delete(`/consulta/${id}/`).then(response=>{
    // console.log(response);

    const consultasFilter = consutas.filter(d => {
      console.log(value);
      console.log(d);
      if (d.modalidade === value) {

        return d;
      };
    })

    console.log(consultasFilter);

    return setConsultas(consultasFilter);
  }

  function handleRestArray() {
    // api.delete(`/consulta/${id}/`).then(response=>{
    // console.log(response);
    console.log("reset:", jsonTest);
    return setConsultas(jsonTest);

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
        <div id="welcome-text">
          <h1>Gerenciar Consultas Marcadas</h1>
        </div>


        <h1>Filtrar consultas</h1>
        <GroupFilters>

        <div>
          <h3>Grupo:</h3>
          <select onChange={e => handleRestArray()}>
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

        <AnimationContent>

          <ContainerList>
            <table>
              <thead>
                <tr>
                  <th>N consulta:<FiChevronDown /></th>
                  <th>Cliente<FiChevronDown /></th>
                  <th>Médico<FiChevronDown /></th>
                  <th>Modalidade<FiChevronDown /></th>
                  <th>Data<FiChevronDown /></th>
                  <th>Horário<FiChevronDown /></th>
                  <th>Status<FiChevronDown /></th>
                  <th>Excluir</th>
                  <th>Editar</th>

                </tr>
              </thead>
              <tbody>

                {consutas &&
                  consutas.map(d => (
                    <tr>
                      <td>{d.id}</td>
                      <td>
                        <BiDetail size={20} />
                        <Link to={'/perfil'}> {d.paciente.nome}
                        </Link>
                      </td>
                      <td >
                        <td>
                          <BiDetail size={20} />
                          <Link to={'/perfil'}>
                            {d.medico.nome}

                          </Link>
                        </td>
                      </td>
                      <td>
                        {d.modalidade}</td>
                      <td>
                        {d.data_hora}
                      </td>
                      <td>{"14:30"}</td>
                      <td>{d.Status}</td>

                      <ButtonRemove onClick={e => handleRemoveConsulta(d.id)}><FiTrash2 size={20} />Remover</ButtonRemove>
                      <ButtonEdit><FiEdit size={20} />Editar</ButtonEdit>
                      <ButtonConfirm><FiCheckCircle size={20} />Concluir</ButtonConfirm>
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

export default AdministrarConsultas;
