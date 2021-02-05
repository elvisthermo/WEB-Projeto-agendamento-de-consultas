import React, { useState, useEffect} from 'react';
import Helmet from 'react-helmet';
import { FiLogOut, FiSearch, FiChevronDown, FiTrash2, FiEdit} from 'react-icons/fi';

import { Link, } from 'react-router-dom';

import Swal from 'sweetalert2'
import { Container, Content, AnimationContent, TopNavigation} from './styles';

import api from "../../services/api";

interface Medico {
  crm: String,
  nome: String,
  cpf: String,
  area_atuacao: String
}


const ListaMedicos: React.FC = () => {

  const [medicos,setMedicos] = useState();
  const [especialidades,setEspecialidades] = useState();

  useEffect(()=>{
    api.get('/medico/').then((response) => {
      const medicosResponse = response.data;
      console.log(medicosResponse)
      setMedicos(medicosResponse);
    });

    api.get('/especialidade/').then((response) => {
      const especialidadesResponse = response.data;
      console.log(especialidadesResponse)
      setEspecialidades(especialidadesResponse);
    });

  },[]);

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



  async function popUpDeletar(id:String,tipo:String) {
    const { value: item } = await Swal.fire({
      titleText: 'Você deseja continuar com a exclusão',
      title:"sim",
      showCancelButton: true
    })
    if (item) {
      handleRemoveMedico(id);
      Swal.fire(`${tipo} Deletado`);
    }
  }

  function handleRemoveMedico(crm){
    api.delete(`/medico/${crm}/`).then(response=>{
      console.log(response);


      const medicoArrayRemove = [...medicos];
      const findByCrm = medicoArrayRemove.findIndex(item=> item.crm === crm);

      medicoArrayRemove.splice(findByCrm,1);
      console.log(medicoArrayRemove)

      setMedicos(medicoArrayRemove);
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
            <table className="table background-table">
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
              <tbody className="table-body ">
              {medicos &&
              medicos.map(medico =>
                (
                  <tr key={medico.crm} className="table-row">
                    <td className="crm">{medico.crm?medico.crm:"crm teste"}</td>
                    <td className="nome">{medico.nome}</td>
                    <td className="area_atuacao">{getEspecialidade(medico.crm)}</td>
                    <td className="cpf">{medico.cpf}</td>
                    <td className="email">{medico.email}</td>
                    <td className="contato">{medico.telefone}</td>
                    <div className="buttons" style={{display: 'flex'}}>
                      <button className="myButton" id="remove" onClick={e => popUpDeletar(medico.crm,'CRM')}><FiTrash2 size={20} /><span className="tooltip-text">Remover</span></button>
                    </div>
                  </tr>
                )
              )}
              </tbody>
            </table>
          </div>
        </AnimationContent>
      </Content>
    </Container>

  )
};


export default ListaMedicos;
