import React, { useState, useEffect} from 'react';
import Helmet from 'react-helmet';
import { FiLogOut, FiSearch, FiChevronDown, FiTrash2, FiEdit} from 'react-icons/fi';

import { Link, } from 'react-router-dom';


import { Container, Content, AnimationContent, TopNavigation} from './styles';

import api from "../../services/api";

import Swal from "sweetalert2";

const ListaPacientes: React.FC = () => {

  const [clientes,setclientes] = useState();

  useEffect(()=>{

    api.get('/cliente/').then((response) => {
      const clientesResponse = response.data;
      console.log(clientesResponse)
      setclientes(clientesResponse);
    });
  },[]);

  async function popUpDeletar(id,tipo:String) {
    const { value: item } = await Swal.fire({
      titleText: 'Você deseja continuar com a exclusão',
      title:"sim",
      showCancelButton: true
    })
    if (item) {
      handleRemoveCliente(id);
      Swal.fire(`${tipo} Cancelada`);
    }
  }

  function grupoRisco(boleano){
    if(boleano){
      return 'Sim'
    } else return 'Não'
  }

  function handleRemoveCliente(cpf){
    api.delete(`/cliente/${cpf}/`).then(response=>{
      console.log(response);


      const clienteArrayRemove = [...clientes];
      const findByCpf = clienteArrayRemove.findIndex(item=> item.cpf === cpf);

      clienteArrayRemove.splice(findByCpf,1);
      console.log(clienteArrayRemove)

      setclientes(clienteArrayRemove);
      alert("cliente removido");

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
          <h1>Pacientes Cadastrados</h1>
        </div>
        <AnimationContent>
          <div id="table-container">
            <table className="table">
              <thead className="table-head">
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Data de Nascimento</th>
                <th>Grupo de risco?</th>
                <th>E-mail</th>
                <th>Contato</th>
              </tr>
              </thead>
              <tbody className="table-body">
              {clientes &&
              clientes.map(cliente =>
                (
                  <tr key={cliente.cpf} className="table-row">
                    <td className="nome">{cliente.nome}</td>
                    <td className="cpf">{cliente.cpf}</td>
                    <td className="data_de_nascimento">{cliente.data_nascimento}</td>
                    <td className="grupo_de_risco">{grupoRisco(cliente.grupo_de_risco)}</td>
                    <td className="email">{cliente.email}</td>
                    <td className="contato">{cliente.telefone}</td>
                    <div className="buttons" style={{display: 'flex'}}>
                      <button className="myButton" id="remove" onClick={e => popUpDeletar(cliente.cpf,'CPF')}><FiTrash2 size={20} /><span className="tooltip-text">Remover</span></button>
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


export default ListaPacientes;
