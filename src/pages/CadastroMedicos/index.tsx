import React, {useRef, useCallback, useState, FormEvent} from 'react';
import {
  FiClipboard, FiArchive, FiFile, FiLock, FiMail, FiArrowLeft,
} from 'react-icons/fi';
import { FaBirthdayCake } from 'react-icons/fa';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { useToast } from '../../hooks/toast';

import validationErrors from '../../Utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import {
  Container, Content, AnimationContainer,
} from './styles';

import Input from '../../components/Input';

import Button from '../../components/Button';
import { Background } from '../SignIn/styles';
import api from "../../services/api";


const CadastroDeMedicos: React.FC = () => {
  const [crm,setCrm] = useState("");
  const [nome,setnome] = useState("");
  const [cpf,setCpf] = useState("");
  const [area_atuacao,setArea_atuacao] = useState("");
  const [email,setEmail] = useState("");
  const [data_nascimento,setData_nascimento] = useState("")
  const [telefone,setTelefone] = useState("")
  const [especialidade,setEspecialidade] = useState("")

  const history = useHistory();

  function handleAddMedicos(event:FormEvent<HTMLFormElement>):void{

    try {
      api.post('/medico/',{
          "crm": crm,
          "nome": nome,
          "cpf": cpf,
          "data_nascimento":data_nascimento,
          "telefone": telefone,
          "email": email,
          "especialidade": especialidade
        }
      );

      history.push('/dashboard/clinica');

    } catch (err) {
      console.log(err.response.error);
    }

  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="web-consultas" />
          <Form onSubmit={handleAddMedicos}>
            <h1>Cadastrar médico</h1>

            <Input
              value={nome} onChange={(e)=>setnome(e.target.value)}
              name="nome" icon={FiClipboard} placeholder="Nome completo" required/>

            <Input 
              value={email} onChange={(e)=>setEmail(e.target.value)}
            name="email" type="email" icon={FiMail} placeholder="E-mail" />

            <Input
              value={telefone} onChange={(e)=>setTelefone(e.target.value)}
              name="crm" icon={FiArchive} placeholder="Digite o Telefone do médico" required/>

            <Input name="dataDeNascimento" 
            value={data_nascimento} onChange={(e)=>setData_nascimento(e.target.value)}
            type="text" icon={FaBirthdayCake} placeholder="data de nascimento" required/>

            <Input
              value={cpf} onChange={(e)=>setCpf(e.target.value)}
              name="cpf" icon={FiArchive} placeholder="Digite o CPF do médico" required/>

            <Input
              value={crm} onChange={(e)=>setCrm(e.target.value)}
              name="crm" icon={FiArchive} placeholder="Digite o CRM do médico" required/>

            <Input
              value={especialidade} required onChange={(e)=>setEspecialidade(e.target.value)}
              name="areaAtuacao" icon={FiArchive} placeholder="Digite a área de atuação do médico" />

            <Button type="submit">Cadastrar</Button>
            <Link to='/dashboard/clinica'>
              <FiArrowLeft/>
              Voltar
            </Link>
          </Form>

        </AnimationContainer>
      </Content>
    <Background/>
    </Container>
  );
};

export default CadastroDeMedicos;
