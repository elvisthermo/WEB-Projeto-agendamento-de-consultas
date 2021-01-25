import React, { useState, useEffect} from 'react';
import Helmet from 'react-helmet';
import { FiLogOut, FiSearch, FiChevronDown} from 'react-icons/fi';

import { Link, } from 'react-router-dom';


import { Container, Content, AnimationContent, TopNavigation} from './styles';

import api from "../../services/api";

const ListaPacientes: React.FC = () => {

  const [clientes,setclientes] = useState();

  useEffect(()=>{

    api.get('/cliente/').then((response) => {
      const clientesResponse = response.data;
      console.log(clientesResponse)
      setclientes(clientesResponse);
    });
  },[]);

  function handleRemovecliente(cpf){
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
                <th>Nome<FiChevronDown/></th>
                <th>CPF<FiChevronDown/></th>
                <th>Data de Nascimento<FiChevronDown/></th>
                <th>Grupo de risco?<FiChevronDown/></th>
                <th>E-mail<FiChevronDown/></th>
                <th>Contato<FiChevronDown/></th>
              </tr>
              </thead>
              <tbody className="table-body">
              {clientes &&
              clientes.map(cliente =>
                (
                  <tr key={cliente.crm} className="table-row">
                    <td className="nome">{cliente.nome}</td>
                    <td className="cpf">{cliente.cpf}</td>
                    <td className="data_de_nascimento">{cliente.idade}</td>
                    <td className="grupo_de_risco">{cliente.grupo_de_risco}</td>
                    <td className="email">{}</td>
                    <td className="contato">{}</td>
                    <button className="myButton" onClick={() => handleRemovecliente(cliente.crm)}>Excluir</button>
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
