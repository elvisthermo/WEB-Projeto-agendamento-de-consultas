import React, {useRef, useCallback, useState} from 'react';
import {
  FiClipboard, FiArchive, FiFile, FiLock, FiMail, FiArrowLeft,
} from 'react-icons/fi';
import { FaBirthdayCake } from 'react-icons/fa';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import validationErrors from '../../Utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import {
  Container, Content, AnimationContainer,
} from './styles';

import Input from '../../components/Input';

import Button from '../../components/Button';
import { Background } from '../SignIn/styles';

interface SignInFormData {
  email: string;
  password: string;
}

const CadastroDeMedicos: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [crm,setCrm] = useState("");
  const [nome,setnome] = useState("");
  const [cpf,setCpf] = useState("");
  const [area_atuacao,setArea_atuacao] = useState("");

  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um email válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn({
        email: data.email,
        password: data.password,
      });

      history.push('/dashboard');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = validationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      addToast({
        type: 'error',
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
      });
    }
  }, [signIn, addToast, history]);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="web-consultas" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Cadastrar médico</h1>

            <Input
              value={nome} onChange={e=>setnome(e.target.value)}
              name="nome" icon={FiClipboard} placeholder="Nome completo"/>

            <Input name="email" type="email" icon={FiMail} placeholder="E-mail" />

            <Input name="dataDeNascimento" type="date" icon={FaBirthdayCake} placeholder="data de nascimento" />

            <Input
              value={cpf} onChange={e=>setCpf(e.target.value)}
              name="cpf" icon={FiArchive} placeholder="Digite o CPF do médico" />

            <Input
              value={crm} onChange={e=>setCrm(e.target.value)}
              name="crm" icon={FiArchive} placeholder="Digite o CRM do médico" />

            <Input name="validarIdentidade" type="file" icon={FiFile} placeholder="Envie a foto do documento de identidade do médico" />

            <Input id="asd" name="validarDiploma" type="file" icon={FiFile} placeholder="Envie a foto do diploma do médico" />

            <label htmlFor="asd">asdasdsadasd</label>


            <Input
              value={area_atuacao} onChange={e=>setArea_atuacao(e.target.value)}
              name="areaAtuacao" icon={FiLock} placeholder="Digite a área de atuação do médico" />

            <Button type="submit">Cadastrar</Button>
            <Link to="/">
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
