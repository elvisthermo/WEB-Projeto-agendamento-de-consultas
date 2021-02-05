import React, {useRef, useCallback, useState, FormEvent} from 'react';
import {
  FiClipboard, FiArchive, FiFile, FiLock, FiMail, FiArrowLeft
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
import api from "../../services/api";


const CadastroDeClientes: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const history = useHistory();

  const [cpf,setCpf] = useState("");
  const [nome,setNome] = useState("");
  const [idade,setIdade] = useState("");
  const [endereco,setEndereco] = useState("");
  const [grupo_de_risco,setGrupo_de_risco] = useState("");



  async function handleAddClientes(event:FormEvent<HTMLFormElement>)
    :Promise<void>{
    // event.preventDefault();

    try {
      api.post('/cliente/',
        {
          "cpf": cpf,
          "nome": nome,
          "idade": idade,
          "endereco": endereco,
          "grupo_de_risco": grupo_de_risco
        }
      );



    } catch (err) {
      console.log(err.response.error);
    }
  }


  // const handleSubmit = useCallback(async (data: SignInFormData) => {
  //   try {
  //     formRef.current?.setErrors({});
  //
  //     const schema = Yup.object().shape({
  //       email: Yup.string().required('E-mail obrigatório').email('Digite um email válido'),
  //       password: Yup.string().required('Senha obrigatória'),
  //     });
  //
  //     await schema.validate(data, {
  //       abortEarly: false,
  //     });
  //
  //     await signIn({
  //       email: data.email,
  //       password: data.password,
  //     });
  //
  //     history.push('/dashboard');
  //   } catch (err) {
  //     if (err instanceof Yup.ValidationError) {
  //       const errors = validationErrors(err);
  //
  //       formRef.current?.setErrors(errors);
  //
  //       return;
  //     }
  //
  //     addToast({
  //       type: 'error',
  //       title: 'Erro na autenticação',
  //       description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
  //     });
  //   }
  // }, [signIn, addToast, history]);



  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="web-consultas" />
          <Form onSubmit={handleAddClientes}>
            <h1>Cadastre-se</h1>
            <Input
              value={nome} onChange={(e)=> setNome(e.target.value)}
              name="nome" icon={FiClipboard} placeholder="Digite o Nome completo" />

            <Input name="email" type="email" icon={FiMail} placeholder="Digite seu Email" />

            <Input
              value={idade} onChange={(e)=> setIdade(e.target.value)}
              name="dataDeNascimento" type="date" icon={FaBirthdayCake} placeholder="Digite sua data de nascimento" />

            <Input
              value={cpf} onChange={(e)=> setCpf(e.target.value)}
              name="cpf" icon={FiArchive} placeholder="Digite o CPF" />

            <Input name="validarIdentidade" type="file" icon={FiFile} placeholder="envie a foto de seu documento de identidade" />

            <Input
              value={endereco} onChange={(e)=> setEndereco(e.target.value)}
              name="endereco"
              icon={FiLock} type="text" placeholder="Digite seu endereço" />

            <Input name="password" icon={FiLock} type="password" placeholder="Digite sua senha" />

            <Input name="passwordConfirmar" icon={FiLock} type="password" placeholder="Digite sua senha" />

            <Input
              value={grupo_de_risco} onChange={(e)=> setGrupo_de_risco(e.target.value)}
              name="endereco"
              icon={FiLock} type="text" placeholder="Digite seu endereço" />

            <Button type="submit">Cadastre se</Button>
            <Link to="/">
              <FiArrowLeft/>
              Voltar
            </Link>
          </Form>

        </AnimationContainer>
      </Content>

    </Container>
  );
};

export default CadastroDeClientes;
