import React, {useRef, useCallback, useState, FormEvent} from 'react';
import { FiClipboard, FiArchive, FiBriefcase, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import validationErrors from '../../Utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import {
  Container, Content, AnimationContent,
} from './styles';

import Input from '../../components/Input';

import Button from '../../components/Button';
import { Background } from '../SignIn/styles';
import api from "../../services/api";
import {async} from "q";

interface SignInFormData {
  email: string;
  password: string;
}

const CadastroDeClinicas: React.FC = () => {
  // const formRef = useRef<FormHandles>(null);

  const [cnpj,setCnpj] = useState("")
  const [razao_social,setRazao_social] = useState("");
  const [nome_fantazia,setNome_fanzatia] = useState("");
  const [endereco,setEndereco] = useState("");

  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();


  function handleAddClinicas(event:FormEvent<HTMLFormElement>):void{
    // event.preventDefault();

    try {
      api.post('/clinica/',{
        "cnpj":cnpj,
        "razao_social":razao_social,
        "nome_fantasia":nome_fantazia,
        "endereco":endereco
      }
      );
      console.log(cnpj,razao_social,nome_fantazia,endereco);

    } catch (err) {
      console.log(err.response.error);
    }
  }
  //
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
  //     // await signIn({
  //     //   email: data.email,
  //     //   password: data.password,
  //     // });
  //
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
      <Background/>
      <Content>
        <AnimationContent>
          <img src={logoImg} alt="web-consultas" />
          <Form onSubmit={(e)=> handleAddClinicas(e)}>
            <h1>Cadastre sua clínica</h1>
            <Input
              value={nome_fantazia} onChange={(e)=>setNome_fanzatia(e.target.value)}
              name="nomeFantasia" icon={FiClipboard} placeholder="Nome fantasia" />

            <Input
              value={razao_social} onChange={(e)=> setRazao_social(e.target.value)}
              name="RazãoSocial" icon={FiClipboard} placeholder="Razão social" />

            <Input
              value={cnpj} onChange={(e)=> setCnpj(e.target.value)}
              name="cnpj" icon={FiArchive} placeholder="CNPJ" />

            <Input
              value={endereco} onChange={(e)=> setEndereco(e.target.value)}
              name="endereço" icon={FiBriefcase} placeholder="Endereço" />

            <Input name="contato" icon={FiBriefcase} placeholder="Contato" />

            <Button type="submit">Cadastrar Clinica</Button>
            <Link to="/">
              <FiArrowLeft/>
              Voltar
            </Link>
          </Form>

        </AnimationContent>
      </Content>

    </Container>
  );
};

export default CadastroDeClinicas;
