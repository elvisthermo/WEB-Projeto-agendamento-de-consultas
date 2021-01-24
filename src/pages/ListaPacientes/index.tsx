import React, { useState, useEffect} from 'react';
import Helmet from 'react-helmet';
import {FiLogOut, FiSearch, FiChevronDown,FiEdit,FiTrash2,FiCheckCircle} from 'react-icons/fi';

import { Link, } from 'react-router-dom';
import { DateLocale } from 'yup';
import api from '../../services/api';


import { Container, Content, AnimationContent, TopNavigation,ContainerList,ButtonRemove,ButtonEdit,ButtonConfirm} from './styles';

// import './styles.css';

interface Consultas{
    id: Number,
    paciente:{
      nome: String
    }
    medico:{
      nome: String
    }
    modalidade: String,
    data_hora: String,
    Status: String
}

const ListaPacientes: React.FC = () => {
  const [consutas,setConsultas] = useState<Consultas[]>([]);

  const data = [
    {nome: 'elvis', especialidade: "nutricionista", medico:"emanuel", modalidade:"teleconsulta", horario:"horario"},
    {nome: 'viniboy', especialidade: "cardiologia", medico:"januario", modalidade: "a domicilio", horario:"15/2, 4:20"}
  ].map((d, id) => ({ ...d, id }));


  const jsonTest:Consultas[] =[
    { 
    id:1,
    paciente:{
      nome: "Elvis"
    },
    medico:{
      nome: "Mfred"
    },
      modalidade: "web",
      data_hora: "25/03/2021",
      Status: "Pendente",
  },
  { 
    id:2,
    paciente:{
      nome: "Elvis"
    },
    medico:{
      nome: "Mfred"
    },
      modalidade: "web",
      data_hora: "25/03/2021",
      Status: "Pendente",
  },
  { 
    id:3,
    paciente:{
      nome: "Elvis"
    },
    medico:{
      nome: "Mfred"
    },
      modalidade: "web",
      data_hora: "25/03/2021",
      Status: "Pendente",
  }

]

  useEffect(()=>{
    setConsultas(jsonTest);


  },[]);


  function handleRemoveConsulta(id){
    // api.delete(`/consulta/${id}/`).then(response=>{
      // console.log(response);


      const consultaArrayRemove = [...consutas];
      const findById = consultaArrayRemove.findIndex(item=> item.id === id);

      consultaArrayRemove.splice(findById,1);
      console.log(consultaArrayRemove)

      setConsultas(consultaArrayRemove);
      alert("Consulta cancelada");

    // })
  }

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

          <ContainerList>
            <table>
              <thead>
                <tr>
                  <th>N consulta:<FiChevronDown/></th>
                  <th>Cliente<FiChevronDown/></th>
                  <th>Médico<FiChevronDown/></th>
                  <th>Modalidade<FiChevronDown/></th>
                  <th>Data<FiChevronDown/></th>
                  <th>Horário<FiChevronDown/></th>
                  <th>Status<FiChevronDown/></th>
                  <th>Excluir</th>
                  <th>Editar</th>
               
                </tr>
              </thead>
              <tbody>

                {consutas && 
                consutas.map( d=>(
                  <tr>
                  <td>{d.id}</td>
                  <td> {d.paciente.nome}</td>
                  <td >{d.medico.nome}</td>
                  <td>{d.modalidade}</td>
                  <td>{d.data_hora}</td>
                  <td>{"14:30"}</td>
                  <td>{d.Status}</td>

                  <td onClick={e=>handleRemoveConsulta(d.id)}><FiTrash2 size={20}/>Remover</td>
                  <td><FiEdit size={20}/>Editar</td>
                  {/* <td><FiCheckCircle size={20}/>Concluir</td> */}
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
