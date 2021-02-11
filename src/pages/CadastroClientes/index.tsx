import React, { useRef, useState, FormEvent, useEffect } from 'react';
import {
  FiClipboard, FiArchive, FiFile, FiLock, FiMail, FiArrowLeft
} from 'react-icons/fi';
import { FaBirthdayCake } from 'react-icons/fa';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';

import { useToast } from '../../hooks/toast';

import logoImg from '../../assets/logo.svg';

import {
  Container, Content, AnimationContainer,
} from './styles';

import Input from '../../components/Input';

import Button from '../../components/Button';
import api from "../../services/api";
import { loadClienteById } from '../../services/requisicoes';
import { Cliente } from '../../Interfaces/Clientes';
import { boolean } from 'yup';


const CadastroDeClientes: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [data_nascimento, setData_nascimento] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [grupo_de_risco, setGrupo_de_risco] = useState(false);
  const [telefone, setTelefone] = useState("");
  const [cliente, setCliente] = useState<Cliente>();

  useEffect(() => {
    async function loadApi() {
      const storeCpf = localStorage.getItem('CPF')
      const responseCliente: Cliente = await loadClienteById(storeCpf);

      setCliente(responseCliente);
      setNome(responseCliente?.nome)
      setCpf(responseCliente?.cpf)
      setEndereco(responseCliente?.endereco)
      setEmail(responseCliente?.email)
      setGrupo_de_risco(responseCliente.grupo_de_risco)
      setData_nascimento(responseCliente.data_nascimento)
      setTelefone(responseCliente.telefone)

    }
    loadApi();
  }, [])

  async function handleAddClientes(event: FormEvent<HTMLFormElement>)
    : Promise<void> {
    // event.preventDefault();

    try {
      api.put(`/cliente/${cliente?.cpf}/`,
        {
          "cpf": cpf,
          "nome": nome,
          "endereco": endereco,
          "grupo_de_risco": grupo_de_risco,
          "telefone": telefone,
          "email": email,
        }
      )
      alert("Perfil Atualizado");
      history.push('/dashboard/');

    } catch (err) {
      console.log(err.response.error);
    }
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="web-consultas" />
          <Form onSubmit={handleAddClientes}>
            <h1>Atualizar Perfil</h1>
            <Input
              value={nome} onChange={(e) => setNome(e.target.value)}
              name="nome" icon={FiClipboard} placeholder="Digite o Nome completo" />

            <Input
              value={email} onChange={(e) => setEmail(e.target.value)}
              name="email" type="email" icon={FiMail} placeholder="Digite seu Email" />

            <Input
              value={cpf} onChange={(e) => setCpf(e.target.value)}
              name="cpf" icon={FiArchive} placeholder="Digite o CPF" />

            <Input
              value={endereco} onChange={(e) => setEndereco(e.target.value)}
              name="endereco"
              icon={FiLock} type="text" placeholder="Digite seu endereço" />

            <Input
              value={telefone} onChange={(e) => setTelefone(e.target.value)}
              name="telefone"
              icon={FiLock} type="text" placeholder="Digite seu Telefone" />

            <h4>Grupo de Risco</h4>
            <div id="radio-container">
              <ul id="radio-wrapper">
                <li>
                  <input
                    value={"true"}
                    onClick={(e) => setGrupo_de_risco(true)}
                    type="radio" id="f-option"
                    name="selector" />
                  <label htmlFor="f-option">Sim</label>

                  <div className="check"></div>
                </li>
                <li>
                  <input type="radio"
                    value={"false"}
                    onClick={(e) => setGrupo_de_risco(false)}
                    id="s-option" name="selector" />
                  <label htmlFor="s-option">Não</label>
                  <div className="check"><div className="inside"></div></div>
                </li>
              </ul>
            </div>

            <Button type="submit">Atualizar Perfil</Button>
            <Link to="/dashboard/">
              <FiArrowLeft />
              Voltar
            </Link>
          </Form>

        </AnimationContainer>
      </Content>

    </Container>
  );
};

export default CadastroDeClientes;
